export default class Card {
  constructor(
    { data, userId, handleImageClick, handleDeleteClick, handleCardLike },
    templateSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;

    this._handleImageClick = handleImageClick;
    this._templateSelector = templateSelector;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    const cardElementNew = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElementNew;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._elementImage = this._cardElement.querySelector(".element__image");
    this._likesCount = this._cardElement.querySelector(".element__like-count");
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

    this._hideDeleteButton();

    this.setLike(this._likes);

    this._checkOwnLike();

    return this._cardElement;
  }

  deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _hideDeleteButton() {
    if (this._ownerId !== this._userId) {
      this._elementDelete.remove();
    }
  }

  _setEventListeners() {
    this._elementDelete.addEventListener("click", () => {
      this._handleDeleteClick();
    });
    this._elementLike.addEventListener("click", () => {
      this._handleCardLike();
    });
    this._elementImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  _checkOwnLike() {
    this.isLiked() ? this.addLike() : this.deleteLike();
  }

  setLike(data) {
    this._likes = data;
    this._likesCount.textContent = this._likes.length;
  }

  addLike = () => {
    this._elementLike.classList.add("element__like-button_active");
  };

  deleteLike = () => {
    this._elementLike.classList.remove("element__like-button_active");
  };
}
