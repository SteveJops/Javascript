const card = document.querySelector(".card-body");
const userInfo = document.querySelector(".info");
const form = document.querySelector(".form-class");

// events

card.addEventListener("click", onUserClickForInfoHandler);
form.addEventListener("submit", onFormSubmit);

// Events Handlers

function onUserClickForInfoHandler(e) {
  e.preventDefault();
  if (e.target.dataset.userId) {
    getOneUser(e.target.dataset.userId, callbackFunc);
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const inputs = [...form.elements].filter((el) => el.nodeName !== "BUTTON");

  const objValues = inputs.reduce((acc, input) => {
    acc[input.name] = input.value;
    return acc;
  }, {});

  postUsers(objValues, onAddUserCallback);
}

// HTTP functions

function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", `https://jsonplaceholder.typicode.com/users`);
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    cb(response);
  });
  xhr.addEventListener("error", () => {
    if (xhr.status !== "200") {
      console.log("error", xhr.status);
      return;
    }
  });
  xhr.send();
}

function usersCallback(users) {
  if (!users.length) {
    return;
  }

  renderUsers(users);
  console.log(users);
}

function getOneUser(id, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", `https://jsonplaceholder.typicode.com/users/${id}`);
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.addEventListener("error", () => {
    if (xhr.status !== "200") {
      console.log("error", xhr.status);
      return;
    }
  });
  xhr.send();
}

function callbackFunc(user) {
  if (!user.id) {
    console.log("User not found");
    return;
  }
  renderInfo(user);
}

function postUsers(data, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("post", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    console.log(xhr);
  });
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhr.addEventListener("error", () => {
    if (xhr.status !== "200") {
      console.log("error", xhr.status);
      return;
    }
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.send(JSON.stringify(data));
}

function onAddUserCallback(newUser) {
  if (!newUser.id) {
    return;
  }

  renderNewUserToList(newUser);
}

// Render Functions

function renderUsers(users) {
  let frag = users.reduce((acc, user) => {
    return acc + userListTemplate(user);
  }, "");
  card.insertAdjacentHTML("afterbegin", frag);
}

function renderInfo(user) {
  userInfo.innerHTML = "";
  const template = userInfoTemplate(user);
  userInfo.insertAdjacentHTML("afterbegin", template);
}

function renderNewUserToList(user) {
  const template = userListItemTemplate(user);
  userInfo.insertAdjacentHTML("afterbegin", template);
}

// Template Functions

function userListTemplate(user) {
  return `
  <button type='button' class= 'list-group-item list-group-item-action'  data-user-id="${user.id}">
  ${user.name}
  </button>
  `;
}

function userInfoTemplate(user) {
  return `
    <div class="card border-dark mb-3">
        <div class="card-header">${user.name}</div>
        <div class="card-body text-dark">
          <h5 class="card-title">${user.email}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
            <li class="list-group-item"><b>Website:</b> ${user.website}</li>
            <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
            <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
          </ul>
        </div>
        <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
      </div>
  `;
}

function userListItemTemplate(user) {
  return `
  <div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${user.name || ""}</h5>
        <small>${user.phone || ""}</small>
      </div>
        <p class="mb-1">${user.email || ""}</p>
      <small>${user.website | ""}</small>
  </div>
 `;
}
// Init App

getUsers(usersCallback);
