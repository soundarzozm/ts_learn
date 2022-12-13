// explicit
let character: string;

// arrays
let ninjas: string[];

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);

let mixedVariable: string | number;
mixedVariable = 20;

// objects
let ninjaOne: object;
ninjaOne = {
  name: "yoshi",
  age: 30,
};
ninjaOne = []; // array is also an object (of sorts)

let ninjaTwo: {
  name: string;
  age: number;
  belt: string;
};

ninjaTwo = {
  name: "mario",
  age: 20,
  belt: "black",
};
