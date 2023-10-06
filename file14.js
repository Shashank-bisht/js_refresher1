// functions declaration->we declared a function

// function sumTwonumbers(num1, num2){
//     return num1 + num2;
// }
// let x = sumTwonumbers(5,6);
// console.log(x)

// to check even or odd

// function iseven(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false
// }
// console.log(iseven(5))

// or
// function iseven(num) {
//     return num % 2 === 0;
// }
// console.log(iseven(6))


// input ->any string , output-> first character
// function firstch(x){
//     return x[0];
// }
// console.log(firstch("shanky"));


// to find target 

function findtarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return "nothing";
}
const myarray = [1, 2, 3];
let x = findtarget(myarray, 3);
console.log(x);

// function expression->used function inside a variable
// different ways of writing function

// const iseven = function (num) {
//     return num % 2 === 0;
// }
// console.log(iseven(4))

// arrow function ==> function keyword hata kai arrow laga do

// const isEven = (number) => {
//     return number % 2 === 0;
// }
// console.log(isEven(8))

// shotest form of arrow function

// const isEven = number => number % 2 === 0;
// console.log(isEven(8));