// primitive and reference data type

// in primitive each value is stored in stack in different location

// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is",num1);
// console.log("value of num2 is",num2);
// num1+=1;
// console.log("after increasing num1");
// console.log("value of num1 now is ",num1);
// console.log("value of num2 now is ",num2);

// reference types --->array
// in reference type it use same address to execute
// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push("item3");

// console.log("after adding element to array1")

// console.log("array1",array1);
// console.log("array2",array2);

// array cloning or concatinate

// let array1 = ["item1","item2"];
// let array2 = array1.slice(0).concat(["item3","item4"]);

// .concat is used to connect two arrays
// let array2 = ["shanky","bisht"].concat(array1);
// console.log(array2)

// new method-->spread operators
// let onemoreArray = ["item3","item4"]
// let array2 = [...array1,"item3","item4",...onemoreArray];
// console.log(array2)
// array1.push("item3");

// console.log(array1===array2);

// console.log("false means that we have prepared clone successfully")

// console.log(array1)
// console.log(array2)

// for loop in arrays 
// let fruits = ["apple", "banana", "orange"]
//to store elements in an array
// let fruits2 = []
// for (let i = 0; i < fruits.length; i++) {
//     fruits2.push(fruits[i].toUpperCase());
    
// }
// console.log(fruits2);

//const for creating array
// we can use push and pop if array is declared using const

// const fruits = ["apple","mangoes"];
// fruits.push("kalu");
// console.log(fruits)


// while loop in array
// const fruits = ["apple","mango","grapes"];
// const fruits2 = []
// i=0
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);



// # important

// for of loop = only works in iteralble object
// const fruits = ["apple","mango","grapes"];
// for(let fruit of fruits){
//     console.log(fruit)
// }

// for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.


// for in loop --.it give index in arrays

// const fruits = ["apple","mango","grapes"];
// for(let index in fruits){
//      console.log([index]);
//     console.log(fruits[index])
// }

