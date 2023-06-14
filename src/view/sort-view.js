import { Sort } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createSortItemTemplate = (type, isChecked) => (
  `<div class="trip-sort__item  trip-sort__item--${type}">
    <input
      id="sort-${type}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${type}"
      ${isChecked ? 'checked' : ''}
      ${type === Sort.EVENT || type === Sort.OFFERS ? 'disabled' : ''}
    >
    <label class="trip-sort__btn" for="sort-${type}" data-sort-type="${type}">${type}</label>
  </div>`
);

const createSortItemsTemplate = () => {
  let sortItemsTemplate = '';
  const sort = Object.values(Sort);

  sort.forEach((type, index) => {
    sortItemsTemplate += createSortItemTemplate(type, index === 0);
  });
  return sortItemsTemplate;
};

const createSortTemplate = () => (
  `<form class="trip-events__trip-sort trip-sort" action="#" method="get">
    ${createSortItemsTemplate()}
  </form>`
);

export default class SortView extends AbstractView {
  #handleSortChange = null;

  constructor({ onSortChange }) {
    super();
    this.#handleSortChange = onSortChange;

    this.element.addEventListener('click', this.#sortChangeHandler);
  }

  get template() {
    return createSortTemplate();
  }

  #sortChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL' || evt.target.disabled === true) {
      return;
    }

    this.#handleSortChange(evt.target.dataset.sortType);
  };
}
