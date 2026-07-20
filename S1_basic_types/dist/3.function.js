"use strict";
//in functions we can define return value after () and if our function don't return we can use void,undefined or any
Object.defineProperty(exports, "__esModule", { value: true });
//when there is no return: 1.void 2.undefined 3.any
const printID = (id) => {
    console.log("your id is: ", id);
};
//when return is number
const sumNumbers = (num1, num2) => {
    return num1 + num2;
};
//*** we can pass function type to let
let test; //the variable type is: a function with number input and void output
let test2; //the variable type is: a function with 2 number input and number output
test = printID;
test2 = sumNumbers;
//# sourceMappingURL=3.function.js.map