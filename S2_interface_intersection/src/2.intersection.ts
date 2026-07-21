// we can inherit types inside another type (intersection)
type User = {
  age: number;
  name: string;
};

type Admin = User & { role: string };

type VIPClient = User & { benefits: string[] };

// interface example:
interface User1 {
  age: number;
  name: string;
}

interface Admin1 extends User1 {
  role: string;
}
//or use type inside interface as extends
interface VIPClient1 extends User {
  benefits: string[];
}
