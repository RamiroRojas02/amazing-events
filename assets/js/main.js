printCardEvents(data.events, getContainer("containerCard"));

category(data.events);
// ----------------------------Events------------------------------------------------------------------
getContainer("search").addEventListener("input", function (event) {
  let events = data.events.filter((events) =>
    events.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  let conteinerCard = getContainer("containerCard");
  conteinerCard.innerHTML = "";
  for (const key of events) {
    cardEvents(key, conteinerCard);
  }
});

// ----------------------------Functions---------------------------------------------------------------
function getContainer(idContainer) {
  return document.getElementById(idContainer);
}

function printCardEvents(array, container) {
  array.forEach((element) => cardEvents(element, container));
}

function category(array) {
  let categoryEvents = array.map((element) => element.category).sort();
  categoryEvents = new Set(categoryEvents);
  categoryEvents.forEach((element) =>
    categoryCheckBox(element, getContainer("checkBox"))
  );
}
function checkSearch(array) {
  let checks = document.querySelectorAll(".checkbox:checked");
  let filterCheck = [];
  for (let eventsCategory of checks) {
    let newArray = array.filter(
      (everyEvent) =>
        everyEvent.category.toLocaleLowerCase().split(" ").join("-") ===
        eventsCategory.id
    );

    filterCheck = filterCheck.concat(newArray);
  }
  if (filterCheck.length === 0) {
    filterCheck = array;
  }
  if (filterCheck.length >= 1) {
    getContainer("containerCard").innerHTML = ""
    filterCheck.forEach((e) => cardEvents(e,getContainer("containerCard")));
  }
  
}
function eventFilter(fn,value) {
  
}

function categoryCheckBox(category, container) {
  container.innerHTML += `
    <div class="form-check">
      <input
    type="checkbox"
    class="form-check-input checkbox"
    id="${category.toLocaleLowerCase().split(" ").join("-")}"
      />
    <label class="form-check-label" for="${category
      .toLocaleLowerCase()
      .split(" ")
      .join("-")}"
    >${category}</label>
</div>`;

  let checks = document.querySelectorAll(".checkbox");
  checks.forEach((forEveryCheck) =>
    forEveryCheck.addEventListener("click", () => {
      checkSearch(data.events);
    })
  );
}
function cardEvents(show, func) {
  // console.log(show);
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
            <a href="./pages/details.html?id=${show._id}" class="btn btn-primary">
              details
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
}
