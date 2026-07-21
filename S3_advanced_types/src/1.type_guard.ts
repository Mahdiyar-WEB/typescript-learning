type Input = string | number;

const processInput = (input: Input) => {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toFixed());
  }
};

//in operator

interface Circle {
  radius: number;
}
interface Rectangle {
  width: number;
  height: number;
}
interface Square {
  sideLength: number;
}

type Shape = Circle | Square | Rectangle;

const calcShapeArea = (shape: Shape) => {
  let area: number = 0;
  if ("radius" in shape) {
    area = Math.PI * shape.radius ** 2;
  } else if ("width" in shape && "height" in shape) {
    area = shape.height * shape.width;
  } else if ("sideLength" in shape) {
    area = shape.sideLength ** 2;
  }
  return area;
};

//instanceof: (this can be use just for classes)
class Dog {
  bark() {
    return "Woof";
  }
}
class Cat {
  purr() {
    return "Meow";
  }
}

const animalSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    return animal.bark();
  } else {
    animal.purr();
  }
};

// user defined type: not recommended because of complexity
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

type Animal = Fish | Bird;

const isFish = (animal: Animal): animal is Fish => {
  return (animal as Fish).swim() !== undefined;
};

const checkAnimal = (animal: Animal) => {
  if (isFish(animal)) {
    console.log("animal is Fish");
  } else {
    console.log("animal is Bird");
  }
};
