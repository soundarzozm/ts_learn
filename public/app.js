"use strict";
// ! Tells the compiler that you are sure it isn't null
const anchor = document.querySelector('a');
// if (anchor) {
// 	console.log(anchor.href)
// }
console.log(anchor.href);
// Type is HTMLFormElement
// const form = document.querySelector('form')
// Type is Element
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
});
