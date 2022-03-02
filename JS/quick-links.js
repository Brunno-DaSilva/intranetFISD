export const QUICK_LINKS_DATA = [
  {
    id: 1,
    url: "https://www.friscoisd.org/employment/current-openings",
    title: "Job Opening",
    svg: "../img/icons/building-skyscraper.svg",
  },
  {
    id: 2,
    url: "https://www.friscoisd.org/departments/covid-19/coronavirus",
    title: "COVID Response",
    svg: "../img/icons/virus.svg",
  },
  {
    id: 3,
    url: "https://www.friscoisd.org/employment/employment-faq",
    title: "FAQ",
    svg: "../img/icons/question-mark.svg",
  },
  {
    id: 4,
    url: "https://www.friscoisd.org/calendar",
    title: "Calendar",
    svg: "../img/icons/calendar.svg",
  },
  {
    id: 5,
    url: "https://www.friscoisd.org/employment/employee-resources",
    title: "Employee Resources",
    svg: "../img/icons/id-badge.svg",
  },
  {
    id: 6,
    url: "https://www.friscoisd.org/news",
    title: "News",
    svg: "../img/icons/news.svg",
  },
  {
    id: 7,
    url: "https://portal.friscoisd.org/secure/SecureCloudAccessProfile/FinishLogin.jsp",
    title: "Staff Portal",
    svg: "../img/icons/users.svg",
  },
  {
    id: 8,
    url: "https://63075.tcplusondemand.com/app/webclock/#/EmployeeLogOn/63075/1",
    title: "Time Clock+",
    svg: "../img/icons/clock.svg",
  },
  {
    id: 9,
    url: "https://efinanceedge.friscoisd.org/eFP5.2/EmployeeAccessCenter/Web/EmployeeInfo.aspx",
    title: "Employee Access Center",
    svg: "../img/icons/pig.svg",
  },
  {
    id: 10,
    url: "https://efinanceedge.friscoisd.org/eFP5.2/EmployeeAccessCenter/Web/EmployeeInfo.aspx",
    title: "Facebook",
    svg: "../img/icons/brand-facebook.svg",
  },
];

export function getQuickLinks(QUICK_LINKS_DATA, EL_ID) {
  const el_ID = document.getElementById(`${EL_ID}`);

  el_ID.innerHTML = QUICK_LINKS_DATA.map((data) => {
    return `
        <div class="ql_anchor__container">
            <a  class="ql-anchor" href="${data.url}">
                <img style="width: 40px"src="${data.svg}" alt="${data.title}" /> 
                <span>${data.title}</span>
            </a>
        </div>      
      `;
  }).join("");
}
