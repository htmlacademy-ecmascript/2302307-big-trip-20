import dayjs from 'dayjs';
import { humanizeEventDate } from '../utils/point';
import AbstractView from '../framework/view/abstract-view';

const getInfoTitle = (points, destinations) => {
  const uniqueLocations = [...new Set(points.map((pointObject) => pointObject.destination))];
  const startLocation = destinations.filter((dest) => dest.id === points[0].destination)[0].name;
  const endLocation = destinations.filter((dest) => dest.id === points[points.length - 1].destination)[0].name;

  // TODO: Нужно переписать с учётом всех корнер кейсов. Поскольку это доп.задание, то сделаю чуть позже.
  if (uniqueLocations.length >= 3) {
    return `${startLocation} &mdash; ... &mdash; ${endLocation}`;
  } else if (uniqueLocations.length === 2 && startLocation === endLocation) {
    const midLocation = destinations.filter((dest) => dest.id === uniqueLocations[1])[0].name;
    return `${startLocation} &mdash; ${midLocation} &mdash; ${endLocation}`;
  } else if (uniqueLocations.length === 2 && startLocation !== endLocation || uniqueLocations.length === 1) {
    return `${startLocation} &mdash; ${endLocation}`;
  }

  return '';
};

const getInfoDates = (points) => {
  const startDate = dayjs(points[0].dateFrom) ;
  const endDate = dayjs(points[points.length - 1].dateTo);

  if (startDate.month() === endDate.month()) {
    return `${humanizeEventDate(startDate)}&nbsp;&mdash;&nbsp;${endDate.format('D')}`;
  }

  return `${humanizeEventDate(startDate)}&nbsp;&mdash;&nbsp;${humanizeEventDate(endDate)}`;
};

const getCostValue = (points, offers) => {
  let costValue = 0;

  points.forEach((point) => {
    const offersByCurrentType = offers.filter((offer) => offer.type === point.type)[0].offers;
    const selectedOffers = offersByCurrentType.filter((offer) => point.offers.includes(offer.id));
    costValue += selectedOffers.reduce((sum, offer) => sum + offer.price, 0) + point.basePrice;
  });

  return costValue;
};


const createTripInfoTemplate = (points, destinations, offers) => {
  const infoTitle = getInfoTitle(points, destinations);
  const infoDates = getInfoDates(points);
  const costValue = getCostValue(points, offers);

  return (`<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${infoTitle}</h1>

      <p class="trip-info__dates">${infoDates}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${costValue}</span>
    </p>
  </section>`);
};

export default class TripInfoView extends AbstractView {
  #points = null;
  #destinations = null;
  #offers = null;

  constructor({ points, destinations, offers }) {
    super();
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createTripInfoTemplate(this.#points, this.#destinations, this.#offers);
  }
}
