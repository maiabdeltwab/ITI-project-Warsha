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
    pre.style.display = "block";
    tab2.style.borderLeft = "9px solid #d89216";
    tab2.style.backgroundColor = "#ffffffa1";
}


function savePref() {
    var form = document.forms[1];

    localStorage.setItem('carBrand', form.brand.value);
    localStorage.setItem('carModel', form.model.value);
    localStorage.setItem('location', form[2].selectedIndex);
    localStorage.setItem('region', form[3].selectedIndex);

}


function getPref() {
    var form = document.forms[1];

    form[0].value = localStorage.getItem('carBrand');
    form[1].value = localStorage.getItem('carModel');
    form[2].selectedIndex = localStorage.getItem('location');
    form[3].selectedIndex = localStorage.getItem('region');

}


document.onload = infoForm();
document.onload = getuserInfo();
document.onload = getPref();