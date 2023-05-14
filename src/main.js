import { render } from './render';
import FiltersView from './view/filters-view';
import PointsPresenter from './presenter/points-presenter';
import PointsModel from './model/points-model';
import TripInfoPresenter from './presenter/trip-info-presenter';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const pointsContainerElement = document.querySelector('.trip-events');
const tripInfoContainerElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel();
const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: tripInfoContainerElement,
  pointsModel: pointsModel
});
const pointsPresenter = new PointsPresenter({
  pointsContainer: pointsContainerElement,
  pointsModel: pointsModel
});

render(new FiltersView(), filtersContainerElement);

tripInfoPresenter.init();
pointsPresenter.init();
