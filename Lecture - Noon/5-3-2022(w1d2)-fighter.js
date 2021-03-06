class Fighter{
    static count = 0;
    constructor(name, weight, strength, speed, color, playerNum = 1){
        //weight,strength,speed = 1-10
        this.name=name;
        this.percentage=0;
        this.weight=weight;
        this.strength=strength;
        this.speed=speed;
        this.color=color;
        this.playerNum=++Fighter.count;
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            opponent.percentage += this.strength;
            console.log(`${this.name} attacked ${opponent.name} and dealt ${this.strength}% damage!!!`);
        }
    }

    special(opponent){
        if(opponent instanceof Fighter){
            opponent.percentage += this.strength*this.weight;
            console.log(`${this.name} performed a special on ${opponent.name} and dealt ${this.strength * this.weight}% damage!!!`);
        }
    }
}

module.exports = Fighter;

// const sora = new Fighter("Sora", 3, 6, 5, "red");
// const yoshi = new Fighter("Yoshi", 3, 5, 6, "green");

// yoshi.special(sora);
// console.log("This is the characters' file.");
// console.log(sora);