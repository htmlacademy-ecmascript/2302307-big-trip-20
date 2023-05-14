import { getMockDestinations } from '../mock/mock-destinations';
import { getMockOffers } from '../mock/mock-offers';
import { getMockPoints } from '../mock/mock-points';

export default class PointsModel {
  points = getMockPoints();
  destinations = getMockDestinations();
  offers = getMockOffers();

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
