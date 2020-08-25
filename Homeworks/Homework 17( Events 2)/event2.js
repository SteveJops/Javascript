/* 1. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты 
через класс .d-none. При клике на dropdown-item должен отображаться блок 
dropdown-menu который вложен именно в тот dropdown-item на котором произошел 
клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен
закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu 
должен закрываться а на тот который кликнули открываться. */

const items = document.querySelectorAll('.dropdown-item');
let openedMenu = null;

function dropDown(event){
    const mainMenu = event.currentTarget.querySelector('.dropdown-menu');
    const added = mainMenu.classList.toggle('d-none');
    if(openedMenu && openedMenu!==mainMenu){
        openedMenu.classList.add('d-none');
    }
    if(!added){
        openedMenu = mainMenu;
    }
}

items.forEach(a => a.addEventListener('click', dropDown));