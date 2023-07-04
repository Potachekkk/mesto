export default class Card {
  constructor({data, handleImageClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleImageClick = handleImageClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElementNew = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);
    return cardElementNew;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._elementImage = this._cardElement.querySelector(".element__image");
    this._elementLike = this._cardElement.querySelector(
      ".element__like-button"
    );
    this._elementDelete = this._cardElement.querySelector(
      ".element__delete-button"
    );

    this._setEventListeners();

    this._elementImage.title = this._cardElement.querySelector(
      ".element__title"
    ).textContent = this._name;
    this._elementImage.src = this._elementImage.src = this._link;
    this._elementImage.alt = this._elementImage.alt = this._name;
    return this._cardElement;
  }

  _deleteItem = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _likeItem() {
    this._elementLike.classList.toggle("element__like-button_active");
  }

  _setEventListeners() {
    this._elementDelete.addEventListener("click", () => {
      this._deleteItem();
    });
    this._elementLike.addEventListener("click", () => {
      this._likeItem();
    });
    this._elementImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
}
