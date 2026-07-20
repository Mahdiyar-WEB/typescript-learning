//JS => number,string,null,undefined,object,boolean
//TS => ...JS,any,never,unknown,enum,tuple,union

//Built in types:
let price: number = 100_000;
let name: string = "mahdiyar";
let isMarried: boolean = true;
const email = "test@gmail.com";

//Any type: (with any we can assign everything to our variable , but we shouldn't use any in our projects because our app must be protected)
let value;
//in this sum we can pass any props to it and its terrible!
function sum(a: any) {
  return a + 5;
}

//Array type:
const testArray: number[] = [1, 2, 3, 4]; //numbers array
const testArray2: (string | number | boolean)[] = [1, 2, 3, 4, "test", false]; //string or number or boolean array

//with type definition we can use ts intelligence for our map , ... inside return and its awesome!
const products: string[] = ["product1", "product2"];
products.map((product) => product.toUpperCase());

//declare let and assign type to protect values
let values: string[];
values = ["test1", "test2"];

//Tuple: (it works like array with this rules: a.fixed array length , b.multiple type array , c.order (index) type is important)
const tupleArray: [string, number] = ["not found page", 404]; //whit this definition we can use ts intelligence in our usage
tupleArray[0].split("");
tupleArray[1].toFixed(0);

//weakness of tuple is push method :(
tupleArray.push("ok");

//Enum: (set of static (key,value or key) constant)
enum Directions {
  //enum first letter name must be uppercase
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
const currentDirection: Directions = Directions.UP;
if (currentDirection === Directions.UP) {
  console.log("UP direction");
}

enum StatusCodes {
  OK = 200,
  NotFound = 404,
}
console.log(StatusCodes.OK); //return 200
//in enum we can return key instead of value like this
console.log(StatusCodes[200]); //return OK

//Object
const user1: {
  id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "mahdiyar",
  age: 23,
};

// if you want to declare age as optional value
const user2: {
  id: number;
  name: string;
  age?: number;
} = {
  id: 1,
  name: "mahdiyar",
};

//if you want make id protected to prevent change in code use readonly before that
const user3: {
  readonly id: number;
  name: string;
  age: number;
} = {
  id: 1,
  name: "mahdiyar",
  age: 23,
};

//union: (if you want different types you can use | as union)
const printValue = (a: string | number) => {
  if (typeof a === "string") {
    console.log(a.toUpperCase());
  } else {
    console.log(a.toFixed());
  }
};
printValue(1);
printValue("one");

//literal: (we can define fixed values in literal types like enum)
//*** use literal is better than enum values specially in functions props
const printText = (text: string, align: "LEFT" | "RIGHT" | "CENTER") => {
  console.log(text, align);
};
printText("text", "CENTER");
printText("text", "LEFT");
printText("text", "RIGHT");
