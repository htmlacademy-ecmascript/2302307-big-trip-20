import { render } from './framework/render';
import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import PointsPresenter from './presenter/points-presenter';
import PointsModel from './model/points-model';
import TripInfoPresenter from './presenter/trip-info-presenter';
import { createMockFilter } from './mock/mock-filter';
import { createMockSort } from './mock/mock-sort';


const filtersContainerElement = document.querySelector('.trip-controls__filters');
const pointsContainerElement = document.querySelector('.trip-events');
const tripInfoContainerElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel();
const filters = createMockFilter(pointsModel.points);
const sort = createMockSort(pointsModel.points);

const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: tripInfoContainerElement,
  pointsModel: pointsModel
});

const pointsPresenter = new PointsPresenter({
  pointsContainer: pointsContainerElement,
  pointsModel: pointsModel
});

render(new FiltersView({ filters }), filtersContainerElement);
render(new SortView({ sort }), pointsContainerElement);

tripInfoPresenter.init();
pointsPresenter.init();
