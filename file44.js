// promise

console.log("script start")
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']

const friedricepromise = new Promise((resolve, reject) => {
if(bucket.includes("vegetabes"))
resolve("fried rice")
else{
    reject("couldn't find")
}
})

friedricepromise.then((myrice)=>{
console.log("lets eat", myrice)
}).catch((error)=>{console.log(error)})

for(let i=0; i<100; i++) {
    console.log(i)
}
console.log("script end")