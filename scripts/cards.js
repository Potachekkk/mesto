const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


const cardsElement = document.querySelector('.elements__container');
const templateCards = document.querySelector('.elements__item').content;

const createButton = document.querySelector('.popup__save');
// const popupOpenImageButton = document.querySelector('.element__open-button');
// const popupCloseImageButton = document.querySelector('.popup__close_type_image');
// const popupImage = document.querySelector('.popup_type_open_image');

// инпуты
const placeInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link');

const elementForm = document.querySelector('.popup__form_type_add');

const deleteItem = (evt) => {
  const item = evt.target.closest('.element');
  item.remove();
}

function createCard(link, name) {
  const itemElement = templateCards.cloneNode(true);
  itemElement.querySelector('.element__image').src = link;
  itemElement.querySelector('.element__title').textContent = name;
  itemElement.querySelector('.element__image').alt = name;

  // const pic = itemElement.querySelector('.element__image');
  // pic.addEventListener('click', function () {
  //   popupOpenImageButton(popupImage)
  // });

  itemElement.querySelector('.element__delete-button').addEventListener('click', deleteItem);
  itemElement.querySelector('.element__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle("element__like-button_active");
});
  return itemElement;
}

initialCards.forEach((item) => {
  const elementItem = createCard(item.link, item.name)
  // const itemElement = templateCards.cloneNode(true);
  // itemElement.querySelector('.element__image').src = item.link;
  // itemElement.querySelector('.element__title').textContent = item.name;
  // itemElement.querySelector('.element__like-button').img = item.like;
  // itemElement.querySelector('.element__delete-button').img = item.basket;

//   itemElement.querySelector('.element__delete-button').addEventListener('click', deleteItem);
//   itemElement.querySelector('.element__like-button').addEventListener('click', function (event) {
//     event.target.classList.toggle("element__like-button_active");
// });
  cardsElement.append(elementItem)
})

elementForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newCardInput = {
    link: linkInput.value,
    name: placeInput.value
  }
  createCard(newCardInput);
});

createButton.addEventListener('click', () => {
  popupAdd.classList.remove('popup_opened');
});