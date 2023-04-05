"use strict";

/**
 * '==' <-- Vergleich mit impliziter Typumwandlung
 * '===' <-- Vergleich ohne(!) impliziter Typumwandlung
 */
console.log(24 == "24"); // true
console.log(24 === "24"); // false
console.log(24 != 25); // true
console.log(24 !== 25); // true
console.log("---------------------");

console.log(24 < 24); // false
console.log(24 <= 24); // true
console.log(24 > 25); // false
console.log(24 >= 25); // false
console.log("---------------------");

console.log("a" == "A"); // false
console.log("a" < "A"); // false
console.log("a" > "A"); // true
