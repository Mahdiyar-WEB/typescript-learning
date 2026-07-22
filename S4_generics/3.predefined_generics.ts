//1.partial (it make another type or interface based on another type or interface with optional properties)
interface Person {
  name: string;
  age: number;
  email: string;
}

interface PartialPerson extends Partial<Person> {}
//or
type PartialPerson1 = Partial<Person>;

const user: PartialPerson = {};
const user2: Person = {};

//2.required (it make another type or interface based on another type or interface with required properties)
interface OptionalPerson {
  name?: string;
  age?: number;
  email?: string;
}

interface RequiredPerson extends Required<OptionalPerson> {}
//or
type RequiredPerson1 = Required<OptionalPerson>;

const user3: OptionalPerson = {};
const user4: RequiredPerson = {};

//3.omit: (remove some properties from another interface or type and create new type or interface)
interface PersonWithoutEmailAndName extends Omit<Person, "email" | "name"> {}
//or
type PersonWithoutEmailAndName1 = Omit<Person, "email" | "name">;

const personWithoutEmail: PersonWithoutEmailAndName = { age: 23 };

//4.pick (pick some properties from another interface or type and create new type or interface)
interface PersonWithEmailAndName extends Pick<Person, "email" | "name"> {}
//or
type PersonWithEmailAndName1 = Pick<Person, "email" | "name">;

const personWithEmailAndName: PersonWithEmailAndName = { email: "", name: "" };



