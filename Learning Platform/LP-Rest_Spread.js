//Rest/Spread -- Destructuring
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal] = animals;

//If we want the remaining animals, use a rest pattern at the end of the assignment
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
otherAnimals
// => ['fish', 'cat', 'bird']

//Objects
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// AFTER ES6
const { email } = person;
const [firstAnimal] = animals;
console.log(email);
// => bob@marley.com
console.log(firstAnimal);
// => horse

// With destructuring
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

// Specify exactly what you want to destructure, while also supplying a new variable name
const password = '12345';
const { password: hashedPassword } = person;

//Nested Destructuring
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

//Destructure addresses then destructure each address to get individual addresses as variables
const { addresses: [whiteHouse, sherlock] } = person;

//To skip the first address, and only get the city of the second but with alternate variable name
const { addresses: [ , { city: london }] } = person;
console.log(london);
// => London
//Using a comma above signifies it's an 'empty' first position and allows skipping that index
