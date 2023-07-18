import {Popup} from "./Popup.js";

export class PopupWithConfirm extends Popup{
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._setEvent = this._setEvent.bind(this);
    }

    handleSubmitConfirm(submitConfirm) {
        this._handleSubmit = submitConfirm;
    }

    _setEvent(evt) {
        evt.preventDefault();
        this._handleSubmit();
    }

    open(idCard, cardElement) {
        super.open();
        this.id = idCard;
        this.card = cardElement;
    }

    close() {
        super.close();
    }

}