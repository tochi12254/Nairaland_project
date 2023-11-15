const loginText = document.querySelector('.main_header--right-text');
const registerButton = document.querySelector('.main_header--right-button');

function onMouseOver() {
    this.style.cursor = 'pointer';
}

function loadLogin(e) {
    e.preventDefault();
    window.location.href = 'login-page.html'
}

function loadRegister(e) {
    e.preventDefault();
    window.location.href = 'sign-up.html'
}

loginText.addEventListener('mouseover', onMouseOver);
registerButton.addEventListener('mouseover', onMouseOver);
loginText.addEventListener('click', loadLogin);
registerButton.addEventListener('click', loadRegister);