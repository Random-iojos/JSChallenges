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


class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;



    }
    get petInfo () {
        return `${this.firstName} is a ${this.type}, ${this.age} year (s) old`;
    }
    set fullName (name) {
        const array = name.split (``);
        this.firstName = array [0];
        this.surname = array [1];

    }
    get fullName() {
        return `${this.firstName} ${this.surname}`
    }

    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`
    }
    petColour (colour) {
        this.colour = colour;
        return `Colour for ${this.name} updated to ${this.colour}`
    }
    petBreed (breed) {
        this.breed = breed;
        return `Breed for ${this.name} updated to ${this.breed}`
    }
}
class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}`
    }
}

const clyde = new Pet("Clyde", 12, "zebra", "Cross-Collie", "Black & White", "09:00");
const bjornie = new PetMeds("Bjornie", 14, "Cat", "Girl Cat", "Grey", "11:00", "18:00");
const blue = new Pet("Blue", 16, "fish", "Nemo", "Gold", "10:00 , 11:30");

console.log(clyde.feedPet("15:00"));                                                                       //AllOWS THe code to be updated,changed and edited.
console.log(bjornie.feedPet("17:00"));
console.log(blue.petColour("Black, Brown and White"));
console.log(bjornie.petBreed("Tabby Mix"));
console.log(bjornie.giveMeds("12:00"));
