//Arrow function

const holidayDestination = () => {
    console.log("Yay! I'm going on holiday ? ")
}

holidayDestination()                            //call function - will show now on the terminal



const sayHello = (name, drink) => {
    console.log(`Hey, how are you ? How do you spell your name? ${name} and what would you like to drink now?  ${drink}`)
}                          

sayHello("John", "Pepsi")



// My own examples

const holidayDestination2 = (country, month , day) => {
    console.log(`YAY! I'm going on holiday to ${country} in ${month} on the ${day}th. I can't wait. `)
}

holidayDestination2("Spain" , "April" , "14")




// Using return function to calculate
const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(multiply(2, 5))



// DECLARATION FUNCTION
function addMe(num1, num2) {
    return num1 + num2
}

console.log(addMe(4,5))
//Functions can call on other functions




//Higher Order Function below.                       Activities
const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}
const greet = (time, fn) => {
    if (time < 1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
        fn("Evening");
    }

}

greet(1400, whichGreeting);




//Higher Order Function Activity 1

const hello = "Hello Code Nation"

function hello5(){
    for (let i = 0; i <= 5; i++){
        if(i < 5){
            console.log(hello);
        }
    }
}



hello5();


// Higher Order Function Activity 2

let numbers = [1, 4, 87, 12, 54];

const num3 = numbers.map(myFunction)

function myFunction(num) {
    return num * 3;
}

console.log(num3)