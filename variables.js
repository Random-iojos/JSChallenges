console.log("Hello World")


let firstName ="John"
let age = 25
let universityStudent=true
// A variable is a container that holds data.

console.log(firstName)
console.log (age)
console.log (universityStudent)
// Function for running variable/javascript in terminal.
firstName = "Narnia"
console.log (firstName)

const lastName = "King"
// Const will not allow the current variable to be changed

console.log (lastName)
// Function for running variable/javascript in terminal.

let modelOfCar = "Volvo"
let occupation = "Software Engineer"
console.log(`Hi, my name is ${firstName}.  I'm a ${occupation} and I drive a ${modelOfCar}.`) 
// Command button and inward comma button to show this (``)


// Concatenation - Activity 2 

// Start Activity 3- Here (Write a code which stores what you may eat today for breakfast, lunch and dinner).

let breakFast = "Toast"
let luncH = "Pancakes"
let dinneR = "Pizza"

console.log (breakFast)
console.log (luncH)
console.log (dinneR)
console.log (`Hello, Today for breakfast I will eat ${breakFast}. For lunch I will be having ${luncH} and for dinnner ${dinneR}.`)

// Easy way to write a sentence on js with variables.
// End of  Activity 3- Here (Write a code which stores what you may eat today for breakfast, lunch and dinner).


// Operators- maths
let a = 5
a = a += 3
console.log(a)

// Start Activity 4- Here (Write code which will calculate how many days from today's date to your birthday.
// Days since my birthdate- DAYS Since I WAS BORN

let todaysDate = new Date ()
let birthdate = new Date ("1997-11-14")
let nextBirthday = new Date ("2023-11-14")
let timeDifference1 = todaysDate.getTime() - birthdate.getTime()  
let daysDifference1 = Math.floor(timeDifference1 / (1000*60*60*24))
let timeDifference2 = todaysDate.getTime() - nextBirthday.getTime()  
let daysDifference2 = Math.floor(timeDifference2 / (1000*60*60*24))

console.log(`The number of days since I was born  ${birthdate} till today ${todaysDate} are ${daysDifference1} days. The Days to go until my next birthday which is on ${nextBirthday} counting from today ${todaysDate} are ${daysDifference2} days`)

//  Days to go until my next birthday
//

// console.log(` The Days to go until my next birthday which is on ${nextBirthday} counting from today ${todaysDate} are ${daysDifference2} days`)
