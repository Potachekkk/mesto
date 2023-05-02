const popupOpenButton = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened')
const ProfileInfoTitle = document.querySelector('.profile__info_title');
const ProfileInfoSubtitle = document.querySelector('.profile__info_subtitle');
const formElement = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');

popupOpenButton.addEventListener('click', () => togglePopupState(popup),
nameInput.value = ProfileInfoTitle.textContent,
aboutInput.value = ProfileInfoSubtitle.textContent);

popupCloseButton.addEventListener('click', () => togglePopupState(popup));

formElement.addEventListener('submit', handleFormSubmit)
function handleFormSubmit (evt) {
    evt.preventDefault();
    ProfileInfoTitle.textContent = nameInput.value;
    ProfileInfoSubtitle.textContent = aboutInput.value;

    togglePopupState(popup);
};