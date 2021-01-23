document.querySelector('#username').innerHTML = 'maiabdeltwab';
document.querySelector('#first-name').innerHTML = 'Mai';
document.querySelector('#last-name').innerHTML = 'Abd Eltwab';
document.querySelector('#email').innerHTML = 'maiabeltwab117@gmail.com'
document.querySelector('#phone').innerHTML = '01014226224';


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