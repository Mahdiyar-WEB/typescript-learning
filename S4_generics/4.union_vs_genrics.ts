//1.in functions generics will lock only on one type but when you use union types you can pass the union which you declared into function
const getArrayGenerics = <T extends string | number>(items: T[]): T[] => {
  return new Array().concat(items);
};

//here we locked on number or string
const numbers = getArrayGenerics<number>([1, 2, 3]);
numbers.push(4);

const strings = getArrayGenerics<string>(["a", "b", "c"]);
strings.push("d");

const getArrayUnion = (items: (string | number)[]): (string | number)[] => {
  return new Array().concat(items);
};
//but here we cant lock in inputs
const unionValues = getArrayUnion([1, 2, 3, "a", "b", "c"]);
unionValues.push(4, "d");

//*** so we you need to pass one of some types into a function use generics but if there is no difference use union
