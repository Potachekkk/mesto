// переменные профиля
export const profileOpenButton = document.querySelector(".profile__edit-button");
export const profileOpenAddButton = document.querySelector(".profile__add-button");
export const popupProfile = document.querySelector(".popup_type_profile");
export const formEdit = popupProfile.querySelector('.popup__form_type_profile');
export const nameInput = formEdit.querySelector(".popup__input_type_name");
export const aboutInput = formEdit.querySelector(".popup__input_type_about");

// переменные карточек
export const popupImage = document.querySelector(".popup_type_open-image");
export const popupAdd = document.querySelector(".popup_type_add");
export const cardTemplate = '.elements__item';

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
