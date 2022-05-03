//MERN Afternoon Lecture - 5/2/2022
//Rest operators = const, let, or var
// var someNums = [4,8,15,16,23,42];
// someNums = someNums.map((num)=>{return num * 2});
// console.log(someNums);

// map is used a lot with React

// const someNums = [4,8,15,16,23,42];
// console.log(someNums.filter((num)=>{return num % 2 === 0}));

// The below code is taking the array, excluding all odd numbers, then doubling the remaining numbers.
const someNums = [4,8,15,16,23,42];
console.log(someNums.filter((num)=>{return num % 2 === 0}).map((num)=>{return num*2}));

/* RECAP - we learned about
Rest operators
Arrow Functions
and Scope with let,const,and var
*/