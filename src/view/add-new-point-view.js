import { EventType } from '../const';
import { capitalize } from '../util';
import AbstractView from '../framework/view/abstract-view';

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

const createPointOfferTemplate = (offer) => (
  `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}-${offer.id}" type="checkbox" name="event-offer-${offer.title}">
    <label class="event__offer-label" for="event-offer-${offer.title}-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`
);

const createPointOffersTemplate = (offers, currentType) => {
  const currentOffers = offers.filter((offer) => offer.type === currentType)[0].offers;
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

const createAddNewPointTemplate = (destinations, offers, currentType = EventType.DRIVE) => (
  `<li class="trip-events__item">
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
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${createPointOffersTemplate(offers, currentType)}
          </div>
        </section>
      </section>
    </form>
  </li>`
);

export default class AddNewPointView extends AbstractView {
  #destinations = null;
  #offers = null;

  constructor({ destinations, offers }) {
    super();
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createAddNewPointTemplate(this.#destinations, this.#offers);
  }
}
