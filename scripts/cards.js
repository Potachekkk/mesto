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
// const popupOpenImageButton = templateCards.querySelector('.element__open-button')
const popupCloseImageButton = document.querySelector('.popup__close_type_image');
const popupImage = document.querySelector('.popup_type_open_image');

const popupCaption = document.querySelector('.popup__figcaption');
const popupPicture = document.querySelector('.popup__picture');

const togglePopup = (popupToToggle) => popupToToggle.classList.toggle('popup_opened')

// инпуты
const placeInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link');

// форма
const elementForm = document.querySelector('.popup__form_type_add');

const deleteItem = (evt) => {
  const item = evt.target.closest('.element');
  item.remove();
}

function createCard(link, name) {
  const itemElement = templateCards.cloneNode(true);
  const elementImage = itemElement.querySelector('.element__image').src = link;
  const elementTitle = itemElement.querySelector('.element__title').textContent = name;

   // удаление
   itemElement.querySelector('.element__delete-button').addEventListener('click', deleteItem);

   // лайк
   itemElement.querySelector('.element__like-button').addEventListener('click', function (event) {
     event.target.classList.toggle("element__like-button_active");
 });

 // открываем попап
  const pic = itemElement.querySelector('.element__image');
  pic.addEventListener('click', function () {
     togglePopup(popupImage)
     popupPicture.src = elementImage;
     popupCaption.textContent = elementTitle;
     popupPicture.alt = elementTitle;
  });
  return itemElement;
}
initialCards.forEach((item) => {
  const elementItem = createCard(item.link, item.name)
  cardsElement.append(elementItem)
})

// закрываем попап
popupCloseImageButton.addEventListener('click', function () {
  togglePopup(popupImage);
 
});

// создаем картинку
elementForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCardEInpun = {
    link: linkInput.value,
    name: placeInput.value 
  };
  createCard(newCardEInpun);
});
