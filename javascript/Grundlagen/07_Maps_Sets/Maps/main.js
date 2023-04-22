"use strict";

/**
 * Abbildung von Schlüssel auf Werte
 * Schlüssel sind eindeutig
 */
let meine_map = new Map();

meine_map.set("Schlüssel", "Wert");
meine_map.set(78224, "abc");
meine_map.set(78224, "Singen"); // Wert aktualisieren, wenn vorhanden

console.log(meine_map); // {'Schlüssel' => 'Wert', 78224 => 'Singen'}

meine_map.delete("Schlüssel");

console.log(meine_map.size); // 1
console.log(meine_map.entries()); // {78224 => 'Singen'}

console.log(meine_map.keys()); // {78224}
console.log(meine_map.values()); // {'Singen'}

meine_map.clear();
console.log(meine_map.size); // 0

meine_map.set("a", "5");
meine_map.set("b", "3");
meine_map.set("c", "8");

// Entries ausgeben
meine_map.forEach((key, value) => console.log(key + ": " + value));
// 5: a
// 3: b
// 8: c
