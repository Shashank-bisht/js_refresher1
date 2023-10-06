// parameter destructuring

// const info = {
//     firstname:"shashank",
//     lastname:"bisht",
//     age:"18"
// }
// console.log(info.firstname)
// using destructuring

// function details({firstname,lastname,age}){
//     console.log(firstname);
//     console.log(lastname)
//     console.log(age);
// }
// details(info);


// callback function
// function myfunc(){
   
//     console.log("hello world!");
// }
// function myfunc2(name){
//     console.log(`your name is ${name}`)
// }

// myfunc(myfunc2("shank"));

// or above code can be written as using callback 
// function myfunc(callback){
//    callback("shanky")
//     console.log("hello world!");
// }
// function myfunc2(name){
//     console.log(`your name is ${name}`)
// }

// myfunc(myfunc2);


// function returning function->means function returning a other function

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans = myFunc();
console.log(ans());

// or
// function myFunc(){
//     return function(){
//         return "hello world"
//     };
// }
// const ans = myFunc();
// console.log(ans());
// ans eak function ban gaya


