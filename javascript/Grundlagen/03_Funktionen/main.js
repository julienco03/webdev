"use strict";

/**
 * Funktionsausdruck mit Standardparameter val = 1
 */
const increment = function (num, val = 1) {
  return num + val;
};

console.log(increment(5)); // 6
console.log(increment(5, 5)); // 10

/**
 * Funktionsdeklaration mit Standardparameter val = 1
 */
function increment_(num, val = 1) {
  return num + val;
}

console.log(increment_(5)); // 6
console.log(increment_(5, 5)); // 10

/**
 * Unterschiede zwischen Funktionsausdruck und Funktionsdeklaration:
 *
 * Funktionausdrücke mit 'let' kann man re-deklarieren
 * Funktionsdeklarationen unterstützten 'Hoisting'
 *
 *
 * 'Hoisting' bezeichnet das Verschieben von 'var'-Variablen und
 * Funktionsblöcken an den Anfang der Quelldatei
 * Somit ist folgendes möglich:
 *
 * console.log(x);
 * var x;
 *
 * bzw.
 *
 * let result = addiere();
 * function addiere() {}
 */
