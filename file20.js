// map function-> it gives new array
// map function kai andar eak or function hota hai
const numbers = [3,5,2,1,4];

// const square = function(number){
//     return number*number;
// }

// console.log(numbers.map(square));


// using foreach method
var newnumbers = [];
function square(number){
    newnumbers.push(number*number);
}
numbers.forEach(square);
console.log(newnumbers)
// console.log(numbers)

// or we can define a function directly inside map method
// console.log(numbers.map((number) => number * number));

// or

// const squarenumber = numbers.map(function(number){
//     return number*number;
// });
// console.log(squarenumber)

// const squarenumber = numbers.map((number,index)=>{
//  return `index: ${index}, ${number*number}`;
// })
// console.log(squarenumber);



// or using arrow function

// const squarenumber = numbers.map((number)=>{
//     return number*number;
// })
// console.log(squarenumber);


// const person = [
//     { firstname: "shashank", age: 18 },
//     { firstname: "sarika", age: 15 },
// ]

// const username = person.map((user) => {
//     return user.firstname;
// });

// console.log(username)




// filter method
//the filter() method is a built-in array method that is used to create a new array containing elements from the original array that satisfy a specified condition.

//It doesn't modify the original array; instead, it returns a new array with the filtered elements.

// const numbers = [1,2,3,4,5];
// const isOdd = function(numb){
//     return numb%2!==0;
// }
// console.log(numbers.filter(isOdd))

// or using arrow function

// const evennumbers = numbers.filter((num)=>{
//     return num%2===0;
// })
// console.log(evennumbers);






// to access name and storing it in the array

var arr = [{id:1, name:"shnaky"},{id:2, name:"hapd"},{id:3, name:"sjlfdks"}]

var ne = function(me){
    return me.name
}
// console.log(me.name)
console.log(arr.map(ne))
// console.log(arr)