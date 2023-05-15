import { RenderPosition, render } from '../render';
import TripInfoView from '../view/trip-info-view';

export default class TripInfoPresenter {
  constructor({ tripInfoContainer, pointsModel }) {
    this.tripInfoContainer = tripInfoContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];

    render(new TripInfoView({ points: this.points, destinations: this.destinations, offers: this.offers }), this.tripInfoContainer, RenderPosition.AFTERBEGIN);
  }
}
