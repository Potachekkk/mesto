const popupOpenButton = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
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

    togglePopupState(popup);
};

// открываем попап
popupOpenButton.addEventListener('click', () => togglePopupState(popup),
nameInput.value = profileInfoTitle.textContent,
aboutInput.value = profileInfoSubtitle.textContent);

// закрываем попап
popupCloseButton.addEventListener('click', () => togglePopupState(popup));

// отправляем форму
formElement.addEventListener('submit', handleFormSubmit);