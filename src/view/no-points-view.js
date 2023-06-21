import { NoPointsText } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createNoPointsTemplate = (filter) => {
  const noPointsText = NoPointsText[filter.toUpperCase()];
  return `<p class="trip-events__msg">${noPointsText}</p>`;
};

export default class NoPointsView extends AbstractView {
  #filter = null;

  constructor({ filter: filter }) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createNoPointsTemplate(this.#filter);
  }
}
