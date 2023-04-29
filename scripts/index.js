const popupOpenButton = document.querySelector('.profile__popup-opened');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

popupOpenButton.addEventListener('click', () => {
    popup.classList.add('popup__opened')
})
popupCloseButton.addEventListener('click', () => {
    popup.classList.remove('popup__opened')
})

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const ProfileInfoTitle = document.querySelector('.profile__info_title');
const ProfileInfoSubtitle = document.querySelector('.profile__info_subtitle');

function handleFormSubmit (evt) {
    evt.preventDefault();

    // nameInput = document.getElementById('name').value;
    // aboutInput = document.getElementById('about').value;

    ProfileInfoTitle.textContent = nameInput.value;
    ProfileInfoSubtitle.textContent = aboutInput.value;
    
}
