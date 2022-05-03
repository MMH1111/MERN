const Fighter = require("./fighter");

class Samus extends Fighter{
    constructor(){
        super("Samus",7,7,3,"yellow");
        this.charged = false;
    }
//Example of polymorphism. Special unique to Samus and different from constructor defined in Fighter class in fighter.js file.
    special(opponent){
        if(opponent instanceof Fighter){
            if(this.charged){
                this.charged=false;
                const dmg = 40;
                opponent.percentage+=dmg;
                console.log(`${this.name} fired her laser at ${opponent.name} and dealt ${dmg}% !!!`)
            }
        else{
            this.charged=true;
            console.log(`${this.name} is charging up her laser!`);
        }
        }
    }

class Mario extends Fighter{
    constructor(){
        super("Mario",5,5,4,"red");
        this.superAttacks = 0;
    }
    special(opponent){
        if(opponent instanceof Fighter && this.superAttacks < 1){
            this.superAttacks=4;
            this.weight *= 2;
            this.strength *= 3;
            console.log(`${this.name} ate a super mushroom and grew twice his size. Now his attacks are way stronger.`)
        }
    attack(opponent){
        super.attack(opponent);
        if(this.superAttacks<1
        this.superAttacks--;
        
    }
    }
}
}

const sora = new Fighter("Sora", 3, 6, 5, "red");
const samus = new Samus();

samus.attack(sora);
console.log(sora);
samus.special(sora);
console.log(sora);