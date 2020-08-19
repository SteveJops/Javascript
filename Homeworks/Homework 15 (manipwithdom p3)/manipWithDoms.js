/* 1. Не используя innerHTML, добавить в список несколько li с классом
‘new-item’ и текстом ‘item’ + номер li:

<ul>

<li><a href="#">Link1</a></li>

...

<li class=”new-item”>item 5</li>

<li class=”new-item”>item 6</li>

</ul>

Вручную номер li не ставить оно должно подставляться
в зависимости от кол-ва лишек в списке. */

const ul = document.querySelector('ul');
const currentEl = ul.children.length;
const newQuantity = 3;

for ( let i = 0; i < newQuantity; i++){
    let getLi = document.createElement(li);
    getLi.classList.add('new-item');
    getLi.textContent = `item + ${newQuentity + i + 1}`;
    ul.appendChild(getLi);
}

/*  2. В каждую ссылку, которая находятся внутри списка ul
добавить по тегу strong (в каждую ссылку один - strong). */

const [...getA] = document.querySelector('ul a');
getA.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));


/* 3. В начало документа (в начало body) добавить картинку img с атрибутами src
и alt (текст придумайте сами). В src добавьте реальный url к картинке. 
Для создания элемента используйте метод createElement. */

const createImg = document.createElement('img');
createImg.setAttribute('src', 'https://www.google.com/search?q=panter&sxsrf=ALeKk03e5eCRo_OP9Rnn6tZiHAzbI66wFw:1597781506045&tbm=isch&source=iu&ictx=1&fir=km4qWTQPi18GZM%252CzKuVyhm8xuCHPM%252C_&vet=1&usg=AI4_-kTIH-GYj7uzTfeRiNPiHrnU-kg5Uw&sa=X&ved=2ahUKEwjxjeL4x6XrAhVO-yoKHR_3A98Q9QEwAXoECAEQHw&biw=1358&bih=611#imgrc=km4qWTQPi18GZM');
createImg.setAttribute('alt', 'This is a panter pic')
document.body.insertAdjacentElement('afterbegin', createImg)

/* 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” 
и на элемент установить класс green */

const getMark = document.querySelector('mark');
getMark.insertAdjacentText('beforeend', 'green');
getMark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

const getul = document.querySelector('ul');
const getli = [...getul.children].sort((prev, next) => {
  return prev.textContent > next.textContent ? -1 : 1;
});
getul.innerHTML = '';
getli.forEach(li => getul.appendChild(li));