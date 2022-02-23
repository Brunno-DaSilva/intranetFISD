/* 
==========================================================================
  Get Footer Date 
========================================================================== 
*/

// This function expects an
// element ID (p, span) to display the
// most uptodate calendar year

export function getFooterDate(FOOTER_EL_ID) {
  const getDate_el = document.getElementById(`${FOOTER_EL_ID}`);
  const getYear = new Date().getFullYear();
  const fullYear = `${getYear}`;

  return (getDate_el.innerHTML = fullYear);
}
