import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
    constructor(popupImageSelector) {
        super(popupImageSelector)
        this._popupPicture = this._popupSelector.querySelector('.popup__picture');
        this._popupCaption = this._popupSelector.querySelector('.popup__figcaption')

    }

    open (name, link) {
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        this._popupCaption.textContent = name;
        super.open()
    }
}