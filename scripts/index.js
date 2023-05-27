// переменные профиля
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__close_type_profile');
const profileOpenAddButton = document.querySelector('.profile__add-button');
const profileCloseAddButton = document.querySelector('.popup__close_type_add');
const popupProfile = document.querySelector('.popup_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const profileInfoTitle = document.querySelector('.profile__title');
const profileInfoSubtitle = document.querySelector('.profile__subtitle');
const profileForm = document.forms['profile-form']




// переменные карточек
const cardsElement = document.querySelector('.elements__container');
const templateCards = document.querySelector('.elements__item').content;
const popupCloseImageButton = document.querySelector('.popup__close_type_image');
const popupImage = document.querySelector('.popup_type_open-image');
const popupAdd = document.querySelector('.popup_type_add');
const popupCaption = document.querySelector('.popup__figcaption');
const popupPicture = document.querySelector('.popup__picture');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const elementForm = document.forms['type-form']

// функции открытия и закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};
function closeEditProfileForm() {
    closePopup(popupProfile);
};
function closeAddCardForm() {
    closePopup(popupAdd);
};
function closeImagePopup() {
    closePopup(popupImage);
};
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
function openAddCardForm() {
    openPopup(popupAdd);
};
function editProfileForm() {
    openPopup(popupProfile);
    nameInput.value = profileInfoTitle.textContent;
    aboutInput.value = profileInfoSubtitle.textContent;
};

// функция редактирования профиля
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = aboutInput.value;
    closeEditProfileForm();
};

// удаление
const deleteItem = (evt) => {
    evt.target.closest('.element').remove();
  }
// лайк
const likeItem = (evt) => {
    evt.target.classList.toggle("element__like-button_active");
};

// ищем и создаем карточки
function createCard(element) {
    const itemElement = templateCards.cloneNode(true);
    const elementImage = itemElement.querySelector('.element__image');
    const elementTitle = itemElement.querySelector('.element__title');
    const elementDelete = itemElement.querySelector('.element__delete-button');
    const elementLike = itemElement.querySelector('.element__like-button');
    elementImage.src = element.link;
    elementTitle.textContent = element.name;
    elementImage.alt = element.name;

function openItem() {
    popupPicture.src = elementImage.src;
    popupCaption.textContent = elementTitle.textContent;
    popupPicture.alt = elementTitle.textContent;
    openPopup(popupImage)
};

elementImage.addEventListener('click', openItem)
elementDelete.addEventListener('click', deleteItem);
elementLike.addEventListener('click', likeItem);

return itemElement;
};

const renderElements = (element) => {
    cardsElement.prepend(createCard(element))
};

// загружаем карточки из массива
initialCards.forEach((element) => {
    renderElements(element)
});

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

// слушатели
profileOpenButton.addEventListener('click', editProfileForm);
profileCloseButton.addEventListener('click', closeEditProfileForm);
profileOpenAddButton.addEventListener('click', openAddCardForm);
profileCloseAddButton.addEventListener('click', closeAddCardForm);
popupCloseImageButton.addEventListener('click', closeImagePopup);
elementForm.addEventListener('submit', handleCardFormSubmit);
profileForm.addEventListener('submit', handleProfileFormSubmit);