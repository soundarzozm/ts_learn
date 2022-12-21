"use strict";
// Using generic
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
// Works but should not be the case. Only objects should be allowed
// <T extends object> solves this.
// let docTwo = addUID('hello')
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["ARTIST"] = 3] = "ARTIST";
})(resourceType || (resourceType = {}));
const docThree = {
    uid: 1,
    resourceName: 'person',
    resourceType: resourceType.BOOK,
    data: {
        name: 'shaun',
    },
};
const docFour = {
    uid: 2,
    resourceName: 'hello',
    resourceType: resourceType.ARTIST,
    data: ['hello', 'world'],
};
console.log(docFour);
