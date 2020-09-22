// window.addEventListener("DOMContentLoaded", getUsers(callbackFunc));

// function getUsers(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("get", "https://jsonplaceholder.typicode.com/users");
//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//     cb(response);
//   });
//   xhr.addEventListener("error", () => {
//     if (xhr.status !== "200") {
//       console.log("error", xhr.status);
//       return;
//     }
//   });
//   xhr.send();
// }

// function postUsers(body, callbackFunc) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("post", "https://jsonplaceholder.typicode.com/users");
//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//     callbackFunc(response);
//   });
//   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhr.addEventListener("error", () => {
//     if (xhr.status !== "200") {
//       console.log("error", xhr.status);
//       return;
//     }
//   });
//   xhr.send(JSON.stringify(body));
// }

// function callbackFunc(response) {
//   const frag = document.createDocumentFragment();
//   response.forEach((user) => {
//     frag.appendChild(renderCard(user));
//   });
//   nestedForm(form);
//   document.body.appendChild(frag);
// }

// function renderCard(user) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const users = document.createElement("div");
//   users.classList.add("card-body");
//   users.textContent = user.name;
//   card.appendChild(users);
//   card.addEventListener("click", (e) => {
//     if ((e.target.innerHTML = user.name)) {
//       e.stopPropagation();
//       const {
//         address: { city, street, suite },
//       } = user;
//       const userInfo = document.createElement("p");
//       userInfo.textContent = `User_Name: ${user.username}; Email: ${user.email}; User_Phone: ${user.phone}; Other Info about user : {City: ${city}; Street: ${street}; Apartment #: ${suite}}`;
//       card.appendChild(userInfo);
//     }
//   });
//   return card;
// }
// const form = document.createElement("form");

// function nestedForm(f) {
//   const divWithForm = document.createElement("div");
//   divWithForm.insertAdjacentElement("afterbegin", f);
//   document.body.appendChild(divWithForm);

//   const divName = document.createElement("div");
//   divName.classList.add("form-group");
//   f.insertAdjacentElement("afterbegin", divName);
//   divName.insertAdjacentHTML(
//     "afterbegin",
//     `<label for="nameInput">Your name:</label>
//     <input type="text" class="form-control" id="nameInput" placeholder="Enter you name here">`
//   );

//   const divEmail = document.createElement("div");
//   divEmail.classList.add("form-group");
//   f.insertAdjacentElement("afterend", divEmail);
//   divEmail.insertAdjacentHTML(
//     "afterend",
//     `<label for="emailInput">Your Email:</label>
//     <input type="email" class="form-control" id="emailInput" placeholder="Enter you email here">`
//   );

//   const divPhone = document.createElement("div");
//   divPhone.classList.add("form-group");
//   f.insertAdjacentElement("afterend", divPhone);
//   divPhone.insertAdjacentHTML(
//     "afterend",
//     `<label for="phoneInput">Your phone number:</label>
//     <input type="text" class="form-control" id="phoneInput" placeholder="Enter you phone number here">`
//   );

//   const divWebsite = document.createElement("div");
//   divWebsite.classList.add("form-group");
//   f.insertAdjacentElement("afterend", divWebsite);
//   divWebsite.insertAdjacentHTML(
//     "afterend",
//     `<label for="websiteInput">Your website:</label>
//     <input type="text" class="form-control" id="websiteInput" placeholder="Enter you website here">`
//   );
// }

// const btnSubmit = document.createElement("button");

// /* Переписать все, сделать нормальную верстку, и добавить в нее все єлементы,
//  переписать оба запроса. Пост: привязка на кнопку "сабмит" собития, вынести функцию, в этой функции
//  по айди таргетами в полях инпутов определить введенно что то в поле или нет через размер,
//  когда поля введены вызов функции пост. Гет: либо все оставить как есть но скрестить верстки,
//  либо переписать. Добавлять много штмл кода можна через функцию, -  в ней ретурн и тильдовые кавычки,
//  через просто переменную но тильдовыми кавычками и тд. */

// const card = document.querySelector(".card-body");
// const userInfo = document.querySelector(".info");
// const form = document.querySelector(".form-class");
// const buton = document.createElement("button");
// const usersInput = usersInputFunc();

// // events

// card.addEventListener("click", onUserClickForInfoHandler);
// buton.addEventListener("click", onClickPostSubmitHandler);

// // Events Handlers

// function onUserClickForInfoHandler(e) {
//   e.preventDefault();
//   if (e.target.dataset.userId) {
//     getOneUser(e.target.dataset.userId, callbackFunc);
//   }
// }

// function onClickPostSubmitHandler(e) {
//   if (usersInput) {
//     postUsers();
//   }
// }

// // HTTP functions

// function getUsers(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("get", `https://jsonplaceholder.typicode.com/users`);
//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//     cb(response);
//   });
//   xhr.addEventListener("error", () => {
//     if (xhr.status !== "200") {
//       console.log("error", xhr.status);
//       return;
//     }
//   });
//   xhr.send();
// }

// function usersCallback(users) {
//   if (!users.length) {
//     return;
//   }

//   renderUsers(users);
//   console.log(users);
// }

// function getOneUser(id, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("get", `https://jsonplaceholder.typicode.com/users/${id}`);
//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     cb(response);
//   });
//   xhr.addEventListener("error", () => {
//     if (xhr.status !== "200") {
//       console.log("error", xhr.status);
//       return;
//     }
//   });
//   xhr.send();
// }

// function callbackFunc(user) {
//   if (!user.id) {
//     console.log("User not found");
//     return;
//   }
//   renderInfo(user);
// }

// function postUsers(body, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("post", "https://jsonplaceholder.typicode.com/users");
//   xhr.addEventListener("load", () => {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//     cb(response);
//   });
//   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhr.addEventListener("error", () => {
//     if (xhr.status !== "200") {
//       console.log("error", xhr.status);
//       return;
//     }
//   });
//   xhr.send(JSON.stringify(body));
// }

// // Render Functions

// function renderUsers(users) {
//   let frag = users.reduce((acc, user) => {
//     return acc + userListTemplate(user);
//   }, "");
//   card.insertAdjacentHTML("afterbegin", frag);
// }

// function renderInfo(user) {
//   userInfo.innerHTML = "";
//   const template = userInfoTemplate(user);
//   userInfo.insertAdjacentHTML("afterbegin", template);
// }

// // Template Functions

// function userListTemplate(user) {
//   return `
//   <button type='button' class= 'list-group-item list-group-item-action'  data-user-id="${user.id}">
//   ${user.name}
//   </button>
//   `;
// }

// function userInfoTemplate(user) {
//   return `
//     <div class="card border-dark mb-3">
//         <div class="card-header">${user.name}</div>
//         <div class="card-body text-dark">
//           <h5 class="card-title">${user.email}</h5>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
//             <li class="list-group-item"><b>Website:</b> ${user.website}</li>
//             <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
//             <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
//           </ul>
//         </div>
//         <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
//       </div>
//   `;
// }

// function createSubmitButton(btn) {
//   btn.classList.add("btn btn-submit");
//   btn.textContent = "Submit";
//   form.insertAdjacentHTML("afterend", btn);
//   return btn;
// }

// function usersInputFunc() {
//   const inputs = [...form.elements].filter((el) => el.nodeName == "INPUT");
//   inputs.forEach((el) => {
//     if (!el.length) {
//       return "This field has necessarily to enter";
//     }
//   });
// }
// // Init App

// getUsers(usersCallback);
