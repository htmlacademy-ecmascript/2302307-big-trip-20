import { Filter } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createFilterItemTemplate = (value, isChecked = false) => (
  `<div class="trip-filters__filter">
    <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${isChecked ? 'checked' : ''}>
    <label class="trip-filters__filter-label" for="filter-${value}">${value}</label>
  </div>`
);

const createFilterItemsTemplate = (checkedItem) => {
  let filterItemsTemplate = '';
  const filters = Object.values(Filter);

  filters.forEach((filter) => {
    filterItemsTemplate += createFilterItemTemplate(filter, filter === checkedItem);
  });
  return filterItemsTemplate;
};

const createFiltersTemplate = (checkedItem = 'everything') => (
  `<form class="trip-filters" action="#" method="get">
    ${createFilterItemsTemplate(checkedItem)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class FiltersView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}
