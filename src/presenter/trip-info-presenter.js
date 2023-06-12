import { render, RenderPosition } from '../framework/render';
import TripInfoView from '../view/trip-info-view';

export default class TripInfoPresenter {
  #tripInfoContainer = null;
  #pointsModel = null;
  #points = [];
  #destinations = [];
  #offers = [];

  constructor({ tripInfoContainer, pointsModel }) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    if (this.#points.length > 0) {
      render(new TripInfoView({ points: this.#points, destinations: this.#destinations, offers: this.#offers }), this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
    }
  }
}
