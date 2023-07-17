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
  popupAdd,
  cardTemplate,
  initialCards,
  validationConfig,
} from "../utils/constant.js";

fetch('https://nomoreparties.co/v1/cohort-71/users/me ', {
  headers: {
    authorization: 'cea06709-9d9e-4f6f-a014-355766539fc7'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 


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
const popupEditProfile = new PopupWithForm(".popup_type_profile", {
  handleCardFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  },
});
popupEditProfile.setEventListeners();

profileOpenButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = description;
  profileValidator.clearValidate();
  popupEditProfile.open();
});

// экземпляр формы добавления карточки
const popupAddCard = new PopupWithForm(".popup_type_add", {
  handleCardFormSubmit: (formData) => {
    cardList.renderItem(formData);
  },
});

const popupOpenPic = new PopupWithImage(".popup_type_open-image");
popupAddCard.setEventListeners();

// экземпляр класса Card
const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleImageClick: (name, link) => {
        popupOpenPic.open(name, link);
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
  imageAddValidator.clearValidate();
});
