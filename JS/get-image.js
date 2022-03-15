import { ICONS_DATA } from "./icons-data.js";

const articles__card = document.querySelector("#article__cards");
const news__card = document.querySelector("#news__cards");
const fetchedURL = `https://jsonplaceholder.typicode.com/users`;

function pushDataToHTML(ICONS_DATA, el) {
  el.innerHTML = ICONS_DATA.map((data) => {
    return `<div class="articles__card">
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
  </div>`;
  }).join("");
}

pushDataToHTML(ICONS_DATA, articles__card);
pushDataToHTML(ICONS_DATA, news__card);

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
