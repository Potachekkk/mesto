import { initialCards, validationConfig } from "./constant.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// переменные профиля
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileOpenAddButton = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_type_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const profileInfoTitle = document.querySelector(".profile__title");
const profileInfoSubtitle = document.querySelector(".profile__subtitle");
const profileForm = document.forms["profile-form"];

// переменные карточек
const cardsContainer = document.querySelector(".elements__container");
const popupImage = document.querySelector(".popup_type_open-image");
const popupAdd = document.querySelector(".popup_type_add");
const popupCaption = document.querySelector(".popup__figcaption");
const popupPicture = document.querySelector(".popup__picture");
const placeInput = document.querySelector(".popup__input_type_place");
const linkInput = document.querySelector(".popup__input_type_link");
const cardForm = document.forms["type-form"];

// экземпляры класса FormValidator
const profileValidator = new FormValidator(validationConfig, popupProfile);
profileValidator.enableValidation();

const imageAddValidator = new FormValidator(validationConfig, popupAdd);
imageAddValidator.enableValidation();

// функции открытия и закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleCloseByEsc);
  document.removeEventListener("mousedown", handlePopupCloseClick);
}
function closeEditProfileForm() {
  closePopup(popupProfile);
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleCloseByEsc);
  document.addEventListener("mousedown", handlePopupCloseClick);
}
function openAddCardForm() {
  openPopup(popupAdd);
  if (cardForm !== null) {
    imageAddValidator.clearValidate(cardForm, validationConfig);
  }
}
function openEditProfileForm() {
  openPopup(popupProfile);
  nameInput.value = profileInfoTitle.textContent;
  aboutInput.value = profileInfoSubtitle.textContent;
  profileValidator.clearValidate()
}

// функция редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInfoTitle.textContent = nameInput.value;
  profileInfoSubtitle.textContent = aboutInput.value;
  profileValidator.disableButton()
  closeEditProfileForm();
}

// экземпляр класса Card
function createCard(cardData) {
  const card = new Card(cardData, "#element", openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

function renderInitialCards(arr) {
  arr.forEach(function (el) {
    cardsContainer.append(createCard(el));
  });
}
renderInitialCards(initialCards);

function openImagePopup(name, link) {
  popupPicture.src = link;
  popupCaption.textContent = name;
  popupPicture.alt = name;
  openPopup(popupImage);
}

// функция добавления карточек
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCardAdd = createCard({
    name: placeInput.value,
    link: linkInput.value,
  });
  cardsContainer.prepend(newCardAdd);
  imageAddValidator.disableButton();
  evt.target.reset();
  closePopup(popupAdd);
};

// закрываем попап по оверлею
const handlePopupCloseClick = (evt) => {
  const target = evt.target;
  if (
    target.classList.contains("popup_opened") ||
    target.classList.contains("popup__close")
  ) {
    const popup = target.closest(".popup");
    closePopup(popup);
  }
};

// закрываем попап клавишей Esc
const handleCloseByEsc = (evt) => {
  if (evt.code === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

// слушатели
profileOpenButton.addEventListener("click", openEditProfileForm);
profileOpenAddButton.addEventListener("click", openAddCardForm);
cardForm.addEventListener("submit", handleCardFormSubmit);
profileForm.addEventListener("submit", handleProfileFormSubmit);
