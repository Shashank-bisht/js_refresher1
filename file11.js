// ways to iterate objects 
const person = {
    name: "shashank", age: "18",
     "shanky hobbies": ["games", "money"]
        }
        // for in loop
  for(let key in person){
      console.log(`${key} -> ${person[key]}`)}
    //   or
//     console.log(key,":",person[key]);
//   }      


// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj)
// or 
// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);


