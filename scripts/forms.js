
const profileSumbitButtonChangeState = (form) => {
    const profileSubmitButton = form.querySelector('.popup__button-save')
    console.log(profileSubmitButton)
    if (!form.checkValidity()) {
        profileSubmitButton.setAttribute ('disabled', true)
        profileSubmitButton.classList.add('popup__button-sumbit_disabled')
        profileSubmitButton.classList.remove('popup__button-save')
    } else {
        profileSubmitButton.removeAttribute ('disabled')
        profileSubmitButton.classList.add('popup__button-save')
        profileSubmitButton.classList.remove('popup__button-sumbit_disabled')

    }
}

const getErrorElement = (input) => {
    return document.querySelector(`#${input.id}-error`)
}

const showError = (input) => {
    const errorElement = getErrorElement(input);
    errorElement.textContent = input.validationMessage;
}

const hideError = (input) => {
    const errorElement = getErrorElement(input);
    errorElement.textContent = '';
}


const validateInput = (input) => {
    if (!input.validity.valid) {
        showError(input);
    } else {
        hideError(input);
    }
}


profileForm.addEventListener('input', (evt) => {
    const input = evt.target;
    validateInput(input)
    profileSumbitButtonChangeState(form)
}, true);

const sendForm = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (!form.checkValidity()) {
        console.log('No good');
    } else {
        console.log('All good');
    }
}

profileForm.addEventListener('submit', sendForm)
