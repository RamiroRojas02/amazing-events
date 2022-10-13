printCardEvents(data.events, getContainer("containerCard"));
filter(
  data.events,
  getContainer("containerCard-Coming"),
  getContainer("containerCard-Past"),
  data.currentDate
);
// ----------------------------Functions---------------------------------------------------------------
function getContainer(idContainer) {
  return document.getElementById(idContainer);
}

function filter(array, container, container2, property) {
  array.filter(function (element) {
    if (element.date > property) {
      cardEvents(array, container);
    } else {
      cardEvents(array, container2);
    }
  });
}

function printCardEvents(array, container) {
  array.forEach((element) => cardEvents(element, container));
}

function cardEvents(show, func) {
  func.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 pt-2">
      <div class="card">
        <img
          src=${show.image}
          class="card-img-top"
          alt=${show.name}
        />
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">
          ${show.description}
          </p>
          <div class="d-flex justify-content-between">
            <p>price: $ ${show.price}</p>
            <a href="./pages/details.html" class="btn btn-primary">
              details
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
}
