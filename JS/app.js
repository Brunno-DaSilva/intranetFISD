const highlightImgBG = document.getElementById("banner__highlight_img");
const alertOneImgBG = document.getElementById("banner__alert_one_img");
const alertTwoImgBG = document.getElementById("banner__alert_two_img");
const qlinks__modal = document.getElementById("qlinks__modal");
const modal__button = document.getElementById("qlinks__modal--button");
const modal__button_close = document.getElementById(
  "qlinks__modal--close-button"
);

highlightImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1637357990/kuanish-reymbaev-o_lLsdVTxak-unsplash_z53cvf.jpg')";
alertOneImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1598505231/element5-digital-OyCl7Y4y0Bk-unsplash_x8xsvz.jpg')";
alertTwoImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1598505052/cdc-GDokEYnOfnE-unsplash_1_fmcyhc.jpg')";

modal__button.onclick = function () {
  qlinks__modal.style.display = "block";
};

modal__button_close.onclick = function () {
  qlinks__modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == qlinks__modal) {
    qlinks__modal.style.display = "none";
  }
};
