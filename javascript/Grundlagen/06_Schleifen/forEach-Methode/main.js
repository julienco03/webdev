"use strict";

let zahlen = [1, 2, 3, 4, 5, 6, 7];

/**
 * Array durchlaufen mit for-Schleife
 */
for (let i = 0; i < zahlen.length; i++) {
  console.log(zahlen[i]);
}

/**
 * Array durchlaufen mit forEach (Lambda-Ausdruck)
 */
zahlen.forEach((e) => {
  console.log(e);
});

/**
 * Array durchlaufen mit forEach (Callback-Funktion)
 */
zahlen.forEach(function (e) {
  console.log(e);
});
