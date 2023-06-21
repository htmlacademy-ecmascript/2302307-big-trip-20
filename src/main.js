import BoardPresenter from './presenter/board-presenter';
import PointsModel from './model/points-model';
import TripInfoPresenter from './presenter/trip-info-presenter';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter';
import NewPointButtonView from './view/new-point-button-view';
import { render } from './framework/render';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const mainContainerElement = document.querySelector('.trip-events');
const tripInfoContainerElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel();
const filterModel = new FilterModel();

const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: tripInfoContainerElement,
  pointsModel: pointsModel
});

const boardPresenter = new BoardPresenter({
  pointsContainer: mainContainerElement,
  pointsModel: pointsModel,
  filterModel: filterModel,
  onNewPointDestroy: handleNewPointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: filtersContainerElement,
  filterModel: filterModel,
  pointsModel: pointsModel
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

tripInfoPresenter.init();
filterPresenter.init();
boardPresenter.init();

render(newPointButtonComponent, tripInfoContainerElement);
