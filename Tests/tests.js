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


console.log(multiply(2, 4, 5, 6));
console.log(multiply());



function reverseString(str) {
    return String(str).split('').reverse().join('');
}
    
reverseString('test');
reverseString('');
console.log(reverseString(null));
reverseString(undefined);
reverseString();



function getCodeStringFromText(str) {
    str = String(str).split('');
    let strng = "";
    for (word in str){
        strng = strng + " " + str[word].charCodeAt();
    }return strng.trim();
}

console.log(getCodeStringFromText("hello"));


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
console.log(guessTheNumber(5));

