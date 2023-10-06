// closures

// function can return other function

// function outerfunction(){
//     function innerfunction(){
//         console.log("inside inner function")
//     }
//     return innerfunction
// }
// const ans = outerfunction();
// console.log(ans);
// ans();


// function printFullname(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName)
//     }
//     return printName;
// }

// const ans = printFullname("shashank","bisht");
// ans();


// example of closure function

// function hello(x){
//     const a = "var1";
//     const b = "var2";
//     return function(){               // it will use lexical scope
//         console.log(a,b,x);  
//     }
// }
// const ans = hello("arg");
// ans();


// function myfunction(power){
//    return function(number){
//        return number ** power
//    }
// }

// or using arrow function

// const myfunction = power => number => number ** power

// const square = myfunction(2)
// const ans = square(3);
// console.log(ans)

