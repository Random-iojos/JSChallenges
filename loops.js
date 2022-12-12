let todaysDate = new Date ()
console.log (`Hello Boss, the time is ${todaysDate}`)
//      --MY CUSTOMISED WELCOME MESSAGE--


let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain",
]
for (let f = 0; f < favHolidayDestinations.length; f++){
    console.log(favHolidayDestinations[f])

}

// Loops helps to repeat tasks over and over.

//for (let f = 0; f < favHolidayDestinations.length; f++){
    //console.log(favHolidayDestinations[f]) }                    -  SELECTS STARTING POINT FROM WHICH ITEM ON THE LIST SHOULD START PRINTING ON THE TERMINAL?

    // DEPENDING ON THE NUMBER GIVEN E.G. 0; WILL SELECT THE STARTING POINT



for (let i = 0; i <= 10; i++){
    console.log(i += 2)

} 
// you don't need arrays to use loops

let evenNumbers = []

for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        (evenNumbers.push(n))
        
    }
}
console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)
// If the remainders of a number divided by 2 equals 0 then push it to the even numbers array
//if (n % 2 == 0)
//Push methods pushes things into the array
//even numbers 2,4,6,8,10,12,14,16


let revEvenNumbers = []
for (let n = 20; n > 0; n--){
    if (n % 2 == 0) {
        (revEvenNumbers.push(n))
        
    }
}
console.log(`The even numbers between 20 and 0 are; ${revEvenNumbers}`)


let oddNumbers = []
for (let n = 1; n < 30; n++){
    if (n % 2 == 1) {
        (oddNumbers.push(n))
        
    }


}
console.log(`The odd numbers between 1 and 30 are; ${oddNumbers}`)
//METHOD FOR ODD NUMBERS  if (n % 2 == 1)

