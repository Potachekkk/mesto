const popupOpenButton = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened')

popupOpenButton.addEventListener('click', () => togglePopupState(popup));

popupCloseButton.addEventListener('click', () => togglePopupState(popup));

const formElement = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const ProfileInfoTitle = document.querySelector('.profile__info_title');
const ProfileInfoSubtitle = document.querySelector('.profile__info_subtitle');


function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput = document.getElementById('name').value;
    aboutInput = document.getElementById('about').value;

    ProfileInfoTitle.textContent = `${nameInput}`;
    ProfileInfoSubtitle.textContent = `${aboutInput}`;
    
    togglePopupState(popup);
}
