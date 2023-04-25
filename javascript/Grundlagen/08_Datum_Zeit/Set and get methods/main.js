"use strict";

const d = new Date();

/* Datum UND Uhrzeit ausgeben */
console.log(d.toUTCString()); // Tue, 25 Apr 2023 19:46:59 GMT
console.log(d.toISOString()); // 2023-04-25T19:47:06.597Z
console.log(d.toLocaleString()); // 25.4.2023, 21:47:06

/* NUR Datum ausgeben */
console.log(d.toDateString()); // Tue Apr 25 2023
console.log(d.toLocaleDateString()); // 25.4.2023

/* NUR Zeit ausgeben */
console.log(d.toTimeString()); // 21:47:06 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(d.toLocaleTimeString()); // 21:47:06

/**
 * d.toLocaleString([schema [, optionen]])
 */
let de_DE = d.toLocaleString("de-DE");
let en_EN = d.toLocaleString("en-EN");
console.log(de_DE); // 25.4.2023, 21:55:05
console.log(en_EN); // 4/25/2023, 9:55:05 PM

let optionen = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
};

let de_DE_2 = d.toLocaleString("de-DE", optionen);
console.log(de_DE_2); // Dienstag, 25. April 2023 um 22:02:46
