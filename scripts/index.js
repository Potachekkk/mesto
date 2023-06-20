import Card from './Card.js'
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

// переменные профиля
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close_type_profile");
const profileOpenAddButton = document.querySelector(".profile__add-button");
const profileCloseAddButton = document.querySelector(".popup__close_type_add");
const popupProfile = document.querySelector(".popup_type_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const profileInfoTitle = document.querySelector(".profile__title");
const profileInfoSubtitle = document.querySelector(".profile__subtitle");
const profileForm = document.forms["profile-form"];
const popupMain = document.querySelectorAll(".popup");

// переменные карточек
const cardsElement = document.querySelector(".elements__container");
// const templateCards = document.querySelector(".elements__item").content;
const popupCloseImageButton = document.querySelector(
  ".popup__close_type_image"
);
const popupImage = document.querySelector(".popup_type_open-image");
const popupAdd = document.querySelector(".popup_type_add");
const popupCaption = document.querySelector(".popup__figcaption");
const popupPicture = document.querySelector(".popup__picture");
const placeInput = document.querySelector(".popup__input_type_place");
const linkInput = document.querySelector(".popup__input_type_link");
const elementForm = document.forms["type-form"];

// функции открытия и закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyDownListener);
  document.removeEventListener("mousedown", mouseDownListener);
}
function closeEditProfileForm() {
  closePopup(popupProfile);
}
function closeAddCardForm() {
  closePopup(popupAdd);
}
function closeImagePopup() {
  closePopup(popupImage);
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyDownListener);
  document.addEventListener("mousedown", mouseDownListener);
}
function openAddCardForm() {
  openPopup(popupAdd);
  if (elementForm !== null) {
    clearValidate(elementForm, validationConfig);
  }
}
function editProfileForm() {
  openPopup(popupProfile);
  nameInput.value = profileInfoTitle.textContent;
  aboutInput.value = profileInfoSubtitle.textContent;
}

// функция редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInfoTitle.textContent = nameInput.value;
  profileInfoSubtitle.textContent = aboutInput.value;
  closeEditProfileForm();
}

// удаление
const deleteItem = (evt) => {
  evt.target.closest(".element").remove();
};
// лайк
const likeItem = (evt) => {
  evt.target.classList.toggle("element__like-button_active");
};

function createCard(item) {
  const card = new Card(item, '#element', openItem);
  const cardElement = card.generateCard();
  return cardElement;
}

function collectCards(arr) {
  arr.forEach(function (el) {
    cardsElement.append(createCard(el));
  });
}
collectCards(initialCards);

// ищем и создаем карточки
// function createCard(element) {
//   const itemElement = templateCards.cloneNode(true);
//   const elementImage = itemElement.querySelector(".element__image");
//   const elementTitle = itemElement.querySelector(".element__title");
//   const elementDelete = itemElement.querySelector(".element__delete-button");
//   const elementLike = itemElement.querySelector(".element__like-button");
//   elementImage.src = element.link;
//   elementTitle.textContent = element.name;
//   elementImage.alt = element.name;

  function openItem() {
    popupPicture.src = elementImage.src;
    popupCaption.textContent = elementTitle.textContent;
    popupPicture.alt = elementTitle.textContent;
    openPopup(popupImage);
  }

//   elementImage.addEventListener("click", openItem);
//   elementDelete.addEventListener("click", deleteItem);
//   elementLike.addEventListener("click", likeItem);

//   return itemElement;
// }

// const renderElements = (element) => {
//   cardsElement.prepend(createCard(element));
// };

// // загружаем карточки из массива
// initialCards.forEach((element) => {
//   renderElements(element);
// });

// функция добавления карточек
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  renderElements({
    name: placeInput.value,
    link: linkInput.value,
  });
  evt.target.reset();
  closePopup(popupAdd);
};

// закрываем попап по оверлею
const mouseDownListener = (evt) => {
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
const keyDownListener = (evt) => {
  if (evt.code === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

// слушатели
profileOpenButton.addEventListener("click", editProfileForm);
profileCloseButton.addEventListener("click", closeEditProfileForm);
profileOpenAddButton.addEventListener("click", openAddCardForm);
profileCloseAddButton.addEventListener("click", closeAddCardForm);
popupCloseImageButton.addEventListener("click", closeImagePopup);
elementForm.addEventListener("submit", handleCardFormSubmit);
profileForm.addEventListener("submit", handleProfileFormSubmit);
