import dayjs from 'dayjs';
import { capitalize } from '../utils/common';
import { humanizeEventDate, humanizeEventTime } from '../utils/point';
import AbstractView from '../framework/view/abstract-view';

const createSelectedOffersTemplate = (selectedOffers, offersByCurrentType) => {
  let selectedOffersTemplate = '';

  selectedOffers.forEach((selectedOffer) => {
    selectedOffer = offersByCurrentType.filter((offer) => offer.id === selectedOffer)[0];

    selectedOffersTemplate += `
      <li class="event__offer">
        <span class="event__offer-title">${selectedOffer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${selectedOffer.price}</span>
      </li>`;
  });

  return selectedOffersTemplate;
};

const getEventDuaration = (eventDateFrom, eventDateTo) => {
  if (!eventDateTo || !eventDateFrom) {
    return '';
  }

  eventDateFrom = dayjs(eventDateFrom);
  eventDateTo = dayjs(eventDateTo);
  const daysDiff = eventDateTo.diff(eventDateFrom, 'day');
  const hoursDiff = eventDateTo.diff(eventDateFrom, 'hour');
  const minutesDiff = eventDateTo.diff(eventDateFrom, 'minute');

  if (hoursDiff === 0) {
    return `${minutesDiff}M`;
  } else if (hoursDiff > 0 && hoursDiff < 24) {
    return `${hoursDiff}H ${minutesDiff % 60}M`;
  } else if (hoursDiff >= 24) {
    return `${daysDiff}D ${hoursDiff % 24}H ${minutesDiff % 60}M`;
  }
  return '';
};

const createPointTemplate = (point, destinations, offersData) => {
  const { basePrice, dateFrom, dateTo, destination, isFavorite, offers, type } = point;
  const currentDestination = destinations.filter((dest) => dest.id === destination)[0].name;
  const offersByCurrentType = offersData.filter((offer) => offer.type === type)[0].offers;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${humanizeEventDate(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${capitalize(type)} ${currentDestination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${humanizeEventTime(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${humanizeEventTime(dateTo)}</time>
        </p>
        <p class="event__duration">${getEventDuaration(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createSelectedOffersTemplate(offers, offersByCurrentType)}
      </ul>
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};

export default class PointView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({ point, destinations, offers, onEditClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);

    this.#handleFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__favorite-btn ').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointTemplate(this.#point ,this.#destinations, this.#offers);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
