class Pet {                                                                                                 // pet class
    constructor(name, age, type , breed, colour, time){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}


class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastmeds = time;
    }
    giveMeds (time) {
        this.lastmeds = time;
        return `last meds updated to: ${this.lastmeds} for ${this.name} and last feed updated to: ${this.lastFed}`
    }
}


const bella = new Pet ("Bella", 2, "Lion", "GS", "B&T", "08:00");
console.log(bella.feedPet("15:00"));

const bingo = new Pet ("Bingo", 5, "Rat", "Rex", "Grey", "12:00");                                           // New instance
console.log(bingo.feedPet("17:00"));

const mya = new PetMeds ("Mya", 5, "Hamster", "Guinea", "Brown", "14:00", "16:00");                                           // New instance
console.log(mya.giveMeds("19:00", "20:00"));