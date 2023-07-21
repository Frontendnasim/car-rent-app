import { carsData } from "./cars.js";
const carsDOM = document.querySelector(".cars-center");

class Cars {
  getCars() {
    return carsData;
  }
}

class UI {
  displayCars(cars) {
    let result = "";
    cars.forEach((item) => {
      result += `<section class="catalogue-card">
            <div class="card__header">
              <div class="card__header-text">
                <h2 class="card__text">${item.title}</h2>
                <p class="card__type">${item.class}</p>
              </div>
              <img src=${item.heart} alt="" class="card__like" />
            </div>
            <div class="card__details">
              <div class="card__image">
                <div class="card__image-pic">
                  <img src=${item.imageUrl} alt="" />
                </div>
                <div class="card__image-bottom"></div>
              </div>
              <div class="card__specification">
                <div class="card__spes-items">
                  <img src="./assets/images/vuesax-bold-gas-station.svg" alt="" />
                  <p>${item.gas}</p>
                </div>
                <div class="card__spes-items">
                  <img src="./assets/images/car.svg" alt="" />
                  <p>${item.gearbox}</p>
                </div>
                <div class="card__spes-items">
                  <img src="./assets/images/vuesax-bold-profile-2-user.svg" alt="" />
                  <p>${item.people}</p>
                </div>
              </div>
            </div>
            <div class="card__rent">
              <div class="card__rent-price">
                <div class="price">
                  <p>$<span class="car__price">${item.price}</span><span>/</span></p>
                </div>
                <p class="price-day">day</p>
              </div>
              <button class="card__rent-btn btn btn-large--primary" data-id=${item.id}>Rent Now</button>
            </div>
          </section>
          `;
      carsDOM.innerHTML = result;
    });
  }
}

class Storage {
  static saveCars(cars) {
    localStorage.setItem("cars", JSON.stringify(cars));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cars = new Cars();
  const carsData = cars.getCars();
  const ui = new UI();
  ui.displayCars(carsData);
  Storage.saveCars(carsData);
  // console.log(carsData);
});
