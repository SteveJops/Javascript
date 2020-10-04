import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUi from "./views/form";
import formUI from "./views/form";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUi.form;

  //Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  // Handlers
  async function initApp() {
    await locations.init();
    formUi.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
  }
});
