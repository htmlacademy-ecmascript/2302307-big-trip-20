import { createElement } from '../render';

const createSortItemTemplate = (value, isChecked = false) => (
  `<div class="trip-sort__item  trip-sort__item--${value}">
    <input id="sort-${value}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${value}" ${isChecked ? 'checked' : ''}>
    <label class="trip-sort__btn" for="sort-${value}">${value}</label>
  </div>`
);

const createSortTemplate = () => (
  `<form class="trip-events__trip-sort trip-sort" action="#" method="get">
    ${createSortItemTemplate('day', true)}
    ${createSortItemTemplate('event')}
    ${createSortItemTemplate('time')}
    ${createSortItemTemplate('price')}
    ${createSortItemTemplate('offers')}
  </form>`
);

export default class SortView {
  getTemplate() {
    return createSortTemplate();
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
