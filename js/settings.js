function getuserInfo() {
    document.querySelector('#username').value = localStorage.getItem('username');
    document.querySelector('#first-name').value = localStorage.getItem('firstName');
    document.querySelector('#last-name').value = localStorage.getItem('lastName');
    document.querySelector('#email').value = localStorage.getItem('email');
    document.querySelector('#phone').value = localStorage.getItem('phone');
    document.querySelector('#password1').value = localStorage.getItem('password');
    document.querySelector('#password2').value = localStorage.getItem('password');
}


var info = document.querySelector(".info-card.info-form");
var pre = document.querySelector(".info-card.pre-form");

var tab1 = document.querySelector("#tab1");
var tab2 = document.querySelector("#tab2");

document.onload = infoForm();
document.onload = getuserInfo();

function infoForm() {
    info.style.display = "block";
    tab1.style.borderLeft = "9px solid #d89216";
    tab1.style.backgroundColor = "#ffffffa1";

    pre.style.display = "none";
    tab2.style.borderLeft = "none";
    tab2.style.backgroundColor = "#f4f4f4";

}

function preForm() {
    info.style.display = "none";
    tab1.style.borderLeft = "none";
    tab1.style.backgroundColor = "#f4f4f4";
    console.log(pre)
    pre.style.display = "block";
    tab2.style.borderLeft = "9px solid #d89216";
    tab2.style.backgroundColor = "#ffffffa1";
}


function savePref() {
    var form = document.forms[1];

    localStorage.setItem('carBrand', form.brand);
    localStorage.setItem('carModel', form.model);
    localStorage.setItem('location', 'document.forms[1][2].selectedIndex');
    localStorage.setItem('region', 'document.forms[1][3].selectedIndex');

}