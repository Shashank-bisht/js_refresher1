// important array methods
// use of for each

// const numbers = [4,3,5,2];

// function myfunc(number, index){
//     console.log(`index is ${index} number is ${number}`)
// }
// for (let i = 0 ; i<numbers.length; i++){
//     myfunc(numbers[i],i);
// }

// using forEach

// numbers.forEach(myfunc);

// using annanomous function

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// })

// in foreach first parameter is value and second parameter is index

const person = [
    {firstname:"shashank", age:18},
    {firstname:"sarika",age:15},
]
person.forEach(function(x,y){
    console.log(x.firstname,y);
});

for(let x of person){
    console.log(x.firstname);
}

// //using arrow function

// person.forEach((x,index)=>{
//     console.log(x.firstname, index);
// })