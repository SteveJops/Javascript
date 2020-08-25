/* 1. При наведении на любой из блоков с классом .box все его дочерние элементы
должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно
блока на который навели мышь.
Вот массив (список) рандомных цветов
['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown']; */


/* 2. Возращаете фон обратно когда пользователь уводит мышку с блока. */

/* 3. Добавление фона из первой части задания сделать с задержкой в 200мс.
 Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. 
 Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.*/

function randomColors(element){
    const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
    const random = colors[Math.round(Math.random()*colors.length)];
    element.style.background = random;
}

function reset(element){
    element.style.background = '';
}


const getBlocks = document.querySelectorAll('.box');

function changeBackgroundColor(event){
    let elementThatChange = [event.currentTarget];
    let currentElement = event.currentTarget;

    while(currentElement){
        elementThatChange = [...elementThatChange, ...currentElement.children];
        currentElement = currentElement.children[currentElement.children.length-1]
    }
    elementThatChange.forEach((element, index) => setTimeout(randomColors, 200 * (index + 1), element));
}


function resetBackgroundColor(event){
    reset(event.currentTarget);
}

getBlocks.forEach(el => el.addEventListener('mouseover', changeBackgroundColor))
getBlocks.forEach(el => el.addEventListener('mouseout', resetBackgroundColor))

