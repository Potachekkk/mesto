import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector(".popup__picture");
    this._popupFigcaption =
      this._popup.querySelector(".popup__figcaption");
  }

  open(name, link) {
    this._popupPicture.src = link;
    this._popupPicture.alt = name;
    this._popupFigcaption.textContent = name;
    super.open();
  }
}
