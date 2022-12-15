"use strict";
let greet;
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c = 10, d) => {
    console.log(a + b);
    console.log(c);
    console.log(d);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
