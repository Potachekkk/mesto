export default class FormValidator {
  constructor(value, formElement) {
    this._value = value;
    this._formSelector = value.formSelector;
    this._inputSelector = value.inputSelector;
    this._submitButtonSelector = value.submitButtonSelector;
    this._inactiveButtonClass = value.inactiveButtonClass;
    this._inputErrorClass = value.inputErrorClass;
    this._errorClass = value.errorClass;

    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // изменение состояния кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._addClass(this._buttonElement, this._inactiveButtonClass);
    } else {
      this._removeClass(this._buttonElement, this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  // показать ошибку
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    this._addClass(inputElement, this._inputErrorClass);
    errorElement.textContent = errorMessage;
    this._removeClass(errorElement, this._errorClass);
  }

  // скрыть ошибку
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    this._removeClass(inputElement, this._inputErrorClass);
    this._removeClass(errorElement, this._errorClass);
    errorElement.textContent = "";
  }

  _addClass(el, elClass) {
    el.classList.add(elClass);
  }

  _removeClass(el, elClass) {
    el.classList.remove(elClass);
  }

  // проверка валидности
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // установка слушателей
  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // сброс проверки
  _clearValidate() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
