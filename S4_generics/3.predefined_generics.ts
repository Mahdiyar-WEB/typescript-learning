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

//multiple utility:
type PartialPickPerson = Partial<Pick<Person, "age" | "email">>;
//or
interface PartialPickPerson1 extends Partial<Pick<Person, "age" | "email">> {}

//5.record: (create new object with defined keys and the desired type or interface)
interface School extends Record<"teacher" | "manager", Person> {}
//or
type School1 = Record<"teacher" | "manager", Person>;

const schoolEmploys: School = {
  manager: {
    age: 55,
    email: "manager@gmail.com",
    name: "manager name",
  },
  teacher: {
    age: 42,
    email: "teacher@gmail.com",
    name: "teacher name",
  },
};

//6.readonly: (create new type or interface based on another type or interface with readonly properties)

interface ReadonlyPerson extends Readonly<Person> {}
//or
type ReadonlyPerson1 = Readonly<Person>;

const readonlyPerson: ReadonlyPerson = {
  age: 20,
  name: "test",
  email: "test@gmail.com",
};

readonlyPerson.age = 23;
