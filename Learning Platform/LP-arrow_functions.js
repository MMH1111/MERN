//sayHello function assigned to a variable
var sayHello = function(name) {
  console.log('Hello ' + name);
};

//Utilizing ES6 arrow (fat arrow) functions, rewrite code as:
const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

//A more refined way
const sayHello = name => console.log(`Hello ${name}`);

--Another Example--
var square = function(n) {
  return n * n;
};

//More concisely written
const square = n => n * n;

--Another Example--
// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
// surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

--Another Example--
class Deck {
    constructor() {
      const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
      const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      const deck = [];
      for (const suit of suits) {
        for (const face of faces) {
          deck.push(this.createCard(suit, face));
        }
      }
      this.deck = deck;
    }
  }
  
//Refactored using forEach
class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(function(suit) {
            faces.forEach(function(face) {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
        }
}
    
//Refactored using arrow functions  
class Deck {
    constructor() {
        ...
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
    }
}