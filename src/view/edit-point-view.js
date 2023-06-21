import { EDIT_EVENT_DATETIME_FORMAT, EventType } from '../const';
import { capitalize } from '../utils/common';
import { humanizeEditEventDatetime } from '../utils/point';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const createPointTypeItemTemplate = (type, isChecked = false) => (
  `<div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type[0].toUpperCase() + type.slice(1)}</label>
  </div>`
);

const createPointTypeItemsTemplate = (currentType) => {
  let pointTypeItemsTemplate = '';
  const pointTypes = Object.values(EventType);

  pointTypes.forEach((pointType) => {
    pointTypeItemsTemplate += createPointTypeItemTemplate(pointType, pointType === currentType);
  });

  return pointTypeItemsTemplate;
};

const createPointOfferTemplate = (offer, isChecked = false) => (
  `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden"
      id="${offer.id}"
      type="checkbox"
      name="event-offer-${offer.title}"
      ${isChecked ? 'checked' : ''}
    >
    <label class="event__offer-label" for="${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`
);

const createPointOffersTemplate = (offers, currentOffers) => {
  let pointOffersTemplate = '';

  currentOffers.forEach((offer) => {
    pointOffersTemplate += createPointOfferTemplate(offer, offers.includes(offer.id));
  });
  return pointOffersTemplate;
};

const createDestinationListOptionsTemplate = (destinations) => {
  let destinationListOptionsTemplate = '';

  destinations.forEach((destination) => {
    destinationListOptionsTemplate += `<option value="${destination.name}"></option>`;
  });
  return destinationListOptionsTemplate;
};

const createDestinationPicturesTemplate = (currentDestination) => {
  const pictures = currentDestination.pictures;
  if (!pictures || pictures.length === 0) {
    return '';
  }
  let destinationPicturesTemplate = '<div class="event__photos-container"><div class="event__photos-tape">';

  pictures.forEach((picture) => {
    destinationPicturesTemplate += `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`;
  });
  destinationPicturesTemplate += '</div></div>';
  return destinationPicturesTemplate;
};

const createEditPointTemplate = (point, destinations, offersData) => {
  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;
  const currentDestination = destinations.filter((dest) => dest.id === destination)[0];
  const currentOffers = offersData.filter((offer) => offer.type === type)[0].offers;

  const pointOffersTemplate = currentOffers.length === 0 || !currentOffers ? '' : `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createPointOffersTemplate(offers, currentOffers)}
      </div>
    </section>`;

  const pointDestinationsTemplate = currentDestination.description === '' || !currentDestination.description ? '' : `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${currentDestination.description}</p>
      ${createDestinationPicturesTemplate(currentDestination)}
    </section>`;

  const template = `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createPointTypeItemsTemplate(type)}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${capitalize(type)}
            </label>
            <input class="event__input  event__input--destination" id="${destination}" type="text" name="event-destination" value="${currentDestination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createDestinationListOptionsTemplate(destinations)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeEditEventDatetime(dateFrom)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeEditEventDatetime(dateTo)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${pointOffersTemplate}
          ${pointDestinationsTemplate}
        </section>
      </form>
    </li>`;

  return template;
};

export default class EditPointView extends AbstractStatefulView {
  #destinations = null;
  #offers = null;
  #datepickerFrom = null;
  #datepickerTo = null;
  #handleFormSubmit = null;
  #handleFormClose = null;
  #handleDeleteClick = null;

  constructor({ point, destinations, offers, onFormSubmit, onFormClose, onDeleteClick }) {
    super();
    this._setState(EditPointView.parsePointToState(point));
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormClose = onFormClose;
    this.#handleDeleteClick = onDeleteClick;
    this._restoreHandlers();
  }

  get template() {
    return createEditPointTemplate(this._state ,this.#destinations, this.#offers);
  }

  reset(point) {
    this.updateElement(
      EditPointView.parsePointToState(point)
    );
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  static parsePointToState(point) {
    return { ...point };
  }

  static parseStateToPoint(state) {
    return { ...state };
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formCloseHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('change', this.#priceChangeHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteHandler);
    this.element.querySelectorAll('.event__type-label').forEach((labelElement) => {
      labelElement.addEventListener('click', this.#typeChangeHandler);
    });
    this.element.querySelectorAll('.event__offer-checkbox').forEach((element) => {
      element.addEventListener('change', this.#offersChangeHandler);
    });
    this.#setDatepickerFrom();
    this.#setDatepickerTo();
  }

  #setDatepickerFrom() {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('input#event-start-time-1'),
      {
        dateFormat: EDIT_EVENT_DATETIME_FORMAT,
        onChange: this.#dateFromHandler
      }
    );
  }

  #setDatepickerTo() {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('input#event-end-time-1'),
      {
        dateFormat: EDIT_EVENT_DATETIME_FORMAT,
        onChange: this.#dateToHandler
      }
    );
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditPointView.parseStateToPoint(this._state));
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormClose();
  };

  #typeChangeHandler = (evt) => {
    evt.preventDefault();
    const newType = evt.target.textContent.toLowerCase();
    this.updateElement({
      type: newType,
      offers: []
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    if (!evt.target.value) {
      return;
    }

    const newDestination = this.#destinations.filter((dest) => dest.name === evt.target.value)[0].id;
    this.updateElement({
      destination: newDestination
    });
  };

  #offersChangeHandler = (evt) => {
    evt.preventDefault();

    let selectedOffers = this._state.offers.slice();

    if (evt.target.checked) {
      selectedOffers.push(evt.target.id);
    } else {
      selectedOffers = selectedOffers.filter((offer) => offer !== evt.target.id);
    }

    this._setState({
      offers: selectedOffers
    });
  };

  #priceChangeHandler = (evt) => {
    evt.preventDefault();

    if (!evt.target.value) {
      return;
    }

    this._setState({
      basePrice: evt.target.value
    });
  };

  #formDeleteHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EditPointView.parseStateToPoint(this._state));
  };

  #dateFromHandler = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate
    });
  };

  #dateToHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate
    });
  };
}
