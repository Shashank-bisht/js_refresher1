// reduce method

// const numbers = [1,2,3,4,5];

//  const sum = numbers.reduce((accumulator,currentvalue)=>{
// return accumulator + currentvalue
// })

// console.log(sum)

// reallife example 

const usercart = [{ productid: 1, productname: "powerbank", price: 1200 },
{ productid: 2, productname: "laptop", price: 60000 }]

const totalamount = usercart.reduce((totalprice, currentproduct) => {
    return totalprice + currentproduct.price;
}, 0)

// here 0 is initial value we have provided
console.log(totalamount)



// sort method=>it changes original array

// const numbers = [20,4,5,1,7]
// y= numbers.sort()
// console.log(y)
// it will not sort in ascending order


// to get in ascending order 
// numbers.sort((a,b)=>{
//     return a-b;
// })

// console.log(numbers)

//to get in descending order use b-a 


// price low to high
// we use slice so that product do not change
const products = [{productid:1,productname:"p1",price:500},
{productid:2,productname:"p2",price:50},
{productid:3,productname:"p3",price:580}]

const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
})
console.log(lowtohigh);