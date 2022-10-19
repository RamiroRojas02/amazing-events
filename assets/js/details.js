function getEventDetail() {
  let id = location.search.slice(4);
  let event = data.events.filter((element) => (element._id === Number(id)));
  
  event = event[0];
  console.log(event);
  printDetails(event);
}
getEventDetail();
function printDetails(e) {
  let container = document.getElementById("detail-conteiner");

  container.innerHTML = `
  <div class="card flex-column">
    <div class="row h-100 flex-wrap " id="detail">
      <div class=" w-50 col-sm-4">
        <img src="${e.image}" class="img-fluid rounded-start  h-100" alt="${e.name}" />
      </div>
      <div class=" w-50 col-sm-8 ">
        <div class="card-body d-flex flex-column text-center gap-2 ">
          <h2 class="card-title">${e.name}</h2>
          <p class="card-text text-start">
            ${e.description}
          </p>
          <p class="card-text text-start">
            Date: ${e.date}
          </p>
          <p class="card-text text-start">
            Place: ${e.place}
          </p>
          <p class="card-text text-start">
            Category: ${e.category}
          </p>
          <p class="card-text text-start">
            Price: $ ${e.price}
          </p>
          
        </div>
      </div>
    </div>
  </div>`;
}
