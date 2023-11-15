const loginButton = document.querySelector('#login');

function login(e) {
    e.preventDefault();
    window.location.href = 'authenticated-page.html'
}

loginButton.addEventListener('click', login);