/* 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом 
который находится в атрибуте data-text у кнопки. */

const btn = document.getElementById("btn-msg");
function needEvent(){
    alert(btn.dataset.text)}
btn.addEventListener('click', needEvent)


/* 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; 
когда указатель мыши покидает кнопку, она становится прежнего цвета.
 Цвет менять можно через добавление класса. */

 const btn1 = document.getElementById("btn-msg");

 btn1.onmouseover = function(){
     btn1.classList.toggle('bg-red');
 }

btn1.onmouseout = function(){
    btn1.classList.toggle('bg-red');
}


/* 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега 
нажатого элемента. */ 

const tag = document.getElementById("tag");

tag.addEventListener('click', (e)=>{
    tag.textContent = `Tag: ${e.target.nodeName}`
})

/* 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка
 Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д */
const btnGenerate = document.getElementById('btn-generate');
const ul = document.querySelector('ul');



function doesEvent(e){
    const currentEl = ul.children.length + 1;
    let getLi = document.createElement('li');
    getLi.textContent = `Item ${currentEl}`;
    ul.appendChild(getLi);
}
    btnGenerate.addEventListener('click', doesEvent)
