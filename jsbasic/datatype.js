// two type (primitive datatype & non-primitive datatype)

// primitive   (call by value) the changes you made in these datatype
// changed in copy not in actual value

// 7 types : String, Number,Boolean ,  Null, undefined, symbol(advance js and node and react), BigInt

// js is dynamic language or static type language??

// SYMBOL
const id = Symbol('123') // datatype will be symbol..
const anotherId = Symbol('123')

console.log(id=== anotherId) // false


// refrence type(non-primitive datatype)
// (directly allocated)

// ex... Array , Objects , Functions
// Array
const heros =["shaktiman", "hanuman","flyingjat"];

// object
let myObj = {
    name:"Arav",
    age:24
}
// Function
 const myfunction = function(){
    console.log("hello Abhishek");
 }
 // for finding datatype of anything is (typeof) function
 
 console.log(typeof myObj);
 console.log(typeof id);

 // null ka datatype by typeof function is OBJECT******
