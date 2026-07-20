"use strict";
//JS => number,string,null,undefined,object,boolean
//TS => ...JS,any,never,unknown,enum,tuple
Object.defineProperty(exports, "__esModule", { value: true });
//Built in types:
let price = 100_000;
let name = "mahdiyar";
let isMarried = true;
const email = "test@gmail.com";
//Any type: (with any we can assign everything to our variable , but we shouldn't use any in our projects because our app must be protected)
let value;
//in this sum we can pass any props to it and its terrible!
function sum(a) {
    return a + 5;
}
//Array type:
const testArray = [1, 2, 3, 4]; //numbers array
const testArray2 = [1, 2, 3, 4, "test", false]; //string or number or boolean array
//with type definition we can use ts intelligence for our map , ... inside return and its awesome!
const products = ["product1", "product2"];
products.map((product) => product.toUpperCase());
//declare let and assign type to protect values
let values;
values = ["test1", "test2"];
//Tuple: (it works like array with this rules: a.fixed array length , b.multiple type array , c.order (index) type is important)
const tupleArray = ["not found page", 404]; //whit this definition we can use ts intelligence in our usage
tupleArray[0].split("");
tupleArray[1].toFixed(0);
//weakness of tuple is push method :(
tupleArray.push("ok");
//Enum: (set of static (key,value or key) constant)
var Directions;
(function (Directions) {
    //enum first letter name must be uppercase
    Directions["UP"] = "UP";
    Directions["DOWN"] = "DOWN";
    Directions["LEFT"] = "LEFT";
    Directions["RIGHT"] = "RIGHT";
})(Directions || (Directions = {}));
const currentDirection = Directions.UP;
if (currentDirection === Directions.UP) {
    console.log("UP direction");
}
//# sourceMappingURL=types.js.map