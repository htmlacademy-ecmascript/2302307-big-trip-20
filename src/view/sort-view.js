import { Sort } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createSortItemTemplate = (value, isChecked = false) => (
  `<div class="trip-sort__item  trip-sort__item--${value}">
    <input id="sort-${value}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${value}" ${isChecked ? 'checked' : ''}>
    <label class="trip-sort__btn" for="sort-${value}">${value}</label>
  </div>`
);

const createSortItemsTemplate = (checkedItem) => {
  let sortItemsTemplate = '';
  const sort = Object.values(Sort);

  sort.forEach((sortItem) => {
    sortItemsTemplate += createSortItemTemplate(sortItem, sortItem === checkedItem);
  });
  return sortItemsTemplate;
};

const createSortTemplate = (checkedItem = 'day') => (
  `<form class="trip-events__trip-sort trip-sort" action="#" method="get">
    ${createSortItemsTemplate(checkedItem)}
  </form>`
);

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}
