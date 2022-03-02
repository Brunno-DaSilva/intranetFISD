import { ICONS_DATA } from "./icons-data.js";

const app = document.querySelector("#random-img");
const fetchedURL = `https://jsonplaceholder.typicode.com/users`;
console.log("ICONS DATA: ", ICONS_DATA);

function pushDataToHTML(ICONS_DATA) {
  app.innerHTML = ICONS_DATA.map((data) => {
    return `
<div class="articles__card">
  <div class="articles__card-img">
    <div class="svg_holder ${data.bg}">
    <img src='${data.svg}' alt='${data.id}' />
    </div>
  </div>
  <div class="articles__card-title">
    <h3>Community Facility Use and Rental</h3>
  </div>
  <div class="articles__card-text">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Officia hic cumque nobis distinctio.</p>
  </div>
  <div class="articles__card-btn">
    <button>Read more</button>
  </div>
</div>
`;
  });
}
pushDataToHTML(ICONS_DATA);

/*********************************
Fetch version
function getData(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((jsonData) => {
      app.innerHTML =
        "<div class='cards-container'>" +
        jsonData
          .map((data) => {
            return `
      <div class="articles__card">
            <div class="articles__card-img">
              <div class="svg_holder svg_holder-green">
              <img src='${data.url}' alt='${data.id}' />
              </div>
            </div>
            <div class="articles__card-title">
              <h3>Community Facility Use and Rental</h3>
            </div>
            <div class="articles__card-text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia hic cumque nobis distinctio.</p>
            </div>
            <div class="articles__card-btn">
              <button>Read more</button>
            </div>
          </div>
          `;
          })
          .join("") +
        "</div>";
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
}

getData(fetchedURL);*/
