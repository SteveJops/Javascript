// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

let piNumber = (Math.PI).toFixed(2);
console.log(piNumber);

// 2.Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(minNumber);
let maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(maxNumber);

// 3.Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

let randomRandInt = (Math.random() * 10 + 2).toFixed(2);
console.log(randomRandInt);

let ranNumber = Math.round(Math.random() * 20);
console.log(ranNumber);

// 4.Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let whatIf = 0.6 + 0.7;
console.log(whatIf);

let whatElse = (whatIf).toFixed(1);
console.log(whatElse);

// 5.Получить число из строки ‘100$’

let strToInt = parseInt('100$');
console.log(strToInt);