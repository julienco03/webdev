"use strict";

let zahlen = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];

/**
 * Sorting arrays
 * Syntax: sort(), sort(compareFn)
 * Achtung: Arrays.sort() sortiert die Zahlen wie Strings!
 */
console.log(zahlen.sort()); // [1, 11, 12, 2, 23, 32, 34, 43, 55, 77, 9] alphanumerisch

console.log(
  zahlen.sort((a, b) => {
    return a - b;
  })
); // [1, 2, 9, 11, 12, 23, 32, 34, 43, 55, 77] aufsteigend

console.log(
  zahlen.sort((a, b) => {
    return b - a;
  })
); // [77, 55, 43, 34, 32, 23, 12, 11, 9, 2, 1] absteigend

/**
 * Filtering arrays
 * Syntax: filter(callbackFn), filter(callbackFn, thisArg)
 * thisArg: a value to use as this when executing callbackFn
 */
console.log(zahlen.filter((zahl) => zahl > 40)); // [43, 55, 77]

/**
 * Calling filter() on non-array objects
 * The filter() method reads the length property of this and then accesses
 * each integer index.
 */
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b")); // [ 'a', 'b' ]
