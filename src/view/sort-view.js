import AbstractView from '../framework/view/abstract-view';

const createSortItemTemplate = (type, count, isChecked) => (
  `<div class="trip-sort__item  trip-sort__item--${type}">
    <input
      id="sort-${type}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${type}"
      ${isChecked && count > 0 ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>`
);

const createSortItemsTemplate = (sort) => {
  let sortItemsTemplate = '';

  sort.forEach((sortItem, index) => {
    const { type, count } = sortItem;
    sortItemsTemplate += createSortItemTemplate(type, count, index === 0);
  });
  return sortItemsTemplate;
};

const createSortTemplate = (sort) => (
  `<form class="trip-events__trip-sort trip-sort" action="#" method="get">
    ${createSortItemsTemplate(sort)}
  </form>`
);

export default class SortView extends AbstractView {
  #sort = null;

  constructor({ sort }) {
    super();
    this.#sort = sort;
  }

  get template() {
    return createSortTemplate(this.#sort);
  }
}
