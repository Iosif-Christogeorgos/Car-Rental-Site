// IOSIF CHRISTOGEORGOS

const carList = document.querySelectorAll(".car-container");
const carImageContainer = document.querySelectorAll(
  ".detailed-car-img-container"
);
const carDetailsContainer = document.querySelectorAll(".car-details");
const rightContainer = document.querySelector(".right-container");

carList.forEach((car) =>
  car.addEventListener("click", (e) => {
    let carName = car.dataset.cartype;

    // Economy Cars
    if (carName === "ford-fiesta") {
      rightContainer.innerHTML = fordFiesta;
    } else if (carName === "volkswagen-beetle") {
      rightContainer.innerHTML = volkswagenBeetle;
    } else if (carName === "volkswagen-golf") {
      rightContainer.innerHTML = volkswagenGolf;
    } else if (carName === "damaged-car") {
      rightContainer.innerHTML = damagedCar;
    }

    // Luxury Cars
    if (carName === "bmw-i8") {
      rightContainer.innerHTML = bmwI8;
    } else if (carName === "ford-mustang") {
      rightContainer.innerHTML = fordMustang;
    } else if (carName === "mercedes-amg") {
      rightContainer.innerHTML = mercedesAmg;
    } else if (carName === "lamborghini-huracan") {
      rightContainer.innerHTML = lamborghiniHuracan;
    }

    // SUVs
    if (carName === "hyundai-santa-fe") {
      rightContainer.innerHTML = hyundaiSantaFe;
    } else if (carName === "bmw-x1") {
      rightContainer.innerHTML = bmwX1;
    } else if (carName === "jeep-wrangler") {
      rightContainer.innerHTML = jeepWrangler;
    } else if (carName === "cadillac-escalade") {
      rightContainer.innerHTML = cadillacEscalade;
    }

    // Business Class
    if (carName === "bmw-m4") {
      rightContainer.innerHTML = bmwM4;
    } else if (carName === "rolls-royce") {
      rightContainer.innerHTML = rollsRoyce;
    } else if (carName === "range-rover") {
      rightContainer.innerHTML = rangeRover;
    } else if (carName === "mercedes-benz") {
      rightContainer.innerHTML = mercedesBenz;
    }
  })
);
