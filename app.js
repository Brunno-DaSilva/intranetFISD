console.log("Ciao bella mi piacere parlare il italiano");

const highlightImgBG = document.getElementById("banner__highlight_img");
const alertOneImgBG = document.getElementById("banner__alert_one_img");
const alertTwoImgBG = document.getElementById("banner__alert_two_img");

highlightImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1637357990/kuanish-reymbaev-o_lLsdVTxak-unsplash_z53cvf.jpg')";
alertOneImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1598505231/element5-digital-OyCl7Y4y0Bk-unsplash_x8xsvz.jpg')";
alertTwoImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1598505052/cdc-GDokEYnOfnE-unsplash_1_fmcyhc.jpg')";

// Get the modal
const qlinks__modal = document.getElementById("qlinks__modal");

// Get the button that opens the modal
const modal__button = document.getElementById("qlinks__modal--button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
