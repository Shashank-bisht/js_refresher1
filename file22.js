// find method

// const myArray = ["hello", "cate", "dog"];

// length3 is a callback function that takes a string as an argument and returns true if the string is equal to 3

// function Length3(string) {
//     return string.length === 3;
// }

// const ans = myArray.find(Length3);
// console.log(ans)



// using arrow function 

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

//or 

// console.log(myArray.find((string)=>string.length===3))

// const user = [
//     { userid: 1, username: "shashank" },
//     { userid: 2, username: "raman" },
//     { userid: 3, username: "aman" }
// ];

// const myuser = user.find((x) => x.userid === 3);
// console.log(myuser);


// every method

// const numbers=[2,4,6,8,1];

// const ans = numbers.every((number)=>number%2===0);
// console.log(ans)

const products = [{ productid: 1, productname: "p1", price: 500 },
{ productid: 2, productname: "p2", price: 520 },
{ productid: 3, productname: "p3", price: 580 }]

const lowvalue = products.every((value) => value.price < 620);
console.log(lowvalue)