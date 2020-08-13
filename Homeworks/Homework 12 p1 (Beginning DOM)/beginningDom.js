/* 1. 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <p>Text</p>
    <p>Other</p>
    <p>Next</p>
    <p>Last</p>
  </div>
  <div></div>
  <div></div>
</body>
</html>



Зная структуру html, с помощью изученных методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы, кроме первого и последнего
Для навигации по DOM использовать методы, которые возвращают только элементы */

console.log(document.head);
console.log(document.body);
console.log(document.body.children);
const firstDiv = document.body.firstElementChild;
const allDiv = firstDiv.children
console.log(firstDiv);
console.log(allDiv);

const withoutFirstLast = [...firstDiv.children].filter(el => el !== firstDiv.firstElementChild && el !== firstDiv.lastElementChild);
console.log(withoutFirstLast);