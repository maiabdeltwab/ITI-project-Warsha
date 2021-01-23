//change color icon when text field get focus 
function changeIcon(input) {
    var icon = input.previousSibling.previousElementSibling; //get icon element
    icon.style.color = '#3a3535';
}

//reset color icon when text field lose focus 
function resetIcon(input) {
    var icon = input.previousSibling.previousElementSibling;
    icon.style.color = '#d89216';
}


if (localStorage.username && localStorage.password) {
    document.getElementById('username').value = localStorage.username;
    document.getElementById('pass').value = localStorage.password;
}

var username = document.getElementById('username').value;
var pass = document.getElementById('pass').value;

function login() {
    saveLogin();
    validateFormn();
}

//check if user input is valid or not 
function validateFormn() {
    var invalidText = document.querySelector('.invalid-login');
    invalidText.style.visibility = 'visible';
}


//save user input if 'remember me' be chosen
function saveLogin() {
    var remeberCheck = document.getElementById('remeber-me');

    if (remeberCheck.checked) {
        localStorage.setItem('username', name);
        localStorage.password = pass;
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
}