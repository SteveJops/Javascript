/* 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

будут в верхнем регистре. Использовать for или while.*/

let str = 'i am in the easycode';
let strSplt = str.split(" ");
let res = '';
let i = 0;

for (; i < strSplt.length; i++){
    let itert = strSplt[i];
    let firstLetter = itert.substring(0, 1).toUpperCase();
    let otherSym = itert.substring(1, itert.length);
    res +=  firstLetter + otherSym +  " ";  
 };
console.log(res);


/*2.Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд). */

let string = 'tseb eht ma i';
let result = '';

for (let i = string.length -1 ;i >= 0;i--){
    // console.log(i)
    result += string.charAt(i);
}
console.log(result);

/*3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.*/

let fact = 1;
for (let i = 1; i <= 10;i++){
    fact *= i ;
}console.log(fact);

/* 4.На основе строки “JavaScript is a pretty good language” сделать новую строку,

где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.*/

let sentence = 'JavaScript is a pretty good language';
let sentenceSplit = sentence.split(" ");
let reslt = '';
for ( let i = 0; i < sentenceSplit.length; i++){
    let solidString = sentenceSplit[i];
    let firstSymbol = solidString.substring(0, 1).toUpperCase();
    let otherSymbol = solidString.substring(1, solidString.length);
    reslt +=  firstSymbol + otherSymbol;
}
console.log(reslt);



/* 5.Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */ 

let arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
for (let number of arr){
    if (number % 2 == 0) {continue;};
        console.log(number);
}

/* 6. Дан объект:

let list = {

name: ‘denis’,

work: ‘easycode’,

age: 29

}



Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in. */

let list = {
    name: 'denis',  
    work: "easycode",
    age: 29
    }

for(let item in list){
    if (typeof(list[item]) === 'string')
    {
     list[item] = list[item].toUpperCase();
    }
}
console.log(list);
   
for(let item in list){
    if (list[item] === '')
    {
     list[item] = list[item].toUpperCase();
    }
}console.log(list);
   