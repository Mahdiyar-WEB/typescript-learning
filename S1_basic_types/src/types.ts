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
