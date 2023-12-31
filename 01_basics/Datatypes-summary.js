// Primitive datatype

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score  = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 344523426452774272n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", 
"naagraj", "doga"];
let myObj = {
    name: "shivam",
    age: 22,
}
 
const myFunction =  function(){
    console.log("HEllo World");
}

console.log(typeof bigNumber);


// ++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "TheCinephileShow"

let anothername = myYoutubename
anothername = "Shivansh"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user1@google.com",
    upi: "user1@paytm"
}

let userTwo = userOne

userTwo.email = "shivam@google.com"

console.log(userOne.email);
console.log(userTwo.email);