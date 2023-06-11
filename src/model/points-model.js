import { getMockDestinations } from '../mock/mock-destinations';
import { getMockOffers } from '../mock/mock-offers';
import { getMockPoints } from '../mock/mock-points';

export default class PointsModel {
  #points = getMockPoints();
  #destinations = getMockDestinations();
  #offers = getMockOffers();

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
