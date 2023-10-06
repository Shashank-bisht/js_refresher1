// console.log(this)
// "use strict"
// function myFunc(){
//     console.log(this);
// }
// myFunc();


// call,apply,bind method
// call
// function about(hobby, favgame){
//     console.log(this.firstname,this.age,hobby,favgame)
// }
// const user1 = {
//     firstname : "shashank",
//     age : 18,
// }
// const user2 = {
//     firstname : "sarika",
//     age : 15,
// }

// about.call(user2,"gaming","pubg")
// apply or call mai jada difference nahi hai
// about.apply(user1,["gaming","bgmi"])

// bind eak function mai store karta hai taki we can use it in future
// const shank = about.bind(user2,"cricket","coc");
// shank();

// warning while using this 

// const user1 = {
//     firstname : "harshit",
//     age : 8,
//     about : function(){
//         console.log(this.firstname,this.age);
//     }
// }

// user1.about(); // no error but to store in other variable we use bind

// const myFunc = user1.about();
// myFunc();// error will come here

// const myFunc = user1.about.bind(user1);
// myFunc();