import { render } from '../framework/render';
import PointListView from '../view/point-list-view';
import NoPointsView from '../view/no-points-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';

export default class PointsPresenter {
  #pointListComponent = new PointListView();
  #noPointsComponent = new NoPointsView();
  #mainContainer = null;
  #pointsModel = null;

  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();

  constructor({ pointsContainer, pointsModel }) {
    this.#mainContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderPoints();
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#mainContainer);
  }

  #renderPoint({ point, destinations, offers }) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointListComponent.element,
      onDataChange: this.#dataChangeHandler,
      onStateChange: this.#stateChangeHandler
    });

    pointPresenter.init({ point, destinations, offers });
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    render(this.#pointListComponent, this.#mainContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint({
        point: this.#points[i],
        destinations: this.#destinations,
        offers: this.#offers
      });
    }
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #dataChangeHandler = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init({
      point: updatedPoint,
      destinations: this.#destinations,
      offers: this.#offers
    });
  };

  #stateChangeHandler = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}
