/* 
==========================================================================
// Simple Modal component
========================================================================== 
*/

const modal__main = document.getElementById("modal__main_ID");
const modal__openButton = document.getElementById("modal__openButton_ID");
const modal__closeButton = document.getElementById("modal__closeButton_ID");

modal__openButton.onclick = function () {
  modal__main.style.display = "block";
};

modal__closeButton.onclick = function () {
  modal__main.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal__main) {
    modal__main.style.display = "none";
  }
};

const FISD_Modal = (modal__main, modal__openButton, modal__closeButton) => {};
