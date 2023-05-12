"use strict";

let s = "Lorem ipsum dolor sit amet ipsum.   ";

console.log(s.length); // 36

console.log(s.indexOf("ipsum")); // 6
console.log(s.indexOf("ipsum", 20)); // 27

console.log(s.includes("amet")); // true
console.log(s.includes("Amet")); // false
console.log(s.includes("amet", 30)); // false

console.log(s.toLowerCase()); // lorem ipsum dolor sit amet ipsum.
console.log(s.toUpperCase()); // LOREM IPSUM DOLOR SIT AMET IPSUM.

console.log(s.trim()); // entfernt überflüssige Leerzeichen

console.log(s.repeat(2)); // wiederholt den String

/**
 * Unterschied indexOf() und search(): search() konvertiert den übergebenen String in einen regex
 *  => "hello.".search(".")  liefert 0 zurück
 *  => "hello.".indexOf(".") liefert 5 zurück
 */
let regex = /i\w{4}/;
let regex_global = /i\w{4}/g;

console.log(s.search("ipsum")); // 6
console.log(s.replace(regex, "hipsum")); // Lorem hipsum dolor sit amet ipsum.
console.log(s.replace(regex_global, "hipsum")); // Lorem hipsum dolor sit amet hipsum.
console.log(s.match(regex_global)); // ['ipsum', 'ipsum']
