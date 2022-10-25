async function fetchApi() {
  try {
    let promise = await fetch("https://mh-amazing.herokuapp.com/amazing");
    let data = await promise.json();
    let eventsPast = data.events.filter((element) => element.date < data.date);
    let eventsComing = data.events.filter(
      (element) => element.date > data.date
    );
    eventsPast.map((everyEvent) => {
      everyEvent.revenue = everyEvent.price * everyEvent.assistance;
      everyEvent.attendance =
        (100 * everyEvent.assistance) / everyEvent.capacity;
    });
    eventsComing.map((everyEvent) => {
      everyEvent.revenue = everyEvent.price * everyEvent.estimate;
      everyEvent.attendance = (100 * everyEvent.estimate) / everyEvent.capacity;
    });

    let eventsSortAttendance = [...eventsPast].sort(
      (a, b) => a.attendance - b.attendance
    );
    let eventHighAttendance =
      eventsSortAttendance[eventsSortAttendance.length - 1];
    let eventLowAttendace = eventsSortAttendance[0];

    let eventsSortCapacity = [...data.events].sort(
      (a, b) => a.capacity - b.capacity
    );

    let eventLargeCapacity = eventsSortCapacity[eventsSortCapacity.length - 1];

    let pastCategory = new Set(eventsPast.map((e) => e.category));
    pastCategory = [...pastCategory];
    let comingCategory = new Set(eventsComing.map((e) => e.category));
    comingCategory = [...comingCategory];
    let everyCategoryPast = pastCategory.map((everyCat) => {
      let filter = eventsPast.filter(
        (everyEvent) => everyEvent.category === everyCat
      );
      return filter;
    });
    let everyCategoryComing = comingCategory.map((everyCat) => {
      let filter = eventsComing.filter(
        (everyEvent) => everyEvent.category === everyCat
      );
      return filter;
    });
    // --------------------------------Functions Calls------------------------------------------------------

    reduceStats(everyCategoryComing, "estimate").forEach((element) => {
      table(id("up-coming-stats"), element);
    });
    reduceStats(everyCategoryPast, "assistance").forEach((element) => {
      table(id("past-events-stats"), element);
    });

    tableTop(id("high-attendance"), eventHighAttendance);
    tableTop(id("low-attendance"), eventLowAttendace);
    tableTop(id("large-capacity"), eventLargeCapacity);
  } catch {}
}

fetchApi();
function id(container) {
  let idContainer = document.getElementById(container);
  return idContainer;
}

function table(idContainer, events) {
  idContainer.innerHTML += `<tr>
    <td>${events.category}</td>
    <td>$${events.revenue}</td>
    <td>${events.attendance.toFixed(1)}%</td>
  </tr>`;
}

function tableTop(idContainer, array) {
  if (array.id === "6351b0a1b82050da15b3a870") {
    idContainer.innerHTML = `${array.name}: ${array.capacity}`;
  } else {
    idContainer.innerHTML = `${array.name}: ${array.attendance.toFixed(1)}%`;
  }
}
function reduceStats(array, property) {
  let initialValue = {
    category: "",
    revenue: 0,
    capacity: 0,
    [property]: 0,
  };

  let statsEvent = array.map((element) => {
    return element.reduce((e, e2) => {
      return {
        category: e2.category,
        revenue: e.revenue + e2.revenue,
        capacity: e.capacity + e2.capacity,
        [property]: e[property] + e2[property],
      };
    }, initialValue);
  });
  statsEvent.map(
    (events) => (events.attendance = (100 * events[property]) / events.capacity)
  );
  return statsEvent;
}
