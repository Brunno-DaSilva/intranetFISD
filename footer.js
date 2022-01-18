/* 
==========================================================================
  Get Footer Date 
========================================================================== 
*/
const getDate_el = document.getElementById("getDate");
const getYear = new Date().getFullYear();
const fullYear = `${getYear}`;
getDate_el.innerHTML = fullYear;
