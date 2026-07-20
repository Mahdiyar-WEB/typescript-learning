//in functions we can define return value after () and if our function don't return we can use void,undefined or any

//when there is no return: 1.void 2.undefined 3.any
const printID = (id: number): void => {
  console.log("your id is: ", id);
};

//when return is number
const sumNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

//*** we can pass function type to let
let test: (id: number) => void; //the variable type is: a function with number input and void output
let test2: (value1: number, value2: number) => number; //the variable type is: a function with 2 number input and number output
test = printID;
test2 = sumNumbers;
