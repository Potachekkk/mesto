import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleCardFormSubmit }) {
    super(popupSelector);
    this._handleCardFormSubmit = handleCardFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._buttonSubmit = this._form.querySelector('.popup__button-submit');
    this._buttonSubmitText = this._buttonSubmit.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleCardFormSubmit(this._getInputValues());
      this.close();
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
        this._buttonSubmit.textContent = 'Сохранение...';
    } else {
        this._buttonSubmit.textContent = this._buttonSubmitText;
    }
}

  close() {
    super.close();
    this._form.reset();
  }
}
