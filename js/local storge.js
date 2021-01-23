var nam = document.querySelector(".name");
var phone = document.querySelector(".telephone");
var city1 = document.querySelector(".city1");
var city2 = document.querySelector(".city2");

emergancyButton.onclick = function popUp() {
  popup.style.display = "block";
};

submit.onclick = function remove() {
  popup.style.display = "none";
  if (typeof(Storage) !== "undefined"){
  localStorage.setItem("apple", nam.value);
  localStorage.setItem("orange", phone.value);
  localStorage.setItem("cityOne", city1.value);
  localStorage.setItem("cityTwo", city2.value);
 }
 else{
  alart('not')
}
};
