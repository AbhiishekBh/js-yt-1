// you can denote strings by single quote or by double (''  "");
const name ="abhishek";
const subject = "javascript";
const repoCount = 50;
console.log(name + repoCount + "bhati")
// this way of writing strings doesn't give good sense

// so we use backtags in strings  (``)...
// this is called strings interposition...
// you make placeholders in that .... ${}.... where you can put value


console.log(`hello my name is ${name} and my work is learning ${subject} `);
console.log(`hello my name is ${name} and my work is learning ${subject} `);

// you can create string by that way also and you get many cool things by that

const nameTwo = new String("Abhishek");
console.log(nameTwo.length);
console.log(nameTwo[0]);
console.log(nameTwo.toUpperCase());

const newString = nameTwo.substring(0, 5);
console.log(newString)

const newString2 = nameTwo.slice(-7, 5);// youcan give neagtive value in slice only

console.log(newString2)

// trim and also replace two impotant method of strings used in manyplace when you work
// include will detect if that thing is include or not
///

/// follow backtag method and find out other methods of strings and do some research and learn about that

