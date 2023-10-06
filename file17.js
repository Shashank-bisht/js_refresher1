// default parameters

// function addtwo(x,y){
//     if(typeof y==="undefined"){
//         y=0;
//     }
//     return x+y;
// }

// if we have not given second parameter
// console.log(addtwo(9));


// or
// shortcut

// function addtwo(a,b=0){
//     return a+b;
// }

// if we have not given second parameter then automatically b will get 0 value
// console.log(addtwo(9,7))



// rest parameters

// myfunc(1, 2, 3, 4, 5);
// c will get an array of numbers 3,4,5
// function myfunc(a, b, ...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c)
// }


let myfun = (a,b,...c)=> {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c)
}
myfun(1,2,3,4)



// sum of numbers using rest parameters

// using for in 
// in gives us index

function addAll(...numbers) {
    let total = 0;
    for (let num in numbers) {
        total = total + numbers[num];
    }
    return total;
}
console.log(addAll(1, 2, 3, 4, 5));



// using for of
// of gives us direct value

function addAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total = total + num;
    }
    return total;
}
console.log(addAll(1, 2, 3, 4, 5, 6));