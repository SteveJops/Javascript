/*  2. Дана разметка.

<div>
    <article>
      <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
    </article>
  </div>
  <ul>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </ul><span></span>
  <a href="#">Some link</a>
Создать функцию, которая принимает два элемента. 
Функция проверяет, является ли первый элемент родителем для второго:

isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));

// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));

// false так ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты. Обязательно проверяйте это. */

function isParents(parent, child) {
  if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) {
    return console.log("Error! It isn`t a DOM - Element");
  }
  let getParent = false;
  let getChild = child.parentElement;

  while (getChild) {
    getParent = getChild === parent;
    if (getParent) {
      break;
    }
    getChild = getChild.parentElement;
  }
  return getParent;
}
const res = isParents(
  document.body.children[0],
  document.querySelector("mark")
);
console.log(res);

const res1 = isParents(document.querySelector('ul'), document.querySelector('mark'));
console.log(res1);

/* 3. Используя разметку из предыдущего задания.
Получить список всех ссылок, которые не находятся внутри списка ul. */

const linksWhichDoesntContainInUl = [...document.links].filter(a => !a.closest("ul"));
console.log(linksWhichDoesntContainInUl);

/* 4. Используя разметку из предыдущего задания.
Найти элемент, который находится перед и после списка ul. */



// const elBeforeAfterUl = () => {
//   let ul = document.querySelector("ul");
//   const beforUl = ul.previousElementSibling;
//   const afterUl = ul.nextElementSibling;
//   return console.log(beforUl, afterUl);
// }
// elBeforeAfterUl();



const result = (function el() {
  let ul = document.querySelector("ul");

  function elBeforeUl() {
    const beforUl = ul.previousElementSibling;
    return beforUl;
  }

  function elAfterUl() {
    const afterUl = ul.nextElementSibling;
    return afterUl;
  }
  return {
    elBeforeUl: elBeforeUl,
    elAfterUl: elAfterUl
  }
}())


console.log(result.elBeforeUl());
console.log(result.elAfterUl());