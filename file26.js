// clone using object.assign or spread operators
// memory
// const obj = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = {...obj};
// const obj2 = Object.assign({},obj);
// obj.key3 = "value3";
// console.log(obj)
// console.log(obj2)

// optional chaining

// const user = {
//     firstName: 'shashank',
// address: {housenumber: "718"}
// }

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber)

// if we will not use questionmark then error will come

// methods->function inside objects
// yaha par this eak pura object hai

const person = {
    firstName : "shany",
    age : 8 ,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
}
person.about();

// function personInfo() {
//     console.log(`person name is ${this.firstName} and age is ${this.age}`)
// }

// const person1 = {
//     firstName : "shanky",
//     age : 18,
//     about : personInfo
// }
// person1.about();