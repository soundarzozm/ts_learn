"use strict";
// This is function signature
let greet;
// This is actual function definition
// Note that the parameter names are different (but the types should be matching)
greet = (name, greeting) => {
    console.log(`${name}: ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
