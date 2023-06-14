import AbstractView from '../framework/view/abstract-view';

const createFilterItemTemplate = (type, count, isChecked) => (
  `<div class="trip-filters__filter">
    <input
      id="filter-${type}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${type}"
      ${isChecked && count > 0 ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>`
);

const createFilterItemsTemplate = (filters) => {
  let filterItemsTemplate = '';

  filters.forEach((filter, index) => {
    const { type, count } = filter;
    filterItemsTemplate += createFilterItemTemplate(type, count, index === 0);
  });
  return filterItemsTemplate;
};

const createFiltersTemplate = (filters) => (
  `<form class="trip-filters" action="#" method="get">
    ${createFilterItemsTemplate(filters)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class FiltersView extends AbstractView {
  #filters = null;

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
