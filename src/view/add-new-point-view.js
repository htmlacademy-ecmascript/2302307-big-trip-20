import { EDIT_EVENT_DATETIME_FORMAT, EventType } from '../const';
import { capitalize } from '../utils/common';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import flatpickr from 'flatpickr';

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

const createPointOffersTemplate = (currentOffers) => {
  let pointOffersTemplate = '';

  currentOffers.forEach((offer) => {
    pointOffersTemplate += createPointOfferTemplate(offer);
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

const createAddNewPointTemplate = (state, destinations, offers, currentType = EventType.FLIGHT, currentDestination = null) => {
  const currentOffers = offers.filter((offer) => offer.type === currentType)[0].offers;

  const pointOffersTemplate = currentOffers.length === 0 || !currentOffers ? '' : `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createPointOffersTemplate(currentOffers)}
      </div>
    </section>`;

  const pointDestinationsTemplate = currentDestination === null || currentDestination.description === '' ? '' : `
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
              <img class="event__type-icon" width="17" height="17" src="img/icons/${currentType}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createPointTypeItemsTemplate(currentType)}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${capitalize(currentType)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createDestinationListOptionsTemplate(destinations)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          ${pointOffersTemplate}
          ${pointDestinationsTemplate}
        </section>
      </form>
    </li>`;

  return template;
};

export default class AddNewPointView extends AbstractStatefulView {
  #destinations = null;
  #offers = null;
  #datepickerFrom = null;
  #datepickerTo = null;
  #handleFormSubmit = null;
  #handleDeleteClick = null;

  constructor({ destinations, offers, onFormSubmit, onDeleteClick }) {
    super();
    this._setState(AddNewPointView.parsePointToState({
      basePrice: null,
      dateFrom: null,
      dateTo: null,
      destination: null,
      isFavorite: false,
      offers: [],
      type: EventType.FLIGHT
    }));
    this.#destinations = destinations;
    this.#offers = offers;

    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;
    this._restoreHandlers();
  }

  get template() {
    return createAddNewPointTemplate(this._state ,this.#destinations, this.#offers);
  }

  reset(point) {
    this.updateElement(
      AddNewPointView.parsePointToState(point)
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
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('change', this.#priceChangeHandler);
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
    this.#handleFormSubmit(AddNewPointView.parseStateToPoint(this._state));
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
    this.#handleDeleteClick(AddNewPointView.parseStateToPoint(this._state));
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
