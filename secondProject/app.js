// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "ac7bdb329b014c7db0cf99b45d8483b9";
  const apiUrl = "https://news-api-v2.herokuapp.com";

  return {
    topHeadlines(country = "ua", category = "general", cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
        cb
      );
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

// Elements

const form = document.forms["newsControls"];
const countrySelect = form.elements["country"];
const searchInput = form.elements["search"];
const categorySelect = form.elements["category"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

// Load news function

function loadNews() {
  showLoader();
  const country = countrySelect.value;
  const searchText = searchInput.value;
  const category = categorySelect.value;

  if (!searchText) {
    newsService.topHeadlines(country, category, onGetResponse);
  } else {
    newsService.everything(searchText, onGetResponse);
  }
}

// Function on get response from server

function onGetResponse(err, res) {
  removePreLoader();

  if (err) {
    showAlert(err, "error-msg");
    return;
  }

  if (!res.articles.length) {
    // show empty message (Homework)
    showMessage();
    return;
  }
  renderNews(res.articles);
}

// Function render news

function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  if (!newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = "";
  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

function clearContainer(container) {
  // container.innerHtml = "" - очистка первЫй способ

  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

// News item template function

function newsTemplate({ urlToImage, title, url, description }) {
  return `
        <div class='col s12'>
        <div class="card">
        <div class="card-image">
        <img src="${
          urlToImage ||
          "https://lh3.googleusercontent.com/proxy/7MHeZ19FKBcZ0EYHC1LWHTH8Zqy7Vq8y0eTCOcggLPfLsxqZfVX_kX-rvwCH6OKlcG_1Nx8KwBXkUndzPrDcx2y8EZOecRKaWIFsbn0"
        }">
        <span class="card-title">${title || ""}</span>
        </div>
        <div class="card-content">
        <p>${description || ""}</p> 
        </div>
        <div class="card-action">
            <a href='${url}'>Read more </a>
        </div>
        </div>
        </div>    
    `;
}

function showAlert(msg, type = "success") {
  M.toast({ html: msg, classes: type });
}

function showMessage() {
  M.toast({ html: "Any news didn`t found", classes: "rounded" });
}

// Show Loader  Function
function showLoader() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class = 'progress'>
    <div class = "indeterminate"></div>
    </div>`
  );
}

// Remove loader function

function removePreLoader() {
  const loader = document.querySelector(".progress");
  if (loader) {
    loader.remove();
  }
}
