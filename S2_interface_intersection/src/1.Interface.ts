//interface is almost same as type alias but its recommended to use interface for objects,classes (interface will create Object types )
// for functions its better to use type alias

interface User {
  readonly id: number;
  name: string;
  age?: number;
}

//! interface cannot be used as primitives for variables

// cannot use union or literal types inside interface, but we can combine two interface as union

interface Diesel {
  horsePower: number;
}
interface Hybrid {
  type: string;
}

type Car = Diesel | Hybrid;
//or
let car: Diesel | Hybrid;

//interface for functions and difference with type
type Add = (a: number, b: number) => number;

interface Sum {
  (a: number, b: number): number; //to define output type we should use : instead of =
}

//another example: (type alias is recommended for functions and interface recommended for objects and classes)
interface Teacher {
  name: string;
  experienceAge: number;
  calcSalary(): number;
  speak(): void;
}

type Teacher1 = {
  name: string;
  experienceAge: number;
  calcSalary: () => number;
  speak: () => void;
};
