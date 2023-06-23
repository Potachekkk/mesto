export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  // показать ошибку
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    this._addClass(inputElement, this._inputErrorClass);
    errorElement.textContent = errorMessage;
    this._removeClass(errorElement, this._errorClass);
  };

  // скрыть ошибку
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    this._removeClass(inputElement, this._inputErrorClass);
    this._removeClass(errorElement, this._errorClass);
    errorElement.textContent = "";
  };

  // проверка валидности
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // установка слушателей
  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
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
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._removeClass(this._buttonElement, this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _addClass(el, elClass) {
    el.classList.add(elClass);
  }

  _removeClass(el, elClass) {
    el.classList.remove(elClass);
  }

  addButtonInactive() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  // сброс проверки
  clearValidate() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
