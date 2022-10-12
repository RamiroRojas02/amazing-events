let card = document.getElementById(`containerCard`);

for (let show of data.events) {
  cardEvents(show, card);
}

function cardEvents(show, container) {
  container.innerHTML += `
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
            <p>price: ${show.price}</p>
            <a href="./pages/details.html" class="btn btn-primary">
              details
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
}
