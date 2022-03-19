const calendar_el = document.querySelector("#calendar__date_ID");
const fetchedURL = `https://res.friscoisd.org/services/Google/calendar?campus=fhs&eventCount=500&calType=year&pow=false`;

function getData(url, calendar_el) {
  fetch(url)
    .then((res) => {
      console.log("RESPONSE:", res);
      return res.json();
    })
    .then((jsonData) => {
      calendar_el.innerHTML = jsonData
        .slice(0, 8)
        .map((data) => {
          return `
            <div class='calendar__date-card'>
                <div>
                    <h1>${data.Title}</h1>
                </div>
            </div>
            `;
        })
        .join("");
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
}

getData(fetchedURL, calendar_el);
