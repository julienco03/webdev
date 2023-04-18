"use strict";

let obst = ["Äpfel", "Birnen", "Orangen"];

console.log(obst.push("Pfirsich")); // Element am Ende hinzufügen
console.log(obst); // ['Äpfel', 'Birnen', 'Orangen', 'Pfirsich']

console.log(obst.pop()); // Letztes Element entfernen
console.log(obst); // ["Äpfel", "Birnen", "Orangen"]

console.log(obst.unshift("Mango")); // Element am Anfang hinzufügen
console.log(obst); // ['Mango', 'Äpfel', 'Birnen', 'Orangen']

console.log(obst.shift()); // Erstes Element entfernen
console.log(obst); // ["Äpfel", "Birnen", "Orangen"]

/**
 * Zusatzinfo
 *
 * push() und unshift() liefern die Anzahl Elemente des neuen Arrays zurück
 * pop() und shift() liefern das entfernte Element zurück
 *
 * push(), pop(), unshift() und shift() sind destruktive Methoden
 */
