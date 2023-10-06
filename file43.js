// callback function


function myfunc(callback) {
    console.log("function is doing task 1")
    callback();
}


// function myfunc2(){
//     console.log("function is doing task 2")
// }


// myfunc(myfunc2);

//or sidha myfunc kai andar he callback function bana do

myfunc(()=>{
    console.log("function is doing task 2")
})