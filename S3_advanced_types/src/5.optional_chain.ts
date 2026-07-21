// we can set optional values in our type with ? to check null or undefined values

interface User {
  name: string;
  email?: string;
  age: number;
  likedPosts?: {
    postId: string;
    authorEmail?: string;
  };
}

//usage
const user1: User = {
  name: "mahdiyar",
  age: 23,
};

const user2: User = {
  name: "mahdiyar",
  age: 23,
  email: "test@gmail.com",
};

const user3: User = {
  name: "mahdiyar",
  age: 23,
  email: "test@gmail.com",
  likedPosts: {
    postId: "68dsfsadj4fdslasfka",
  },
};

const user4: User = {
  name: "mahdiyar",
  age: 23,
  email: "test@gmail.com",
  likedPosts: {
    postId: "68dsfsadj4fdslasfka",
    authorEmail: "test2@gmail.com",
  },
};

user4.likedPosts?.authorEmail;

//usage in functions:

const calcNumbers = (
  a: number,
  b: number,
  callbackFn?: (input: number) => number,
) => {
  const result = a + b;
  return callbackFn ? callbackFn(result) : result;
};

//now we can use with callbackFn or just two inputs :)
calcNumbers(1, 2);
calcNumbers(1, 2, (input) => input + 10);
