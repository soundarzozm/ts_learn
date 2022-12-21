"use strict";
// Using generic
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'shaun',
    },
};
const docFour = {
    uid: 2,
    resourceName: 'hello',
    data: ['hello', 'world'],
};
