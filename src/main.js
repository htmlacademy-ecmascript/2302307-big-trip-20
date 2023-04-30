import { render, RenderPosition } from './render';
import FiltersView from './view/filters-view';
import TripInfoView from './view/trip-info-view';
import TripEventsPresenter from './presenter/trip-events-presenter';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsContainerElement = document.querySelector('.trip-events');
const tripInfoContainerElement = document.querySelector('.trip-main');

const tripEventsPresenter = new TripEventsPresenter({ tripEventsContainer: tripEventsContainerElement });

render(new TripInfoView(), tripInfoContainerElement, RenderPosition.AFTERBEGIN);
render(new FiltersView(), filtersContainerElement);

tripEventsPresenter.init();
