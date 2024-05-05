// const tinderUser = new Object(); //singleton obj

const tinderUser = {}//non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullName: {
        userfullname:{
            firstName:"pappu",
            lastName:"chappu",
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {
    1:"a", 2:"b"
}

const obj2 = {
    3:"a", 4:"b"
}

// const obj3 = {obj1 , obj2} // obj2 is stored inside target obj1 (that's sometimes not preferable)
// const obj3 = Object.assign({},obj1,obj2) //read mdn docs for .assign in js object , {} is target and obj1 and obj2 are stored inside {} 
// console.log(obj3);

const obj3 = {...obj1 , ...obj2}//modern way of doing above things
// console.log(obj3);

const users = [
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:1,
        email:"g@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename:"Js in hindi",
    price:"666",
    courseInstructor:"chai aur code"
}

// course.courseInstructor

const {courseInstructor : instructor} = course//destructuring

console.log(instructor);



//JSON
// {
//     "name":"vedant",
//     "coursename": "js",
//     "price": "free"
// }


