window.addEventListener("DOMContentLoaded", getUsers(callbackFunc));

function getUsers(callbackFunc) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    callbackFunc(response);
  });
  xhr.addEventListener("error", () => {
    if (xhr.status !== "200") {
      console.log("error", xhr.status);
      return;
    }
  });
  xhr.send();
}

function callbackFunc(response) {
  const frag = document.createDocumentFragment();
  response.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const users = document.createElement("div");
    users.classList.add("card-body");
    users.textContent = user.name;
    card.appendChild(users);
    card.addEventListener("click", (e) => {
      if ((e.target.innerHTML = user.name)) {
        e.stopPropagation();
        const {
          address: { city, street, suite },
        } = user;
        const userInfo = document.createElement("p");
        userInfo.textContent = `User_Name: ${user.username}; Email: ${user.email}; User_Phone: ${user.phone}; Other Info about user : {City: ${city}; Street: ${street}; Apartment #: ${suite}}`;
        card.appendChild(userInfo);
      }
    });
    frag.appendChild(card);
  });
  document.body.appendChild(frag);
}
