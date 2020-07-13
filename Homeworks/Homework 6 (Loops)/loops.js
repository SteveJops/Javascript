/* 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

будут в верхнем регистре. Использовать for или while.*/

let str = 'i am in the easycode';
let strSplt = str.split(" ");
let res = '';

for (let i = 0; i < strSplt.length; i++){
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
    result += string.charAt(i);
}
console.log(result);

/*3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.*/
let i = 11
for (; i--;){
    i *= i;
    console.log(i);
}
