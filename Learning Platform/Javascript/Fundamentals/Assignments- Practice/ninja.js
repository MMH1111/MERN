//Step 1) Create a Ninja class
class Ninja{
    constructor(name, health=100, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(`${this.name}`);
    }
    showStats(){
        console.log(`${this.name},${this.health},${this.speed},${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
//Example Outputs
const ninja1 = new Ninja("Hyabusa",200);
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

module.exports=Ninja
/*
Assignment Instructions
Create a Ninja class
add an attribute: name
add an attribute: health
add a attribute: speed - give a default value of 3
add a attribute: strength - give a default value of 3
add a method: sayName() - This should log that Ninja's name to the console
add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
add a method: drinkSake() - This should add +10 Health to the Ninja
*/