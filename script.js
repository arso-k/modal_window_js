"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (var i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//we dont call the function but we defined adn the event object(e) is added as argument
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  //tells you what key you pressed
  // if (e.key === 'Escape') console.log('Esc was pressed');

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
