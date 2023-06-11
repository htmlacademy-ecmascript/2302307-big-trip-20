import { render, replace } from '../framework/render';
import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';

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

    render(new SortView(), this.#pointsContainer);
    render(this.#pointListComponent, this.#pointsContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint({
        point: this.#points[i],
        destinations: this.#destinations,
        offers: this.#offers
      });
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

  #handleEditPointButtonClick = () => {

  };

  // render(new EditPointView({
  //   point: this.points[0],
  //   destinations: this.destinations,
  //   offers: this.offers,
  // }), this.pointListComponent.getElement());
}
