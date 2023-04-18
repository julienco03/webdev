"use strict";

let obst = ["Äpfel", "Birnen", "Orangen", "Äpfel"];

/**
 * Syntax: Array.includes(Suchwert[, Startindex])
 */
console.log(obst.includes("Äpfel")); // true
console.log(obst.includes("Birnen", 2)); // false, nach Index 2 nicht vorhanden
console.log(obst.includes("Tomaten")); // false

/**
 * Syntax: Array.indexOf(Suchwert[, Startindex])
 */
console.log(obst.indexOf("Orangen")); // 2
console.log(obst.indexOf("Orangen", 3)); // -1, nach Index 3 nicht vorhanden
console.log(obst.indexOf("Tomaten")); // -1, nicht gefunden

/**
 * Syntax: Array.lastIndexOf(Suchwert[, Startindex])
 */
console.log(obst.lastIndexOf("Birnen")); // 1
console.log(obst.lastIndexOf("Äpfel")); // 3 (nicht 0)
console.log(obst.lastIndexOf("Tomaten")); // -1, nicht gefunden

/**
 * Weitere Methoden unter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
