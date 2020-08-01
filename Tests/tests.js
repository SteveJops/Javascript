function multiply() {
     if (arguments.length != 0){
        let number = 1;
        for(let arg in arguments){
             number *= arguments[arg];
         }
         return number;
     }else{
         return 0;
     }
};


// console.log(multiply(2, 4, 5, 6));
// console.log(multiply());



function reverseString(str) {
    return String(str).split('').reverse().join('');
}
    
reverseString('test');
reverseString('');
// console.log(reverseString(null));
reverseString(undefined);
reverseString();



function getCodeStringFromText(str) {
    str = String(str).split('');
    let strng = "";
    for (word in str){
        strng = strng + " " + str[word].charCodeAt();
    }return strng.trim();
}

// console.log(getCodeStringFromText("hello"));


function guessTheNumber(num) {
    if(num < 0 || num > 10){
        return new Error ("Please provide number in range 0 - 10!");
    }
    else if (num === NaN){
        return new Error ("Please provide a valid number");
    }
    else if (parseInt(num)!= Number(num)){
        return new Error ("Not a Number");
    }
    let randNumbers = Math.round(Math.random() * 10).toFixed(0);
    if (num == randNumbers){
        return "You win!!!";
    }else{
        return `You are lose, your number is ${num}, but the random number is ${randNumbers}.`;
    }
}
// console.log(guessTheNumber(5));



function getArray(num) {
    let arr = [];
    for (let i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr;
}

// console.log(getArray(10));


function doubleArray(arr) {
    const arrAy = arr.concat(arr);
    return arrAy;
}

// console.log(doubleArray([1,2,3]));


function changeCollection() {
    let res = [];
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])){
            let beforeRes = arguments[i].slice();
            beforeRes.shift();
            res.push(beforeRes);
        }
    }return res;
}
// console.log(changeCollection([1,2,3], ['a', 'b', 'c']))



const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]


function filterUsers(arr, key, value) {
    if (!Array.isArray(arr)){return new Error('It isn`t an array here')};
    if (typeof(key) !== 'string'|| key === ""){return new Error("This key doesn`t have a string value. Check you key entrance.")};
    if (value === undefined || value === null){return new Error("There isn`t a value here or it has a void value. ")};
   
    let result = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i][key] === value){
            result.push(arr[i]);
        }
    }
    return result;
    }
// console.log(filterUsers(users, "age", 36));




// 1
function firstFunc(arr, fn) {
    let res = "New value: ";
    for(let i = 0; i < arr.length; i++){
        res+=(fn(arr[i]));
    }
    return res;
}

function handler1(el) {
    return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
    return ((Number(el)) * 10) + ", ";
}

console.log(firstFunc([10, 20, 30], handler2) )

    

function handler3(el) {
    return (el.name + " is " + el.age) + ", ";
}

console.log(firstFunc([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    return el.split('').reverse().join('') + ", ";
}

console.log(firstFunc(['abs', '123'], handler4));

// 2
function every(arr, fn) {
    if (!Array.isArray(arr)){
        return new Error("It isn`t an array!");
    }
    if (!fn || typeof(fn) !== "function"){
        return new Error("It isn`t a function!");
    }
    
    for (let i = 0; i < arr.length; i++){
        if(!fn(arr[i], i, arr)){
            return false;
        }
    } 
    return true;
}

function callBack(el){
    return typeof(el) === "number";
}

console.log(every([2, 5]), callBack);