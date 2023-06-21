import AbstractView from '../framework/view/abstract-view';

const createFilterItemTemplate = (type, count, currentFilter) => (
  `<div class="trip-filters__filter">
    <input
      id="filter-${type}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${type}"
      ${type === currentFilter ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>`
);

const createFilterItemsTemplate = (filters, currentFilter) => {
  let filterItemsTemplate = '';

  filters.forEach((filter) => {
    const { type, count } = filter;
    filterItemsTemplate += createFilterItemTemplate(type, count, currentFilter);
  });
  return filterItemsTemplate;
};

const createFiltersTemplate = (filters, currentFilter) => (
  `<form class="trip-filters" action="#" method="get">
    ${createFilterItemsTemplate(filters, currentFilter)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterChange = null;

  constructor({ filters, currentFilter, onFilterChange }) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilter;
    this.#handleFilterChange = onFilterChange;

    this.element.addEventListener('change', this.#filterChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #filterChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterChange(evt.target.value);
  };
}
