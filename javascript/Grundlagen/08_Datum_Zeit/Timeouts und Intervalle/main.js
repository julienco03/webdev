"use strict";

// setTimeout(callback_fn, zeitspanne[, parameter1, parameter2...])
console.log("Los!");
setTimeout(function () {
  console.log("Fertig");
}, 2000);

// setTimeout(code-string, zeitspanne)
console.log(setTimeout("console.log('Fertig 2.0');", 5000)); // 4

// Löscht den Timeout mit der ID 4
clearTimeout(4);

// setInterval(callback_fn, zeitspanne[, parameter1, parameter2...])
setInterval(function () {
  console.log("Eine Sekunde ist um...");
}, 1000);

// setInterval(code-string, zeitspanne)
console.log(setInterval("console.log('Drei Sekunden sind um');", 3000)); // 6

// Löscht das Interval mit der ID 5
clearInterval(6);

/**
 * Gesamte Ausgabe
 *
 * Los!
 * 4
 * 6
 * Eine Sekunde ist um...
 * Fertig
 * (1,2...) Eine Sekunde ist um...
 */
