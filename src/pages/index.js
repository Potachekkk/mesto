import "../pages/index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  profileOpenButton,
  profileOpenAddButton,
  popupProfile,
  nameInput,
  aboutInput,
  popupImage,
  popupAdd,
  cardTemplate,
  initialCards,
  validationConfig,
} from "../components/constant.js";

// экземпляры класса FormValidator
const profileValidator = new FormValidator(validationConfig, popupProfile);
profileValidator.enableValidation();
const imageAddValidator = new FormValidator(validationConfig, popupAdd);
imageAddValidator.enableValidation();

const userConfig = {
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__subtitle",
};

const { nameSelector, descriptionSelector } = userConfig;
const userInfo = new UserInfo(nameSelector, descriptionSelector);

// экземпляр формы редактирования профиля
const popupEditProfile = new PopupWithForm(popupProfile, {
  handleCardFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupEditProfile.close();
  },
});
popupEditProfile.setEventListeners();

profileOpenButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = description;
  profileValidator._toggleButtonState();
  popupEditProfile.open();
});

// экземпляр формы добавления карточки
const popupAddCard = new PopupWithForm(popupAdd, {
  handleCardFormSubmit: (formData) => {
    cardList.addItem(formData);
    popupAddCard.close();
  },
});

const popupOpenPic = new PopupWithImage(popupImage);
popupAddCard.setEventListeners();

// экземпляр класса Card
const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleImageClick: () => {
        popupOpenPic.open(data.name, data.link);
      },
    },
    cardTemplate
  );
  return card;
};
popupOpenPic.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (initialCards) => {
      const cardElement = createCard(initialCards);
      return cardElement.generateCard();
    },
  },
  ".elements__container"
);
cardList.renderItems();

profileOpenAddButton.addEventListener("click", () => {
  popupAddCard.open();
  imageAddValidator._toggleButtonState();
  imageAddValidator.clearValidate();
});
