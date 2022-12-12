console.log ("Hello Peoples")

// Operators- maths
let a = 5
a = a + 103
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

console.log(`The number of days since I was born  ${birthdate} till today ${todaysDate} are ${daysDifference1} days.

The Days to go until my next birthday which is on ${nextBirthday} counting from today ${todaysDate} are ${daysDifference2} days`)

//  Days to go until my next birthday- CODE ABOVE ^
