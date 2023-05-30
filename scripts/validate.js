const enableValidations = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const toggleButtonState = (inputList, buttonElement, params) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(params.inactiveButtonClass)
    } else {
      buttonElement.classList.remove(params.inactiveButtonClass)
    }
  }
  
const showInputError = (formElement, inputElement, errorMessage, params) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(params.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(params.errorClass)
    };

const hideInputError = (formElement, inputElement, params) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(params.inputErrorClass);
    errorElement.classList.remove(params.errorClass)
    errorElement.textContent = ''
};

const checkInputValidity = (formElement, inputElement, params) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, params); 
      } else {
          hideInputError(formElement, inputElement, params)
        }
  };

const setEventListeners = (formElement, params) => {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);
    inputList.forEach((inputElement) => {
       inputElement.addEventListener('input', function () {
     checkInputValidity(formElement, inputElement, params);
     toggleButtonState(inputList, buttonElement, params);
   })
    })
    }

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })
      setEventListeners(formElement, params);
    })
  }
  enableValidation(enableValidations)