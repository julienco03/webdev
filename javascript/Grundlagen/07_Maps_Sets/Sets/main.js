"use strict";

/**
 * Sammlung von Werten
 * Werte müssen eindeutig sein
 */
let mein_set = new Set();

mein_set.add("ananas");
mein_set.add("mango");
mein_set.add("pfirsich");
mein_set.add("orange");

console.log(mein_set); // {'ananas', 'mango', 'pfirsich', 'orange'}
console.log(mein_set.size); // 4

mein_set.delete("ananas");
console.log(mein_set.has("ananas")); // false

console.log(mein_set.entries()); // {'mango' => 'mango', 'pfirsich' => 'pfirsich', 'orange' => 'orange'}
console.log(mein_set.keys()); // {'mango', 'pfirsich', 'orange'}
console.log(mein_set.values()); // {'mango', 'pfirsich', 'orange'}

// Äquivalent zu Set.entries()
console.log(
  mein_set.forEach((key, value) => {
    console.log(key + ": " + value);
  })
);
