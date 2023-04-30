import { render } from '../render';
import SortView from '../view/sort-view';
import EventListView from '../view/event-list-view';
import EventItemView from '../view/event-item-view';
import AddNewPointView from '../view/add-new-point-view';
import EditPointView from '../view/edit-point-view';

export default class TripEventsPresenter {
  eventListComponent = new EventListView();

  constructor({ tripEventsContainer }) {
    this.tripEventsContainer = tripEventsContainer;
  }

  init() {
    render(new SortView(), this.tripEventsContainer);
    render(this.eventListComponent, this.tripEventsContainer);
    render(new AddNewPointView(), this.eventListComponent.getElement());
    render(new EditPointView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventItemView(), this.eventListComponent.getElement());
    }
  }
}
