// hoisting
// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, even before the code is executed. This means that you can use variables and functions in your code before they are formally declared in the source code

// this can only be happen in javascript in function expression

// hello();
// function hello(){
//     console.log("hello world");
// }
// but it cannot happen in function declaration

// hello();
// var hello = function(){
//     console.log("hello world")
// }
// error will come

// function inside function
function app() {
    
    const myFunc = () => {
        console.log("hello from my func")
    }
    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    const into = (num1, num2) => num1 * num2;
    myFunc();
    console.log(into(2, 3))
    console.log("inside app");
    console.log(addTwo(5, 6))
}
app();