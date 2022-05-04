/*
TEMPLATE
console.log("--------------")
console.log("Problem #")
console.log("--------------")
ENTER CODE HERE
console.log("--------------")

//

*/

//
console.log("--------------")
console.log("Problem 1")
console.log("--------------")
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output -- Tesla <br> Mercedes
console.log(randomCar)
console.log(otherRandomCar)
console.log("--------------")

//
console.log("--------------")
console.log("Problem 2")
console.log("--------------")
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output -- RUNTIME Error, because name is not defined
console.log(name);
console.log(otherName);
console.log("--------------")

//
console.log("--------------")
console.log("Problem 3")
console.log("--------------")
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output -- 12345 <br> undefined
console.log(password);
console.log(hashedPassword);
console.log("--------------")

//
console.log("--------------")
console.log("Problem 4")
console.log("--------------")
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output -- false <br> true
console.log(first == second);
console.log(first == third);
console.log("--------------")

//
console.log("--------------")
console.log("Problem 5")
console.log("--------------")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output -- [1, 5, 1, 8, 3, 3] <br> 1 <br> 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log("--------------")

//
