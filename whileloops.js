

let lives = 3
while (lives > 0 ){
    console.log("well done! You are still in the game.")
    lives--
}

console.log(`Game over !!!`)

//while loop method - if user has between 1-3 lives left give message 'well done' or less than 0 give message 'game over'?


let currentDiceRoll = 3
while(currentDiceRoll != 1){
    //(!=)  Means NOT EQUAL TO 
    console.log(currentDiceRoll)
    currentDiceRoll = Math.floor(Math.random()*6)+1

}

console.log(currentDiceRoll)
//




//Create a while loop that checks age. While age is less than 18 log “You’re a child!”. When age is more than 18 log “You’re an adult!”- Activity 3
