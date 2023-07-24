import "../pages/index.css";

import { apiData } from "../utils/constant.js";
import { Api } from "../components/Api";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirm } from "../components/PopupWithConfirm";
import { UserInfo } from "../components/UserInfo.js";
import {
  profileOpenButton,
  profileOpenAddButton,
  popupProfile,
  nameInput,
  aboutInput,
  popupAdd,
  cardTemplate,
  popupEditAvatar,
  formAvatar,
  avatarInput,
  validationConfig,
  buttonEditAvatar,
} from "../utils/constant.js";

let userId = null;
const api = new Api(apiData);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;

    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    initialCards.reverse();
    cardList.renderItems(initialCards);
   
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section(
  {
    items: [],
    renderer: (initialCards) => {
      const cardElement = createCard(initialCards);
      cardList.addItem(cardElement);
    },
  },
  ".elements__container"
);

// экземпляр формы редактирования аватара
const popupEditNewAvatar = new PopupWithForm(".popup_type_avatar", {
  handleCardFormSubmit: (formData) => {
    popupEditNewAvatar.renderLoading(true);
    api
      .updateAvatar(formData)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupEditNewAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditNewAvatar.renderLoading(false);
      });
  },
});
popupEditNewAvatar.setEventListeners();

//Открытие формы редактирования аватара
buttonEditAvatar.addEventListener("click", () => {
  popupEditNewAvatar.open();
  avatarValidator.clearValidate();
});

// экземпляры класса FormValidator
const profileValidator = new FormValidator(validationConfig, popupProfile);
profileValidator.enableValidation();
const imageAddValidator = new FormValidator(validationConfig, popupAdd);
imageAddValidator.enableValidation();
const avatarValidator = new FormValidator(validationConfig, popupEditAvatar);
avatarValidator.enableValidation();

// экземпляр профиля
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__subtitle",
  avatarSelector: ".profile__avatar",
});

// экземпляр формы редактирования профиля
const popupEditProfile = new PopupWithForm(".popup_type_profile", {
  handleCardFormSubmit: (formData) => {
    popupEditProfile.renderLoading(true);
    api
      .editUserInfo(formData)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });
  },
});
popupEditProfile.setEventListeners();

// открытие и заполнение формы полей редактирвания профиля
profileOpenButton.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  profileValidator.clearValidate();
  popupEditProfile.open();
});

// экземпляр формы добавления карточки
const popupAddCard = new PopupWithForm(".popup_type_add", {
  handleCardFormSubmit: (formData) => {
    popupAddCard.renderLoading(true);
    api
      .sendNewCard(formData)
      .then((data) => {
        const card = createCard(data);
        cardList.addItem(card);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
  },
});
popupAddCard.setEventListeners();

// открытие формы добавления карточки
profileOpenAddButton.addEventListener("click", () => {
  popupAddCard.open();
  imageAddValidator.clearValidate();
});

// экземпляр формы подтверждения удаления карточки
const popupDeleteCard = new PopupWithConfirm(".popup_type_delete")
popupDeleteCard.setEventListeners();

// экземпляр попапа просмотра карточки
const popupOpenPic = new PopupWithImage(".popup_type_open-image");
popupOpenPic.setEventListeners();

// экземпляр класса Card
const createCard = (data) => {
  const card = new Card(
    {
      data,
      userId,
      handleImageClick: (name, link) => {
        popupOpenPic.open(name, link);
      },
      handleDeleteClick: () => {
        popupDeleteCard.open();
        popupDeleteCard.handleSubmitConfirm(() => {
          api
            .deleteCard(card._id)
            .then(() => {
              card.deleteCard();
              popupDeleteCard.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
      handleCardLike: () => {
        if (card.isLiked()) {
          api
            .deleteLike(card._id)
            .then((data) => {
              card.deleteLike();
              card.setLike(data.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .setLike(card._id)
            .then((data) => {
              card.addLike();
              card.setLike(data.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    cardTemplate
  );
  return card.generateCard();
};
