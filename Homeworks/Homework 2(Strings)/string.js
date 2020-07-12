/*

Вопросы к этому заданию: 

Получить первую и последнюю буквы строки

Сделать первую и последнюю буквы в верхнем регистре

Найти положение слова ‘string’ в строке

Найти положение второго пробела (“вручную” ничего не считать)

Получить строку с 5-го символа длиной 4 буквы

Получить строку с 5-го по 9-й символы

Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

*/ 

let string = "some test string";

let result = string[0];
let result1 = string[string.length-1];
console.log(result, result1);


result = result.toUpperCase();
result1 = result1.toUpperCase();
console.log(result, result1);

console.log(string.indexOf('string'));
console.log(string.indexOf(' ', 5));
console.log(string.substr(5, 4));
console.log(string.slice(5, 10));
let str = string.slice(0, -6);
console.log(str);

let a = 20, b = 16;
let res = (a.toString()) + (String(b));
console.log(res);



