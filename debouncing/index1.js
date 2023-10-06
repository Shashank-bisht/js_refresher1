// console.log("hello")
// some useful events 

let myinput = document.getElementById("input_event");
// console.log(myinput)

// keyup
// to get value user have typed

// myinput.addEventListener("keyup", ()=>{
//     console.log(myinput.value)
// })

// input 
// input event is much better than keyup event

// myinput.addEventListener("input", ()=>{
//     console.log(myinput.value)
// })

// change
// myinput.addEventListener("change", ()=>{
//     console.log(myinput.value)
// })

// or simple way 
// myinput.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })

// bhai yai function bhaut bar call ho raha hai to we 
// should use debouncing

// debounce is a decorator function
// decorator increase the functionality of a function

// some decorator concept

// function decorator(func) {
//     return function (){
//         console.log("you are calling decorated")
//         func();
//     }
// };

// function hello(){
//     console.log("hello world");
// }

// function hi(name){
//     console.log("hi", name);
// }

// const decorated = decorator(hello)
// decorated()

// hi("shanky")

// function debounce(func, delay){
//     let timeoutId;
//     return function(...args){
//         if(timeoutId){
//             clearTimeout(timeoutId)
//         }
//         timeoutId = setTimeout(()=>{
//         func.call(this,...args);    
//         },delay)
//     }
// }
// trailing debouncing
// const myinput = document.getElementById("input_event");

// function findSuggestion(e) {
//     console.log("suggestion for", e.target.value);
// }
// const decoratedfindsuggestion = debounce(findSuggestion, 3000);

// myinput.addEventListener("input", decoratedfindsuggestion)
// // this is trailing debouncing
// btn.addEventListener("click", debounce(clickme, 300))


// leading debouncing

// const btn = document.querySelector(".btn");
// console.log(btn)

// function leadingdbouncing(func, delay){
//     let timeoutId = null;
//     return function(...args){
//         if(timeoutId == null){
//             func.call(this, ...args);
//         }
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(()=>{
//             timeoutId = null;
//         }, delay)
//     }
// }
// function clickme(){
//     console.log("added to cart")
// }
// this is leading debouncing
// btn.addEventListener("click", leadingdbouncing(clickme, 300))