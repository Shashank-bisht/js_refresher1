// prototype
// in js function can be used as function and object as well

// JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object


// to get name of function

// function hello(){
//     console.log("shanky is a programer");
// }
// console.log(hello.name);

// you can add key value pair in a function

// hello.game = "pubg"; 
// console.log(hello.game) //here function is acting as an object

// prototype is a kind of empty object in a function

// proof that prototype is present in a function

// function hello() {
//     console.log("hello world")
// }

// object do not have prototype

// const hello = {key2:"value2"}

// if (hello.prototype) {
//     console.log("prototype is present ")
// } else {
//     console.log("not present")
// }



// function hello() {
//     console.log("hello world")
// }
// to add property

// hello.prototype.game = "bgmi";
// hello.prototype.nickname = "shanky";
// hello.prototype.channel = function(){
//     return "lazyshanky";
// }
// console.log(hello.prototype);
// console.log(hello.prototype.channel());