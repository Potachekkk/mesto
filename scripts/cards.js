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

// инпуты
const placeInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link');

const deleteItem = (evt) => {
  const item = evt.target.closest('.element');
  item.remove();
}

initialCards.forEach((item) => {
  const itemElement = templateCards.cloneNode(true);
  itemElement.querySelector('.element__image').src = item.link;
  itemElement.querySelector('.element__title').textContent = item.name;
  // itemElement.querySelector('.element__like-button').img = item.like;
  // itemElement.querySelector('.element__delete-button').img = item.basket;

  itemElement.querySelector('.element__delete-button').addEventListener('click', deleteItem);
  itemElement.querySelector('.element__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle("element__like-button_active");
});


  cardsElement.append(itemElement)
})

