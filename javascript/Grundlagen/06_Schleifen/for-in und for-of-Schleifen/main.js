"use strict";

/**
 * WICHTIG
 *
 * Mit for-in durchläuft man die Eigenschaften/Schlüssel,
 * mit for-of die Werte eines iterierbaren Objekts.
 */

let obst = ["Karotten", "Paprika", "Tomaten", "Gurken"];
let person = { name: "Paul", alter: 20, geschlecht: "männlich" };

/**
 * Array durchlaufen mit for-in-Schleife
 */
for (const key in obst) {
  if (Object.hasOwnProperty.call(obst, key)) {
    const value = obst[key];
    console.log(key + ": " + value);
  }
}

/**
 * Array durchlaufen mit for-of-Schleife
 */
for (const i of obst) {
  console.log(i);
}

/**
 * Objekt durchlaufen mit for-in-Schleife NICHT EMPFOHLEN (!)
 */
for (const eigenschaft in person) {
  if (Object.hasOwnProperty.call(person, eigenschaft)) {
    const wert = person[eigenschaft];
    console.log(eigenschaft + ": " + wert);
  }
}

/**
  Objekt durchlaufen mit for-of-Schleife NICHT MÖGLICH (!)

  for (const eigenschaft of person) {
    console.log(eigenschaft);
  }
*/

/**
 * Einträge eines Objekts ausgeben mit Object.entries()
 */
const object1 = { a: "somestring", b: 42 };
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

/**
 * Auf Schlüssel und Werte eines Objekts separat zugreifen
 */
console.log(Object.keys(person)); // ['name', 'alter', 'geschlecht']
console.log(Object.values(person)); // ['Paul', 20, 'männlich']
