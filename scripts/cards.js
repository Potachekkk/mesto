const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

class Card {
  constructor(name, link, openPopupPic, templateSelector) {
    this._name = name;
    this._link = link;
    this._openPopupPic = openPopupPic;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const templateCards = document.querySelector(this._templateSelector).content;
    const itemElement = templateCards.cloneNode(true);
    return itemElement;
  }

  _openItem() {
    this._openPopupPic(this._name, this._link);
  }

  _deleteItem() {
    this._element.remove()
  }

  _likeItem() {
  evt.target.classList.toggle("element__like-button_active");
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
  }

  generateCard() {
    this._element = this._getTemplate();
    const elementImage = itemElement.querySelector(".element__image");
    elementImage.src = this._link;
    elementImage.alt = `Изображение места ${this._name}`;
    this._element.querySelector('.popup__figcaption').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteItem();
    })
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._likeItem();
    })
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openItem();
  })
}}
