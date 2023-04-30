import { createElement } from '../render';

const createFilterItemTemplate = (value, isChecked = false) => (
  `<div class="trip-filters__filter">
    <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${isChecked ? 'checked' : ''}>
    <label class="trip-filters__filter-label" for="filter-${value}">${value}</label>
  </div>`
);

const createFiltersTemplate = () => (
  `<form class="trip-filters" action="#" method="get">
    ${createFilterItemTemplate('everything', true)}
    ${createFilterItemTemplate('future')}
    ${createFilterItemTemplate('present')}
    ${createFilterItemTemplate('past')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class FiltersView {
  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
