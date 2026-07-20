//for improve code readability we can use type alias
//first letter must be uppercase

//1
type User = {
  readonly id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "mahdiyar",
  age: 23,
};

//2
type ValueType = string | number;

const printValue = (a: ValueType) => {
  if (typeof a === "string") {
    console.log(a.toUpperCase());
  } else {
    console.log(a.toFixed());
  }
};

//3
type Align = "LEFT" | "RIGHT" | "CENTER";
const printText = (text: string, align: Align) => {
  console.log(text, align);
};
