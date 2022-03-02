import { getFooterDate } from "./footer.js";
/****************************************
👇 Uncomment this if Modal is needed👇
******************************************/
// import { FISD_Modal } from "./fisd-modal.js";

import { QUICK_LINKS_DATA, getQuickLinks } from "./quick-links.js";

/* 
==========================================================================
  Get Footer Date 
========================================================================== 
*/
getFooterDate("getDate");

/* 
==========================================================================
  Get QuickLinks data
========================================================================== 
*/

getQuickLinks(QUICK_LINKS_DATA, "qlinks__links");

/****************************************
👇 Uncomment this if Modal is needed👇
******************************************/
/* 
==========================================================================
  Get Modal 
========================================================================== 
*/
// FISD_Modal(
//   "qlinks__modal",
//   "qlinks__modal--button",
//   "qlinks__modal--close-button"
// );

/****************************************
👆 Uncomment this if Modal is needed👆
******************************************/

/* 
==========================================================================
  Main Highlight Section Images 
========================================================================== 
*/
const highlightImgBG = document.getElementById("banner__highlight_img");
const alertOneImgBG = document.getElementById("banner__alert_one_img");
const alertTwoImgBG = document.getElementById("banner__alert_two_img");

highlightImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1637357990/kuanish-reymbaev-o_lLsdVTxak-unsplash_z53cvf.jpg')";
alertOneImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1598505231/element5-digital-OyCl7Y4y0Bk-unsplash_x8xsvz.jpg')";
alertTwoImgBG.style.backgroundImage =
  "url('https://res.cloudinary.com/duprwuo4j/image/upload/v1598505052/cdc-GDokEYnOfnE-unsplash_1_fmcyhc.jpg')";
