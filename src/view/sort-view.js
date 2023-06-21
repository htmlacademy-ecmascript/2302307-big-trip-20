import { Sort } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createSortItemTemplate = (type, currentSort) => (
  `<div class="trip-sort__item  trip-sort__item--${type}">
    <input
      id="sort-${type}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${type}"
      ${currentSort === type ? 'checked' : ''}
      ${type === Sort.EVENT || type === Sort.OFFERS ? 'disabled' : ''}
    >
    <label class="trip-sort__btn" for="sort-${type}" data-sort-type="${type}">${type}</label>
  </div>`
);

const createSortItemsTemplate = (currentSort) => {
  let sortItemsTemplate = '';
  const sort = Object.values(Sort);

  sort.forEach((type) => {
    sortItemsTemplate += createSortItemTemplate(type, currentSort);
  });
  return sortItemsTemplate;
};

const createSortTemplate = (currentSort) => (
  `<form class="trip-events__trip-sort trip-sort" action="#" method="get">
    ${createSortItemsTemplate(currentSort)}
  </form>`
);

export default class SortView extends AbstractView {
  #handleSortChange = null;
  #currentSort = null;

  constructor({ onSortChange, currentSort }) {
    super();
    this.#handleSortChange = onSortChange;
    this.#currentSort = currentSort;

    this.element.addEventListener('click', this.#sortChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSort);
  }

  #sortChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL' || evt.target.disabled === true) {
      return;
    }

    this.#handleSortChange(evt.target.dataset.sortType);
  };
}
