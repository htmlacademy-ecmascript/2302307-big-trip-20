import { render } from '../render';
import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import AddNewPointView from '../view/add-new-point-view';
import EditPointView from '../view/edit-point-view';


export default class PointsPresenter {
  pointListComponent = new PointListView();

  constructor({ pointsContainer, pointsModel }) {
    this.pointsContainer = pointsContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];

    render(new SortView(), this.pointsContainer);
    render(this.pointListComponent, this.pointsContainer);

    render(new AddNewPointView({
      destinations: this.destinations,
      offers: this.offers,
    }), this.pointListComponent.getElement());

    render(new EditPointView({
      point: this.points[0],
      destinations: this.destinations,
      offers: this.offers,
    }), this.pointListComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      render(new PointView({
        point: this.points[i],
        destinations: this.destinations,
        offers: this.offers
      }), this.pointListComponent.getElement());
    }
  }
}
