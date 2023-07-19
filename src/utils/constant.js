
export const apiData = {
  url: 'https://nomoreparties.co/v1/cohort-71',
  headers: {
    authorization: 'cea06709-9d9e-4f6f-a014-355766539fc7',
    'Content-type': 'application/json'
  }
}

// переменные профиля
export const profileOpenButton = document.querySelector(".profile__edit-button");
export const profileOpenAddButton = document.querySelector(".profile__add-button");
export const popupProfile = document.querySelector(".popup_type_profile");
export const formEdit = popupProfile.querySelector(".popup__form_type_profile");
export const nameInput = formEdit.querySelector(".popup__input_type_name");
export const aboutInput = formEdit.querySelector(".popup__input_type_about");
export const popupEditAvatar = document.querySelector('.popup_type_avatar');
export const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
export const formAvatar = popupEditAvatar.querySelector('.popup__form_type_avatar');
export const avatarInput = formAvatar.querySelector('.popup__input_type_avatar');
// переменные карточек
export const popupAdd = document.querySelector(".popup_type_add");
export const cardTemplate = ".elements__item";

export const initialCards = [
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

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
