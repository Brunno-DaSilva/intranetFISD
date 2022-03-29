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
          let month = data.dayGroup.substring(0, 2);
          let day = data.dayGroup.substring(2, 4);
          let year = data.dayGroup.substring(4, 6);

          return `
            <div class='calendar__date-card'>   
              <div class="calendar__date-card_left_side">
                <div class="calendar__date-card_mm">
                    
                    <p>${month}</p>
                </div>
                <div class="calendar__date-card_dd">
                    <p>${day}</p>
                </div>
              </div>
              <div class="calendar__date-card_right_side">
              
                <div class="calendar__date-card_description">
                  <div class="calendar__date-card_description-item">

                    <div class="calendar__date-card_description-title">
                      <h3>${data.Title}</h3>
                    </div>
                    <div class="calendar__date-card_description-time">
                      <p>
                        <span class="calendar__start-time">6AM</span>
                         -
                        <span class="calendar__end-time">7AM</span>
                      </p>
                    </div>
                  </div>
                  <div class="calendar__date-card-button">
                    <a href="${data.EventLink}">View Full Calendar</a>
                  </div>
                </div>
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
