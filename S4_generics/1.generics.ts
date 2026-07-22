//Generics: used for functions , classes, interfaces ,.. , built-in generics
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

//built in generics: (the generics which is already we have in js and there is no difference between them in js and ts)
//#sample 1:
const tsArray: string[] = [];
const jsArray: Array<string> = [];

//#sample 2:
const tsPromise = new Promise<string>((res, rej) => {
  setTimeout(() => {
    res("resolved");
  }, 1000);
});
tsPromise.then((data) => console.log(data.toUpperCase()));


const jsPromise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved");
  }, 1000);
});
jsPromise.then((data) => console.log(data.toUpperCase()));

