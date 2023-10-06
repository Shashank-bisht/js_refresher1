// object destructuring ->to unpack objects in variables

const wwestars = {
    star: "khali",
    move: "bigboot",
    foundation: "1990",
};
// we can change name of star by var1 using colon after star
let { star: var1, move: var2, ...chamar } = wwestars;
console.log(var2);

// to store rest objects in other variable we use ...
// console.log(chamar)

// nested destructuring

const users = [
    { userId: 1, firstname: "shanky", gender: "male" },
    { userId: 2, firstname: "raju", gender: "female" },
]

const [{firstname:nickname,userId:id,gender},{gender:g}] = users;
// console.log(firstname)
console.log(gender)
console.log(nickname);
console.log(id);
console.log(g)

// to change varible name we use colon after the variable we have to change 