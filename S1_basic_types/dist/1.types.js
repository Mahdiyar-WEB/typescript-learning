"use strict";
//JS => number,string,null,undefined,object,boolean
//TS => ...JS,any,never,unknown,enum,tuple,union
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
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.OK); //return 200
//in enum we can return key instead of value like this
console.log(StatusCodes[200]); //return OK
//Object
const user1 = {
    id: 1,
    name: "mahdiyar",
    age: 23,
};
// if you want to declare age as optional value
const user2 = {
    id: 1,
    name: "mahdiyar",
};
//if you want make id protected to prevent change in code use readonly before that
const user3 = {
    id: 1,
    name: "mahdiyar",
    age: 23,
};
//union: (if you want different types you can use | as union)
const printValue = (a) => {
    if (typeof a === "string") {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a.toFixed());
    }
};
printValue(1);
printValue("one");
//literal: (we can define fixed values in literal types like enum)
//*** use literal is better than enum values specially in functions props
const printText = (text, align) => {
    console.log(text, align);
};
printText("text", "CENTER");
printText("text", "LEFT");
printText("text", "RIGHT");
//# sourceMappingURL=1.types.js.map