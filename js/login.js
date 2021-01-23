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


if (localStorage.username && localStorage.password && eval(localStorage.saved)) {
    document.getElementById('username').value = localStorage.username;
    document.getElementById('pass').value = localStorage.password;
}

var username = document.getElementById('username').value;
var pass = document.getElementById('pass').value;


//check if user input is valid or not 
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pass').value;


    var savedUsername = localStorage.getItem('username');
    var savedEmail = localStorage.getItem('email');
    var savedPassword = localStorage.getItem('password');

    if ((username == savedUsername || username == savedEmail) && password == savedPassword) {
        saveLogin();
        return true;
    } else {
        var invalidText = document.querySelector('.invalid-login');
        invalidText.style.visibility = 'visible';
        localStorage.login = false;
        return false;
    }
}


//save user input if 'remember me' be chosen
function saveLogin() {
    var remeberCheck = document.getElementById('remeber-me');
    localStorage.login = true;
    if (remeberCheck.checked) {
        localStorage.saved = true;
    } else {
        localStorage.saved = false;
    }
}