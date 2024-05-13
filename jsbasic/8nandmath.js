// number and maths


const score = 400;

const balance =new Number(700);
console.log(balance);
console.log(balance.toString()); // now it is a string
console.log(typeof balance);  // object
console.log(typeof(balance)); //object
console.log(balance.length); // undefined
console.log(balance.toString().length);  // 3
console.log(balance.toFixed(3));  //used while making e-commerce website
// to  fix (precision value) learn about it because the priorty is given before decimal


const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000
  

// +++++++++++++    Maths ++++++++++++

// many methods of maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.9));// 4
console.log(Math.random());  // gives random value between 0 and 1
