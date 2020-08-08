1./* Создайте функцию которая бы умела делать:

minus(10)(6); // 4

minus(5)(6); // -1

minus(10)(); // 10

minus()(6); // -6

minus()(); // 0

Подсказка, функция minus должна возвращать другую функцию. */ 

function minusRes (num = 0){
    return function numberThatWeWantToSubstract(substrnnum = 0){
        let res = num - substrnnum;
        return res;
    }
}
console.log(minusRes(10)(6));
console.log(minusRes(5)(6));
console.log(minusRes(10)());
console.log(minusRes()(6)); 
console.log(minusRes()());



/* 2.Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10) */

function multiplyMaker(num){
    return function second(num1){
        num *= num1;
        return num;
    }
}


const multiply = multiplyMaker(2);

console.log(multiply(2)); // 4 (2 * 2)

console.log(multiply(1)); // 4 (4 * 1)

console.log(multiply(3)); // 12 (4 * 3)

console.log(multiply(10)); // 120 (12 * 10)





/* 3. Реализовать модуль, который работает со строкой и имеет методы:

a. установить строку

i. если передано пустое значение, то установить пустую строку

ii. если передано число, число привести к строке

b. получить строку

c. получить длину строки

d. получить строку-перевертыш

Пример:

модуль.установитьСтроку(‘abcde’);

модуль.получитьСтроку(); // ‘abcde’

модуль.получитьДлину(); // 5 */

const modul = (function stringModul(){
    let str = '';

    function setString(strng = ''){
        str = String(strng);
    }
    function getString(){
        return str;
    }
    function getStringLength(){
        return str.length;
    }
    function getStringReverse(){
        let res = '';
        for (let i = str.length - 1; i >= 0; i--){
            res += str[i];
        }return res;
    }
    return{
        setString: setString,
        getString: getString,
        getStringLength: getStringLength,
        getStringReverse: getStringReverse
    }
}())

console.log(modul.setString(1234))
console.log(modul.getString())
console.log(modul.getStringLength())
console.log(modul.getStringReverse())






/* 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).


модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)



Также можно вызывать методы цепочкой:



модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 */ 


const calculator = (function (){
    let value = 0;

    function setValue(number){
        value = parseInt(number);
        return value;
    }
    function getAddition(num){
        return value += num;
    }
    function getSubtract(num){
        return value -= num;
    }
    function getMultiply(num){
        return value *= num;
    }
    function getDivide(num){
        return value /= num;
    }
    function getElevate(num){
        value = value ** num;
        return value;
    }
    function getExpression(){
        let res = value.toFixed(2);
        return res;
    }
    return{
        setValue: setValue,
        getAddition: getAddition,
        getSubstract: getSubtract,
        getMultiply: getMultiply,
        getDivide: getDivide,
        getElevate: getElevate,
        getExpression: getExpression
    }

}());

// calculator.setValue(100)
// calculator.getAddition(15)
// calculator.getSubstract(25)
// calculator.getMultiply(125)
// calculator.getDivide(33)
// calculator.getElevate(3)
// calculator.setValue(100).getAddition(15).getSubstract(25).getMultiply(125).getDivide(33).getElevate(3);

// console.log(calculator.getExpression());
