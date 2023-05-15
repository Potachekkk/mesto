const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = document.querySelector('.popup__close');

const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add');

const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const profileInfoTitle = document.querySelector('.profile__title');
const profileInfoSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened')

// обработчик отправки формы
function handleFormSubmit (evt) {
    evt.preventDefault(); // отменяем стандартную форму
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = aboutInput.value;

    togglePopupState(popupProfile);
};

// открываем попап
// popupOpenButton.addEventListener('click', () => togglePopupState(popupProfile),
popupOpenButton.addEventListener('click', () => popupProfile.classList.add('popup_opened')),
nameInput.value = profileInfoTitle.textContent,
aboutInput.value = profileInfoSubtitle.textContent
;
// popupOpenAddButton.addEventListener('click', () => togglePopupState(popupAdd))
popupOpenAddButton.addEventListener('click', () => popupAdd.classList.add('popup_opened'))

// закрываем попап
// popupCloseButton.addEventListener('click', () => togglePopupState(popupProfile));
popupCloseButton.addEventListener('click', () => popupProfile.classList.remove('popup_opened'));
popupCloseAddButton.addEventListener('click', () => popupAdd.classList.remove('popup_opened'));
console.log(popupAdd.classList)

// popupCloseAddButton.addEventListener('click', () => togglePopupState(popupAdd));

// отправляем форму
formElement.addEventListener('submit', handleFormSubmit);