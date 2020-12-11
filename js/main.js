let mainMenu = document.querySelector(".mainMenu");
let closeMenu = document.querySelector(".closeMenu");
let openMenu = document.querySelector(".openMenu");
let date= document.querySelector(".date");
let email = document.querySelector("#email");
let poruka = document.querySelector("#poruka");
let misljenje = document.querySelector("#misljenje");
let kontaktButton = document.querySelector("#kontaktButton");
let vaseMisljenjeButton = document.querySelector("#vaseMisljenjeButton");
let oceniButton = document.querySelector("#oceniButton");



openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
kontaktButton.addEventListener("click", function () {
  if (ValidateEmail() && ValidatePoruka()) {
    alert("Hvala Vam što ste nas kontaktirali.");
  }
});
vaseMisljenjeButton.addEventListener("click", function () {
  if (ValidateMisljenje()) {
    alert("Hvala Vam na interesovanju, cenimo vaše mišljenje.");
  }
});
oceniButton.addEventListener("click", function () {
  alert("Hvala Vam na oceni.");
});

var weekday = new Array(7);
weekday[0] = "Nedelja";
weekday[1] = "Ponedeljak";
weekday[2] = "Utorak";
weekday[3] = "Sreda";
weekday[4] = "Četvrtak";
weekday[5] = "Petak";
weekday[6] = "Subota";

let todayDate = new Date();


date.innerHTML =
  weekday[todayDate.getDay()] +
  " (" +
  todayDate.getDate() +
  ". " +
  eval("todayDate.getMonth()+1") +
  ". " +
  todayDate.getFullYear() +
  ")";

function show() {
  mainMenu.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display="block";
}

function close() {
  mainMenu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
}

function ValidateEmail() {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    return true;
  }
  alert("Uneli ste pogrešnu email adresu.");
  return false;
}

function ValidatePoruka() {
  if (poruka.value.length > 10) {
    return true;
  }
  alert("Poruka mora biti veća od 10 karaktera.");
  return false;
}

function ValidateMisljenje() {
  if (misljenje.value.length > 10) {
    return true;
  }
  alert("Poruka mora biti veća od 10 karaktera.");
  return false;
}


