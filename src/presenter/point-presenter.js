import { remove, render, replace } from '../framework/render';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';
import { PointState } from '../const';
import { UserAction, UpdateType } from '../const';
import { isDatesEqual, isPricesEquals } from '../utils/point';

export default class PointPresenter {
  #pointsContainer = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #handleDataChange = null;
  #handleStateChange = null;

  #point = [];
  #destinations = [];
  #offers = [];
  #state = PointState.DEFAULT;

  constructor({ pointsContainer, onDataChange, onStateChange }) {
    this.#pointsContainer = pointsContainer;
    this.#handleDataChange = onDataChange;
    this.#handleStateChange = onStateChange;
  }

  init({ point, destinations, offers }) {
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#pointComponent = new PointView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#pointEditComponent = new EditPointView({
      point: this.#point,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
      onFormClose: this.#handleFormClose,
      onDeleteClick: this.#handleDeleteClick
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    if (this.#state === PointState.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#state === PointState.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#state !== PointState.DEFAULT) {
      this.#pointEditComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#pointEditComponent.reset(this.#point);
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#state = PointState.DEFAULT;
  }

  #replacePointToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleStateChange();
    this.#state = PointState.EDITING;
  }

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (update) => {
    const isMinorUpdate = !isDatesEqual(this.#point.dateFrom, update.dateFrom) ||
      !isDatesEqual(this.#point.dateTo, update.dateTo) || !isPricesEquals(this.#point.basePrice, update.basePrice);

    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update
    );
    this.#replaceFormToPoint();
  };

  #handleFormClose = () => {
    this.#pointEditComponent.reset(this.#point);
    this.#replaceFormToPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      { ...this.#point, isFavorite: !this.#point.isFavorite }
    );
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point
    );
  };
}
