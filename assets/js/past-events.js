let card = document.getElementById(`containerCard`);

let pastEvents = eventFilter(data.events, data.currentDate);
for( let eventFilt of pastEvents ){
    cardEvents(eventFilt,card)
}

function eventFilter(show, date) {
  let objectEvent = show;
  console.log(objectEvent);
  let eventFilt = [];
  for(let i = 0; i < show.length; i++){
    if( show[i].date < date ){
        eventFilt.push(show[i])
    }
}
  console.log(eventFilt);

  return eventFilt;
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
              <a href="#" class="btn btn-primary">
                details
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
}
