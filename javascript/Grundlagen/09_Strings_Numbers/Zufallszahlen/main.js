"use strict";

/* Liefert Zahl zwischen [0, 1) */
let r = Math.random(); // z.B. 0.43195656287433937

/* Liefert Zahl zwischen [0, 12] */
let r2 = Math.floor(Math.random() * (12 + 1)); // z.B. 10

/* Liefert Zahl zwischen [40, 60] */
let minimum = 40;
let maximum = 60;
let r3 = Math.floor(Math.random() * (maximum - minimum + 1) + minimum); // z.B. 49
