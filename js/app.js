
var emergancyButton = document.querySelector(".emergancy--btn");
var popup = document.querySelector(".display");
var submit = document.querySelector("#submit");
var nam = document.querySelector(".name").value;
var phone = document.querySelector(".telephone").value;
var city1 = document.querySelector(".city1").value;
var city2 = document.querySelector(".city2").value;

emergancyButton.onclick = function popUp() {
  popup.style.display = "block";
};

submit.onclick = function remove() {
  localStorage.setItem("apple", nam);
  localStorage.setItem("orange", phone);
  localStorage.setItem("cityOne", city1);
  localStorage.setItem("cityTwo", city2);
  popup.style.display = "none";
};

function removeIcon(input) {
  var icon = input.previousSibling.previousElementSibling; //get icon element
  icon.style.display = "none";
}

function resetIcon(input) {
  var icon = input.previousSibling.previousElementSibling;
  icon.style.display = "inline";
}


window.onscroll = function navObacity(event) {
  var element = document.documentElement.scrollTop;
  document.querySelector(".header").onmouseover = function () {
    document.querySelector(".header").style.opacity = "1";
  };
  document.querySelector(".header").onmouseout = function () {
    document.querySelector(".header").style.opacity = "0.7";
  };

  if (element > 100) {
    document.querySelector(".header").style.opacity = "0.7";
    document.querySelector(".header").onmouseover = function () {
      document.querySelector(".header").style.opacity = "1";
    };
  } else {
    document.querySelector(".header").style.opacity = "1";
  }
};

$(document).ready(function () {
  $(".test").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  });
});
$(".test2").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});
