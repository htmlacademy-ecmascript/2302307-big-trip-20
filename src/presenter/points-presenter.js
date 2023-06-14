import { render } from '../framework/render';
import PointListView from '../view/point-list-view';
import NoPointsView from '../view/no-points-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';
import SortView from '../view/sort-view';
import { Sort } from '../const';
import { sortPointsByTime, sortPointsByPrice } from '../utils/point';

export default class PointsPresenter {
  #pointListComponent = new PointListView();
  #noPointsComponent = new NoPointsView();
  #sortComponent = null;
  #mainContainer = null;
  #pointsModel = null;

  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();
  #currentSort = Sort.DAY;
  #sourcedPoints = [];

  constructor({ pointsContainer, pointsModel }) {
    this.#mainContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];
    this.#sourcedPoints = [...this.#pointsModel.points];

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPoints();
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#mainContainer);
  }

  #renderPoint({ point, destinations, offers }) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointListComponent.element,
      onDataChange: this.#handleDataChange,
      onStateChange: this.#handleStateChange
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

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortChange: this.#handleSortChange
    });

    render(this.#sortComponent, this.#mainContainer);
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #sortPoints(sort) {
    switch (sort) {
      case Sort.DAY:
        this.#points = [...this.#sourcedPoints];
        break;
      case Sort.TIME:
        this.#points.sort(sortPointsByTime);
        break;
      case Sort.PRICE:
        this.#points.sort(sortPointsByPrice);
        break;
    }

    this.#currentSort = sort;
  }

  #handleDataChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init({
      point: updatedPoint,
      destinations: this.#destinations,
      offers: this.#offers
    });
  };

  #handleStateChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortChange = (sort) => {
    if (this.#currentSort === sort) {
      return;
    }

    this.#sortPoints(sort);
    this.#clearPointList();
    this.#renderPoints();
  };
}
