// GIVEN
console.log(example);
var example = "I'm the example!";
/*
AFTER HOISTING BY THE INTERPRETER
*/
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//Below code will throw a "ReferenceError: Cannot access 'example' before initialization."
console.log(example);
let example = "I'm the example!";    

console.log("------------------------------------------------------------");
// 1) - will throw an "undefined" runtime error
console.log(hello);                                   
var hello = 'world'; 

//REVISED - Expected Output = world
var hello = 'world'; 
console.log(hello);                                   

console.log("------------------------------------------------------------");
// 2) - will output: magnet
var needle = 'haystack';
// test();
function test(){
    var needle = 'magnet';
    // console.log(needle);
}
test();
console.log(needle);

//REVISED - Expected Output = magnet <br> haystack
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
    return(test);
}
test();
console.log(needle);

console.log("------------------------------------------------------------");
// 3) - will output: super cool
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//REVISED - Expected Output =

console.log("------------------------------------------------------------");
// 4) - will output: chicken <br> half-chicken
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//REVISED - Expected Output =

console.log("------------------------------------------------------------");
// 5) -- will throw TypeError: mean is not a function
// mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
// console.log(food);

//REVISED - Expected Output =

console.log("------------------------------------------------------------");
// 6) -- will output: undefined --> rock --> r&b --> disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//REVISED - Expected Output =

console.log("------------------------------------------------------------");
// 7) -- will output san jose -> seattle -> burbank -> san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//REVISED - Expected Output =
console.log("------------------------------------------------------------");
// 8) -- will throw a TypeError: Assignment to constant variable
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//REVISED - Expected Output =

console.log("------------------------------------------------------------");