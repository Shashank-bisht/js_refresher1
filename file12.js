// spread operators in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1: "valueunique",
    key3: "value3",
    key4: "value4",
};
const newObject = {...obj1,...obj2, shanky:"hacker"};
// you can also add new key value pairs
console.log(newObject);

// objects inside arrays

const users = [
    {userId: 1 , firstname: "shanky" , gender: "male"},
    {userId: 2 , firstname: "raju" , gender:"female"}
]
for(let x of users){
    console.log(x.firstname,x.gender);
    
}