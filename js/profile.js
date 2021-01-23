document.querySelector('#header-username').innerHTML = localStorage.getItem('username');
document.querySelector('#header-name').innerHTML = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
document.querySelector('#header-phone').innerHTML = localStorage.getItem('phone');
document.querySelector('#username').innerHTML = localStorage.getItem('username');
document.querySelector('#first-name').innerHTML = localStorage.getItem('firstName');
document.querySelector('#last-name').innerHTML = localStorage.getItem('lastName');
document.querySelector('#email').innerHTML = localStorage.getItem('email');
document.querySelector('#phone').innerHTML = localStorage.getItem('phone');


var info = document.querySelector(".info-card.info-form");
var pre = document.querySelector(".info-card.pre-form");

var tab1 = document.querySelector("#tab1");
var tab2 = document.querySelector("#tab2");

document.onload = infoForm();


function infoForm() {
    info.style.display = "block";
    tab1.style.borderBottom = "5px solid #d89216";
    tab1.style.backgroundColor = "#ffffffa1";

    pre.style.display = "none";
    tab2.style.borderBottom = "none";
    tab2.style.backgroundColor = "#f4f4f4";

}

function preForm() {

    info.style.display = "none";
    tab1.style.borderBottom = "none";
    tab1.style.backgroundColor = "#f4f4f4";
    console.log(pre)
    pre.style.display = "block";
    tab2.style.borderBottom = "5px solid #d89216";
    tab2.style.backgroundColor = "#ffffffa1";

}