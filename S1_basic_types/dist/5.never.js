"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//when you want to define a function without output you can use void or never but void means there is null or undefined return but never means there is no return at all
const throwErrMsgVoid = (msg) => {
    throw new Error(msg);
};
const throwErrMsgNever = (msg) => {
    throw new Error(msg);
};
let result;
result = throwErrMsgVoid("error message");
console.log("🚀 ~ result:", result);
result = throwErrMsgNever("error message");
console.log("🚀 ~ result:", result);
//# sourceMappingURL=5.never.js.map