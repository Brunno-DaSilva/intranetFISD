const app = document.querySelector("#random-img");

const fetchedURL = `https://jsonplaceholder.typicode.com/users`;

const icons = [
  {
    id: 1,
    url: "../img/icons/3d-cube-sphere.svg",
  },
  {
    id: 2,
    url: "../img/icons/apple.svg",
  },
  {
    id: 3,
    url: "../img/icons/at.svg",
  },
  {
    id: 4,
    url: "../img/icons/a-b.svg",
  },
  {
    id: 5,
    url: "../img/icons/coffee.svg",
  },
  {
    id: 6,
    url: "../img/icons/book.svg",
  },
  {
    id: 7,
    url: "../img/icons/mail-opened.svg",
  },
  {
    id: 8,
    url: "../img/icons/pencil.svg",
  },
];

function getData(url, icons) {
  const urlIcons = icons.map((icon) => {
    return `${icon.url}`;
  });

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
              <img src="${urlIcons.url}" alt="${data.email}"/>
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

getData(fetchedURL, icons);
