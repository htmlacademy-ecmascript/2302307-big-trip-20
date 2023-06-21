import { render, remove } from '../framework/render';
import PointListView from '../view/point-list-view';
import NoPointsView from '../view/no-points-view';
import PointPresenter from './point-presenter';
import SortView from '../view/sort-view';
import { Sort, UpdateType, UserAction, Filter } from '../const';
import { sortPointsByTime, sortPointsByPrice, sortPointsByDay } from '../utils/point';
import { filter } from '../utils/filter';
import NewPointPresenter from './new-point-presenter';

export default class BoardPresenter {
  #pointListComponent = new PointListView();
  #noPointsComponent = null;
  #sortComponent = null;
  #mainContainer = null;
  #pointsModel = null;
  #filterModel = null;

  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();
  #newPointPresenter = null;
  #currentSort = Sort.DAY;
  #currentFilter = Filter.EVERYTHING;

  constructor({ pointsContainer, pointsModel, filterModel, onNewPointDestroy }) {
    this.#mainContainer = pointsContainer;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;

    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#pointListComponent,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy,
      pointsModel: this.#pointsModel
    });

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    this.#renderBoard();
  }

  get points() {
    this.#currentFilter = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#currentFilter](points);

    switch (this.#currentSort) {
      case Sort.DAY:
        return filteredPoints.sort(sortPointsByDay);
      case Sort.TIME:
        return filteredPoints.sort(sortPointsByTime);
      case Sort.PRICE:
        return filteredPoints.sort(sortPointsByPrice);
    }

    return filteredPoints;
  }

  createPoint() {
    this.#currentSort = Sort.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, Filter.EVERYTHING);
    this.#newPointPresenter.init();
  }

  #renderNoPoints() {
    this.#noPointsComponent = new NoPointsView({
      filter: this.#currentFilter
    });
    render(this.#noPointsComponent, this.#mainContainer);
  }

  #renderPoint({ point, destinations, offers }) {
    const pointPresenter = new PointPresenter({
      pointsContainer: this.#pointListComponent.element,
      onDataChange: this.#handleViewAction,
      onStateChange: this.#handleStateChange
    });

    pointPresenter.init({ point, destinations, offers });
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    render(this.#pointListComponent, this.#mainContainer);

    this.points.forEach((point) => {
      this.#renderPoint({
        point: point,
        destinations: this.#destinations,
        offers: this.#offers
      });
    });
  }

  #renderBoard() {
    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPoints();
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortChange: this.#handleSortChange,
      currentSort: this.#currentSort
    });

    render(this.#sortComponent, this.#mainContainer);
  }

  #clearBoard(resetSort = false) {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);

    if (this.#noPointsComponent) {
      remove(this.#noPointsComponent);
    }

    if (resetSort) {
      this.#currentSort = Sort.DAY;
    }
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch(actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch(updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init({
          point: data,
          destinations: this.#destinations,
          offers: this.#offers
        });
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard(true);
        this.#renderBoard();
        break;
    }
  };

  #handleStateChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleSortChange = (sort) => {
    if (this.#currentSort === sort) {
      return;
    }

    this.#currentSort = sort;
    this.#clearBoard();
    this.#renderBoard();
  };
}
