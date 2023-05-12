"use strict";

console.log(Math);

// Kreisfläche berechnen: A = PI * r^2
let a = Math.PI * Math.pow(12, 2);

// Runden
console.log(Math.round(a)); // 452
console.log(Math.floor(a)); // 452
console.log(Math.ceil(a)); // 453

// Nachkommastellen
let b = a.toFixed(2);
console.log(b); // 452.39
console.log(typeof b); // string

// Strings in Zahlen umwandeln
let b_integer = parseInt(b);
console.log(b_integer); // 452
console.log(typeof b_integer); // number

let b_float = parseFloat(b);
console.log(b_float); // 452.39
console.log(typeof b_float); // number
