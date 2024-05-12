// conversion confusion
console.log(45)

let score = "55abc"
 console.log(typeof score)
 console.log(typeof(score))

 let numberValue = Number(score)// converting datatype if score into number

 console.log(typeof numberValue)
 console.log(numberValue)

 // "33" => 33
 // "33anc" => NaN
 // "true" => 1 ; "false" =>0
 // null => 0
 // etc....
 let someNumber = 45
 let stringNumber= String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)


