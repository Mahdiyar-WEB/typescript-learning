//Generics: used for functions , classes, interfaces ,.. ,
//generics used for  re-useable component , function , code , class

//in below scenario we should create two different func to handle number and string in input

const getNumberArray = (items: number[]): number[] => {
  return new Array().concat(items);
};
const convertedNumbers = getNumberArray([1, 2, 3]);

const getStringArray = (items: string[]): string[] => {
  return new Array().concat(items);
};
const convertedStrings = getStringArray(["a", "b"]);

//***but with generics we can make it dynamic

const getArray = <T>(items: T[]): T[] => {
  //====> T is placeholder
  return new Array().concat(items);
};

const convertedNumbers1 = getArray<number>([1, 2, 3]).map((item) =>
  item.toFixed(),
);
const convertedStrings1 = getArray<string>(["a", "b"]).map((item) =>
  item.toUpperCase(),
);
