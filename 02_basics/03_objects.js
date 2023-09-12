// singleton
// object.create

// object litrals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shivam",
    "full name": "Shivam Chauhan",
    [mySym]: "mykey1",
    age: "22",
    location: "Dehli",
    email: "shivamkumar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shivamkumar@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "shivamkumar@netflix.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());