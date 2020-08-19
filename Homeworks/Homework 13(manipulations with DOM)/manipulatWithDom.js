// 1.Найти параграф и получить его текстовое содержимое (только текст!)

const elementP = document.querySelector('p');
elementP.textContent;
console.log(elementP.textContent)

/* 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию 
(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0). */

function nodeInfo(attr){
    if (!attr instanceof Node ){ console.log('Back Off')}
    const nameNode = attr.nodeName;
    const typeOfNode = attr.nodeType;
    const howManyChilden = attr.childNodes;
    if (!howManyChilden){return howManyChilden = 0};
    return {
        nameNode : nameNode,
        typeOfNode : typeOfNode,
        howManyChilden : howManyChilden

    }
}

const getDiv = document.querySelector('div');
console.log(nodeInfo(getDiv));
const getP = document.querySelector('p');
console.log(nodeInfo(getP));


/* 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"] */
const getUl = document.querySelector('ul');

function getAllData(attr){  
    const [...getLink] = attr.querySelectorAll('a');
    return getLink.map(a => a.textContent);
}
console.log(getAllData(getUl));

/* 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться).
 Конечный результат: -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text- */

const [...getPar] = document.querySelector('p').childNodes;
getPar.forEach(txt => {
    // if(txt === 'text'){
    return txt.data = '-text-';
// }
})
console.log(getPar)



