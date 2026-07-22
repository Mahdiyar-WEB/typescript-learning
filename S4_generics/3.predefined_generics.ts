//1.partial (it make another type or interface based on another type or interface with optional properties)
interface Person {
  name: string;
  age: number;
  email: string;
}

interface PartialPerson extends Partial<Person> {}

const user: PartialPerson = {};
const user2: Person = {};

//2.required (it make another type or interface based on another type or interface with required properties)
interface OptionalPerson {
  name?: string;
  age?: number;
  email?: string;
}

interface RequiredPerson extends Required<OptionalPerson> {}

const user3: OptionalPerson = {};
const user4: RequiredPerson = {};
