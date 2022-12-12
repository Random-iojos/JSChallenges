//Objects are containers that can store data and functions.

const person = {
    firstName: "Savannah" ,
    lastName: "Goodie" ,
    age: 24,
    Occupation: "Realtor",
    Married:     false,
    HomeOwner: false,
    hobbies: [`Eating`, `running`, `Tiktok dances`]
}                                                                                                              // ACTIVITY 1
Object.property                                                                                                // All data stored in the container/all property of the object.
person.firstName                                                                                               // Data stored e.g. variables and strings.
console.log(person.firstName)                                                                                  // How to run/show output data in the terminal.
console.log(person["Occupation"])                                                                              // Another method to run specific data to the terminal.



const pet = {                                                                                                  // MY own example of objects
    petName : "Charlie",
    typeOfPet : "Dog",
    age :12,
    colour: "Brown",
    adopted : true,
}
Object.property
pet.petName
pet.adopted 
pet.colour
console.log(pet.adopted)
console.log(pet.typeOfPet)




let day = "Monday"
const person2 = {
    firstName: "Sade" ,
    lastName: "Baggage" ,
    age: 30,
    Occupation: "Lawyer",
    Married:     true,
    HomeOwner: true,
    hobbies: [`Jog`, `Gossip`, `Drinking Wine`],
}   

if (day === "Saturday" || day === "Sunday") {                                                                            //ifelse condtitions/statemens
    console.log(`Great it's ${day}, let's play ${person2.hobbies[0]}!`)
}else{
    console.log(`Oh no! it's  ${day}. I hate being a ${person2.Occupation}!`)

}




const person3 = {
firstName: "Jeff" ,
lastName: "Tiny" ,
age: 35,
Occupation: "Receptionist",
Married:     false,
HomeOwner: true,
hobbies: [`Clubbing`, `Fishing`, `travelling`],
marketingOp (){                                                                                                       //Adding method to an object

    if (this.HomeOwner == false && this.age >25){
    return "Send mortgage offer email."
    }           
   else if (this.HomeOwner == false && this.age <25){
    return "Send Summer holiday fun credit card offer"
    }  
    else if (this.HomeOwner == true && this.age >25){
    return "Pension investment offer"
     }  
    else{
    return "Sorry not eligle for any available offer"
    } 

  }    
}
console.log(person3.marketingOp())
