// for of

["","",""]

[{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = " Hello WOrld!"
// for (const greet of greetings) {
//     console.log("Each word :"+greet);
// }

//Maps
// no duplicate , uses ordered key value pair
const map = new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR',"france")
map.set('FR',"france")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,' : ', value);
}


const myObj = {
    'game1' : 'NFS',
    'game2' : 'BGMI'
}
// for (const [key,value] of myObj) {
//     console.log(key,' : ', value);
// }
