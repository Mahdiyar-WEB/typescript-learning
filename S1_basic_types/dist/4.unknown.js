"use strict";
//unknown type is almost same as any type but when you don't know what is variable value or functions output you better set unknown
//because its more restricted for passing the variable with unknown value or function with unknown output to another variable or function
Object.defineProperty(exports, "__esModule", { value: true });
let anyVariable;
let unknownVariable;
let stringVariable;
stringVariable = anyVariable; //as you can see we can pass anyVariable to stringVariable because the anyVariable type is any
// stringVariable = unknownVariable; //as you can see we can't pass unknownVariable to stringVariable because the unknownVariable type is unknown so its restricted
//***but with narrowing the type checking we can pass unknownVariable to stringVariable
if (typeof unknownVariable === "string") {
    stringVariable = unknownVariable;
}
//------unknown usage in functions
const anyJsonParser = (input) => {
    return JSON.parse(input);
};
const unknownJsonParser = (input) => {
    return JSON.parse(input);
};
let result;
result = anyJsonParser("test");
// result = unknownJsonParser("test"); // here we cant assign unknownJsonParser because to output is unknown
// here we're defining the output of unknownJsonParser as string so now we can pass it to result
//with (as) we can define the output of a function like narrowing type checking
result = unknownJsonParser("test");
//# sourceMappingURL=4.unknown.js.map