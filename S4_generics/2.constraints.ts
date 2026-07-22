//constraints define the limit of generics type we can pass. with extends we can define constraints generics
//#sample 1:

const getArray = <T extends string | number>(items: T[]): T[] => {
  //====> T is placeholder
  return new Array().concat(items);
};

const convertedNumbers1 = getArray<number>([1, 2, 3]).map((item) =>
  item.toFixed(),
);
const convertedStrings1 = getArray<string>(["a", "b"]).map((item) =>
  item.toUpperCase(),
);

//#sample 2:
const mergeObjects = <T extends object, U extends object>(obj1: T, obj2: U) => {
  //==> T and U is placeholder for generics
  return Object.assign(obj1, obj2);
};

const mergedObjects = mergeObjects({ name: "mahdiyar" }, { age: 23 });
