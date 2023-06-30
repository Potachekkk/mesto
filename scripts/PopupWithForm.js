import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, {handleCardFormSubmit}) {
        super(popupSelector);
        this._handleCardFormSubmit = handleCardFormSubmit;
        this._form = popupSelector.querySelector('.popup__form')
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
    }

    _getInputValues() {
        this._inputList
    }
}