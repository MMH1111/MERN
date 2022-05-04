const Ninja = require("../Assignments- Practice/ninja.js")

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=100){
    //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        super(name);
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
        this.wisdom=wisdom;
    }
    showStats(){
        console.log(`${this.name},${this.health},${this.speed},${this.strength},${this.wisdom}`);
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Wise message: Drink more sake for your health.");
        }
}

const sensei1 = new Sensei("Splinter", 300, 15, 10, 250);
//Expected Output: Name:Splinter, Health:300, Speed:15, Strength:default value of 10, Wisdom:350
sensei1.showStats();
// const sensei2 = new Sensei("Master Roshi");
// sensei2.speakWisdom();
// console.log(sensei1.wisdom);
// sensei2.showStats();