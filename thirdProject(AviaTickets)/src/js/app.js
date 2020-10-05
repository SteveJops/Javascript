import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";
import ticketsUI from "./views/tickets";
import currencyUI from "./views/currency";
import favorites from "./store/favorites_tickets";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form;
  const tickets = document.querySelector(".tickets-sections");
  const trigger = document.querySelector(".dropdown-trigger");
  const dropdown = document.getElementById("dropdown1");

  //Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  dropdown.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-favorite")) {
      favorites.deleteFavoriteTickets(e.target);
      let id = e.target.dataset.uniq;
      delete favorites.favorites[id];
      trigger.innerHTML = `Favorite - ${
        Object.keys(favorites.favorites).length
      }`;
      let instance = M.Dropdown.getInstance(trigger);
      instance.recalculateDimensions();
    }
  });

  tickets.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-favorite")) {
      let id = e.target.dataset.uniq;
      let favorite_ticket = locations.getTicketByUniqueID(id);
      if (favorites.favorites[id] === undefined) {
        favorites.favorites[id] = favorite_ticket;
        let ticketTemp = favorites.favoriteTicketsTemp(favorite_ticket);
        dropdown.insertAdjacentHTML("afterbegin", ticketTemp);
        trigger.innerHTML = `Favorite - ${
          Object.keys(favorites.favorites).length
        }`;
      }
    }
  });

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    ticketsUI.renderTickets(locations.lastSearch);
  }
});
