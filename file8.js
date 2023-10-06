//array destructuring 
const myArray = ["value1","value2"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myvar1 is ",myVar1);
// console.log("value of myVar2 is", myVar2);

// shotcut ->it will reduce line 3 and 4 
// let [myVar1,myVar2,myVar3] = myArray;
// console.log("value of myVar1",myVar1);
// console.log("value of myVar2",myVar2);
// console.log("value of myVar3",myVar3);

// if we want to store other variable in other array
// then we use ...
const xyz = ["val1","val2","val3"];

// kal mai val1 and kalu mai val2 and val3 chali jaygi

let [kal,...kalu] = xyz;
console.log(kal)
console.log(kalu)