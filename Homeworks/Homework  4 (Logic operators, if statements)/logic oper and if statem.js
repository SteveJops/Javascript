// 1. Чему равно а, почему?

// let a = 0 || 'string'; //  string :потому что string = true,a ноль false.

// let a = 1 && 'string'; // string : потому что оба операнда true,вернет (слева направо) последний операнд.

// let a = null || 25; // 25 : null это false, 25 - true, вернет true.

// let a = null && 25; // null: потому действие операции над операндами заканчивается на первом false, его и выводит.

// let a = null || 0 || 35; // 35 : все false, кроме 35, его и выводит.

// let a = null && 0 && 35; // null : null: потому действие операции над операндами заканчивается на первом false, его и выводит.



// 2. Что отобразится в консоли. Почему?

12 + 14 + '12' // 2612, потому что первые два оперенда числа, а последний строка, в первом действии арифметика, во втором конкатенация.

3 + 2 - '1' // 4, потому что сроку JS привел к числу.

'3' + 2 - 1 // 31 сначала произошла конкатенация, а потом от результата отнялась 1.

true + 2 // 3, true  равно 1.

+'10' + 1 // 11, JS привел строку к числу.

undefined + 2 // NaN,  undefined "сожрал" двойку

null + 5 // 5, null = 0

true + undefined // NaN,  undefined "сожрал" true



// 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let status = 'hidden';
if (status === 'hidden'){
    status = 'visible';
    
}else 
    status = 'hidden';
    console.log(status);


/* 4. Создать переменную и присвойте ей число.

    Используя if, записать условие:
    
    - если переменная равна нулю, присвоить ей 1;
    
    - если меньше нуля - строку “less then zero”;
    
    - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
*/

let number = 7;

if (number === 0){
    number = 1;
}else if(number > 0){
    number *= 10;
}else {
    number = 'less then zzzero!!!'
}
console.log(number);


/* 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5){
    car.needRepair = true;
    console.log('Need Repair', car.needRepair);
}else{
    car.needRepair = false;
    console.log(car.needRepair)
};

/* 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
if (((item.hasOwnProperty('discount') === true) && Number(item.discount !== NaN)) &&
(item.price)){ 
    // let itemPrice = item.price.slice(0,3);
    let itemPrice = item.price.substr(0, 3);
    let itemDiscount = item.discount.split('%');
    itemDiscount = itemDiscount[0];
    let discountPrice = item.priceWithDiscount;
     discountPrice =  Number(itemPrice) - ((Number(itemPrice)/ 100) * Number(itemDiscount))
    console.log(`Price with discount: ${discountPrice}`)}
else {
    console.log(item.price)
};



/* 7. Дан следующий код:

let product = {

name: “Яблоко”,

price: “10$”

};



let min = 10; // минимальная цена

let max = 20; // максимальная цена



Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.*/


let product = {

    name: "Яблоко",
    
    price: "10$"
    
};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

let priceInNumber = product.price.split('$');
priceInNumber = Number(priceInNumber[0]);
// console.log(priceInNumber);

if ( priceInNumber >= min && priceInNumber <= max ){
    console.log(product.name)
} else{
    console.log('Products don`t found!')
}