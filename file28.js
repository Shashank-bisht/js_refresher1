
// const user = {
//     firstName : "shashank",
//     lastName : "bisht",
//     email : "shashank.fjjf",
//     age : 18,
//     address : "house no., gali no,",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old `
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }

// console.log(user.firstName)
// const x= user.about()
// console.log(x)

// Object.create use 

// const obj1 = {
//     key1: "one",
//     key2: "two"
// }

// const obj2 = {
//     key3: "three"
// }

// console.log(obj2.key3)
// but if we want key1 from obj2 we can use Object.create

// const obj2 = Object.create(obj1);
// obj2.key3 = "three";
// console.log(obj2.key3)
// console.log(obj2.__proto__);

// __proto__ and [[prototype]] are same but prototype is different

// console.log(obj2);

// [[prototype]] means uskai andar eak or object hai and 
// can access value if not avilable in current object 