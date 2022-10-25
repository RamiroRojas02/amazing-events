async function fetchApi() {
  try {
    let promise = await fetch(
      "https://mh-amazing.herokuapp.com/amazing"
    );
    let data = await promise.json();
    let id = location.search.slice(4);
    let event = data.events.filter((element) => element.id === id);
    event = event[0];
    printDetails(event);
  } catch (error) {}
}

fetchApi()

function printDetails(e) {
  let container = document.getElementById("detail-conteiner");
  //
  container.innerHTML = `
  <div class="card flex-column ">
    <div class="row h-100 flex-wrap " id="detail">
      <div class=" w-50 h-100 col-sm-4">
        <img src="${e.image}" class="img-fluid rounded-start  h-100" alt="${e.name}" />
      </div>
      <div class=" w-50 h-100 col-sm-8 ">
        <div class="card-body d-flex flex-column text-center gap-2" id="details-card">
          <h2 class="card-title">${e.name}</h2>
          <p class="card-text text-start fs-6">
            ${e.description}
          </p>
          <p class="card-text text-start fs-6">
            Date: ${e.date}
          </p>
          <p class="card-text text-start fs-5">
            Place: ${e.place}
          </p>
          <p class="card-text text-start fs-5">
            Category: ${e.category}
          </p>
          <p class="card-text text-start fs-4">
            Price: $ ${e.price}
          </p>
          <p class="card-text text-start fs-4">
            Capacity: ${e.capacity}
          </p>
          
        </div>
      </div>
    </div>
  </div>`;
}
