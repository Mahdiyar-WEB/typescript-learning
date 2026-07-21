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
