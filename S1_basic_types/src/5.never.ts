//when you want to define a function without output you can use void or never but void means there is null or undefined return but never means there is no return at all
const throwErrMsgVoid = (msg: string): void => {
  throw new Error(msg);
};

const throwErrMsgNever = (msg: string): never => {
  throw new Error(msg);
};

let result: void;

result = throwErrMsgVoid("error message");
console.log("🚀 ~ result:", result); //null or undefined
result = throwErrMsgNever("error message");
console.log("🚀 ~ result:", result); // error: the endpoint is not reachable
