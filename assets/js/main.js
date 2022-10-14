printCardEvents(data.events, getContainer("containerCard"));

category(data.events);
// ----------------------------Events------------------------------------------------------------------




// ----------------------------Functions---------------------------------------------------------------
function getContainer(idContainer) {
  return document.getElementById(idContainer);
}

function printCardEvents(array, container) {
  array.forEach((element) => cardEvents(element, container));
}


let categoryEvents = data.events.map((element) => element.category);
function category(array) {
  let categoryEvents = array.map((element) => element.category).sort();
  
  categoryEvents = new Set(categoryEvents);
  categoryEvents.forEach((element) =>
    categoryCheckBox(element, getContainer("checkBox"))
  );
}

function categoryCheckBox(category, container) {
  container.innerHTML += `
    <div class="form-check">
      <input
    type="checkbox"
    class="form-check-input"
    id="${category}"
      />
    <label class="form-check-label" for="${category}"
    >${category}</label>
</div>`;
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
