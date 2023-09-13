// How to singleton object

const tinderUser = new Object() // This is singleton object
//const tinerUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    eamil: "some@email.com",
    fullname: {
        userfullname:{
            firstname: "shivam",
            lasrname: "chauhan",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 2,
        email: "shiva@gmail.com"
    },
    {
        id: 3,
        email: "shivam@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));