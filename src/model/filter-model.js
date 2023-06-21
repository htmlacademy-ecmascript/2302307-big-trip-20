import Observable from '../framework/observable';
import { Filter } from '../const';

export default class FilterModel extends Observable {
  #filter = Filter.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }
}
