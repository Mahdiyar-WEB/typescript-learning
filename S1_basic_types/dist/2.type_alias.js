"use strict";
//for improve code readability we can use type alias
//first letter must be uppercase
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: "mahdiyar",
    age: 23,
};
const printValue = (a) => {
    if (typeof a === "string") {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a.toFixed());
    }
};
const printText = (text, align) => {
    console.log(text, align);
};
//# sourceMappingURL=2.type_alias.js.map