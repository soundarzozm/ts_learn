// ARRAYS
let names = ["luigi", "mario", "yoshi"];

names.push("toad");

names.push(3);
names[0] = 3;

let mixed = ["ken", 4, "chun-li", 8, 9, true];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

// OBJECTS
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";

ninja.age = "30"; // same as variables

ninja.skills = ["fighting", "sneaking"]; // cannot add properties

ninja = {
  name: "yoshi",
  belt: "orange",
  //   age: 40,
  //   skills: []
};
