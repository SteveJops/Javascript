const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
  };

  let lastSelectedTheme = localStorage.getItem("app_theme") || "default";

  // Elements UI

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const form = document.forms["addTask"];
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];
  const themeSelect = document.getElementById("themeSelect");

  // Events
  setTheme(lastSelectedTheme);
  renderAllTasks(objOfTasks);

  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);
  listContainer.addEventListener("click", onCompleteTask);
  themeSelect.addEventListener("change", onThemeSelectHandler);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Give the tasks list");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    /* 2. В каждый элемент li добавить кнопку которая будет делать задачу выполненной. 
  Завершенные задачи должны быть подсвечены любым цветом.
   */

    const completeTaskBtn = document.createElement("div");
    completeTaskBtn.classList.add("custom-control", "custom-switch");

    if (completed) {
      completeTaskBtn.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" class="custom-control-input" checked id="customSwitch${_id}">
        <label class="custom-control-label" for="customSwitch${_id}">Complete Task</label>`
      );
      li.classList.add("bg-success");
    } else {
      completeTaskBtn.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" class="custom-control-input" id="customSwitch${_id}">
        <label class="custom-control-label" for="customSwitch${_id}">Complete Task</label>`
      );
      li.classList.add("bg-warning");
    }

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    li.appendChild(completeTaskBtn);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Please entry title & body ");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    errorMessage();
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task - ${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;
    return { ...newTask };
  }
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Do you realy want to delete a task: ${title}`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
      errorMessage();
    }
  }

  /* 1. Если массив с задачами пустой то под формой нужно выводить сообщение об этом, 
  также это же сообщение нужно выводить если вы удалите все задачи.*/

  const textMessage = document.createElement("div");
  textMessage.textContent = "There isn`t any tasks here!";
  textMessage.classList.add(
    "alert",
    "alert-danger",
    "text-center",
    "display-3",
    "d-none"
  );

  const emptyUl = document.querySelector(".list-group");
  let needDiv = document.querySelector(".tasks-list-section .container");
  needDiv.insertAdjacentElement("afterend", textMessage);

  function errorMessage() {
    if (
      Array.from(emptyUl.children).length === 0 &&
      textMessage.classList.contains("d-none")
    ) {
      textMessage.classList.remove("d-none");
      textMessage.classList.add("d-block");
    } else if (
      Array.from(emptyUl.children).length !== 0 &&
      textMessage.classList.contains("d-block")
    ) {
      textMessage.classList.remove("d-block");
      textMessage.classList.add("d-none");
    }
  }
  errorMessage();

  /* 2. В каждый элемент li добавить кнопку которая будет делать задачу выполненной. 
  Завершенные задачи должны быть подсвечены любым цветом.
   */

  let showSort = false;

  function onCompleteTask({ target }) {
    if (target.classList.contains("custom-control-input")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;

      if (objOfTasks[id].completed === true) {
        objOfTasks[id].completed = false;
        if (parent.classList.contains("bg-success")) {
          parent.classList.remove("bg-success");
          parent.classList.add("bg-warning");
        }
      } else {
        objOfTasks[id].completed = true;
        if (showSort) {
          completeTasks();
        }
        if (parent.classList.contains("bg-warning")) {
          parent.classList.remove("bg-warning");
          parent.classList.add("bg-success");
        }
      }
    }
  }

  /* 3. Добавить функционал отображения незавершенных задач и всех задач. т.е у вас будет две кнопки 
  над таблицей 1-я "показать все задачи" и 2-я "показать незавершенные задачи", определить завершена задача 
  или нет можно по полю completed в объекте задачи.  По умолчанию при загрузке отображаются все задачи.*/

  const divWithBtns = document.createElement("div");

  const allTasksBtn = document.createElement("button");
  allTasksBtn.textContent = "Show Tasks";
  allTasksBtn.classList.add("btn", "btn-info", "mt-2", "ml-4");

  const allCompleteTasksBtn = document.createElement("button");
  allCompleteTasksBtn.textContent = "Complete Tasks";
  allCompleteTasksBtn.classList.add("btn", "btn-info", "mt-2", "ml-4");

  divWithBtns.appendChild(allTasksBtn);
  divWithBtns.appendChild(allCompleteTasksBtn);

  let divWithCardClass = document.querySelector(".card");
  divWithCardClass.insertAdjacentElement("afterend", divWithBtns);

  const listWithItems = document.getElementsByTagName("ul");

  allTasksBtn.addEventListener("click", (e) => {
    let arrWithUlChildren = Array.from(listWithItems[0].children);
    arrWithUlChildren.forEach((item) => {
      item.classList.remove("d-none");
    });
    showSort = false;
  });

  allCompleteTasksBtn.addEventListener("click", completeTasks);

  function completeTasks(e) {
    let arrWithUlChildren = [...listWithItems[0].children];
    console.log(arrWithUlChildren);
    let showTasks = arrWithUlChildren.filter(
      (item) => objOfTasks[item.dataset.taskId].completed
    );
    console.log(showTasks);
    showTasks.forEach((item) => {
      item.classList.add("d-none");
    });
    showSort = true;
  }

  // function completeTasks(e) {
  //   let arrWithUlChildren = Array.from(listWithItems[0].children);
  //   let showTasks = arrWithUlChildren.filter((item) => {
  //     if (objOfTasks[item.dataset.taskId].completed === true) {
  //       return item;
  //     }
  //   });
  //   showTasks.forEach((item) => {
  //     item.classList.add("d-none");
  //   });
  //   showSort = true;
  // }

  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isComfirmed = confirm(
      `Do you really want to change the theme: ${selectedTheme}`
    );
    if (!isComfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem("app_theme", selectedTheme);
  }

  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) =>
      document.documentElement.style.setProperty(key, value)
    );
  }
})(tasks);
