/* 
==========================================================================
// Simple Modal component
========================================================================== 
*/

export function FISD_Modal(
  modal__main_container_ID,
  modal__openButton_ID,
  modal__closeButton_ID
) {
  /* 
======================================
// Assign const Get el IDs
====================================== 
*/

  const modal__main_container = document.getElementById(
    `${modal__main_container_ID}`
  );
  const modal__openButton = document.getElementById(`${modal__openButton_ID}`);
  const modal__closeButton = document.getElementById(
    `${modal__closeButton_ID}`
  );

  /* 
======================================
// Open and Close Modal func
====================================== 
*/
  modal__openButton.onclick = function () {
    modal__main_container.style.display = "block";
  };

  modal__closeButton.onclick = function () {
    modal__main_container.style.display = "none";
  };

  /* 
======================================
// Close if clicked outside of Modal 
// area
====================================== 
*/
  window.onclick = function (event) {
    if (event.target == modal__main_container) {
      modal__main_container.style.display = "none";
    }
  };
}

/* 
==========================================================================
// Expected HTML Structure
========================================================================== 
*/
/*

<button type="button" id="modal__open-button">Open</button>
<div id="qlinks__modal">
  <div>
  <---! Content !-->
  </div>
  <button type="button" id="modal__close-button">Close</button>
</div>

*/
