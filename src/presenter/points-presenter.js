import { render, replace } from '../framework/render';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';
import EmptyListView from '../view/empty-list-view';

export default class PointsPresenter {
  #pointListComponent = new PointListView();
  #pointsContainer = null;
  #pointsModel = null;
  #points = [];
  #destinations = [];
  #offers = [];

  constructor({ pointsContainer, pointsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    if (this.#points.length === 0) {
      this.#renderEmptyList();
    } else {
      this.#renderPoints();
    }
  }

  #renderPoint({ point, destinations, offers }) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      destinations,
      offers,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }});

    const editPointFormComponent = new EditPointView({
      point,
      destinations,
      offers,
      onFormSubmit: () => {
        escKeyDownHandler();
      },
      onFormClose: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }});

    function replaceFormToPoint() {
      replace(pointComponent, editPointFormComponent);
    }

    function replacePointToForm() {
      replace(editPointFormComponent, pointComponent);
    }

    render(pointComponent, this.#pointListComponent.element);
  }

  #renderPoints() {
    render(this.#pointListComponent, this.#pointsContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint({
        point: this.#points[i],
        destinations: this.#destinations,
        offers: this.#offers
      });
    }
  }

  #renderEmptyList() {
    render(new EmptyListView(), this.#pointsContainer);
  }
}
