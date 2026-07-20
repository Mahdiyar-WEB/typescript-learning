//JS => number,string,null,undefined,object,boolean
//TS => ...JS,any,never,unknown,enum,tuple

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
