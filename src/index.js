"use strict";

// install jquery
// const $ = require('jquery');
//
// $('body').append('<h2>jQuery Successfully installed!</h2>');

// function sayHello(input) {
//     return input;
// }
//
// console.log(sayHello('Hello'));



// const sayHello = () => {
//     console.log('Hey hey!');
// }
// sayHello();

// MODULE EXERCISE

// import user from './say-hello.js'
// console.log(user.message);

// import {morningGreet} from "./say-hello";
// console.log(morningGreet);

const { message } = require('./say-hello.js');
console.log(message);