//singleton 

// Object.create



//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"vedant",
    "fullName" : "Vedant Raval",
    [mySym]:"mykey1", //imp for interview watch lecture 3:56
    age: 20,
    location:"Gujarat",
    email:"vedant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","friday"],
}


// console.log(JsUser.email);
// // console.log(JsUser[email]);//wrong
// console.log(JsUser["fullName"]); //this is better than . method used in  jsUser.email
// console.log( JsUser[mySym]); //dont miss this; this how u access symbol

JsUser.email = "Vedant@openai.com"
// Object.freeze(JsUser)
JsUser.email = "Vedant@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());