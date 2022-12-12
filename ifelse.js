let hunger = "full"

if (hunger == "hungry") {
    console.log("Yes please I'm starving!")
}
else if (hunger == "full") {
    console.log("No thanks, I'm stuffed!")

}
else{
    console.log("oh go on then, why not!")

}
//




let music = "classical"
// if you change the variable to "disco" it changes the output message on terminal -   ACTIVITY 1

if (music == "classical") {
    console.log("oh, how relaxing")
}
else if (music == "disco") {
    console.log("Its a party in here!")
}
else{
    console.log("I do not like this music!")
}
//

if (4  === "4") {
    console.log(true)
}
else{
    console.log(false)
}
// (== means 'or')
//(&& means 'and')

// Activity 2

  let food = "waffle"
  let hunger2 = "full"

  if (hunger2 == "full" && food == "waffles"){
    console.log("od course, who wouldn't")
  }
  else if (hunger2 == "hungry" && food == "waffle") {
    console.log("Yes please I'm starving, could I also have a pizza")
  }
  else if (hunger2 == "hungry" && food == "sprouts") {
    console.log("EWW disgusting")
  }
  else{
    console.log("No thanks,I'm stuffed")

  }



// Activity 2 CONT.? and Activity 3 (add Age and Country)

let food3 ="ice cream"
let hunger3="full"
let country = "uk"
let age = "20"                                                                        //CHANGING THIS STRING ALSO CHANGES STATEMENTS OUTPUT IN TERMINAL
if (age >= 18 && country =="uk"){
    console.log("yes i can serve you as you are 18+")
}
else {
    console.log("you cannot be served as you are underage")
}
if (hunger3 == "full" && food3 =="ice cream"){
    console.log("of course, who wouldnt, but you still can't have alcohol")
}
else if (hunger3 =="hungry" && food3 =="ice cream"){
    console.log("yes please im starving, could i also have a pizza")
}
else if (hunger3 =="hungry" && food3 =="sprouts"){
    console.log("actually, i can wait")
}
else{
    console.log("no thanks, im stuff")
}




//Activity 2 CONT.?


let food4 = "pizza"                                                   // THIS CAN BE CHANGED AND ANSWER ON TERMINAL OUTPUT MIGHT CHANGE                                     

if (food4 == "ice cream" || food4 == "pizza") {
    console.log("Yay let's eat!!!")
}
else if (food4 == "sprouts" || food4 == "brocolli") {
    console.log("Ugh, no thanks")
}
else {
    console.log("Okay, go on then why not.")
}




//Activity 2 CONT.?


let food5 = "pizza"

switch(food5){
    case "ice cream":
    case "pizza":
        console.log ("Yay, let's eat")
        break
    case "sprouts":
    case "brocolli":
        console.log ("Ugh, no thanks")
        break
    default:
        console.log("Okay, go on , why not")
    
}




//Activity 2 CONT.?

let age2 = 16
let country2 = "UK"
if (age2 > 17 ) {
console.log("Here is your whiskey") }
else {
    console.log(" you are underage and can't be served this drink!")
}


//Activty 4:

let topping = "pepperoni"

switch(topping) {
    case "pepperoni":
    case "chicken":
    case "Ham":
    console.log("These are import ingredients for my pizza!")
    break
    case "sausage":
    case "Sweetcorn":
    console.log("I dont mind having ${topping} on my pizza")
    break
    default:
        console.log("${topping} should not be on a pizza")}




// Activity 5: Password

password = "hdcpyt"
length = password.length;

if (length <8) {
    console.log("Password is too short please try again!")
}
else{
    console.log("Password is great!")
}
