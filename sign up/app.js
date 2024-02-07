const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

username.addEventListener('input', showInstantMessage);
email.addEventListener('input', showInstantMessage);
password.addEventListener('input', showInstantMessage);
cpassword.addEventListener('input', showInstantMessage);

function showInstantMessage() {
    const input = this;
    const inputValue = input.value.trim();
    const errorElement = input.parentElement.querySelector('.error');

    // Reset message element
    errorElement.innerText = '';

    switch (input.id) {
        case 'username':
            if (inputValue === '') {
                setError(input, 'Username is required');
            } else if (inputValue.length < 3 || inputValue.length > 25) {
                setError(input, 'Username must be between 3 and 25 characters');
            } else {
                setSuccess(input);
            }
            break;

        case 'email':
            if (inputValue === '') {
                setError(input, 'Email is required');
            } else if (!validateEmail(inputValue)) {
                setError(input, 'Please enter a valid email');
            } else {
                setSuccess(input);
            }
            break;

        case 'password':
            if (inputValue === '') {
                setError(input, 'Password is required');
            } else if (inputValue.length < 8) {
                setError(input, 'Password must be at least 8 characters long');
            } else {
                setSuccess(input);
            }
            break;

        case 'cpassword':
            const passwordValue = password.value.trim();
            if (inputValue === '') {
                setError(input, 'Confirm password is required');
            } else if (inputValue !== passwordValue) {
                setError(input, 'Password does not match');
            } else {
                setSuccess(input);
            }
            break;
    }
}

function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(input) {
    const inputGroup = input.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function validatePasswordRequirements(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}
