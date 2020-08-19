// 1. Найти в коде список ul и добавить класс “list”

const classInList = document.querySelector('ul').classList.add('list');


// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const aHref = document.body.querySelector('ul ~ a');
aHref.setAttribute('id', 'link');

// 3. На li через один (начиная с самого первого) установить класс “item”
const ul = document.querySelector("ul");
const [...getLi] = ul.querySelectorAll('li');
getLi.forEach((li, index) => {if (!index % 2){
    return li.classList.add('item')
}});


// 4. На все ссылки в примере установить класс “custom-link”

const [...allAHref] = document.body.querySelectorAll('a');
allAHref.forEach(a => a.classList.add('custom-link'));
