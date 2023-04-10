"use strict";

let meine_variable = "Herbert";
let mein_objekt = {
  zahl: 5000,
};

const meine_funktion = function (v, o) {
  v = "Gustav";
  o.zahl = 2500;
};

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable); // Herbert ???
console.log(mein_objekt); // 2500

// Call-by-Value: gilt für primitve Datentypen (String, Number, Boolean)
// Call-by-Reference: gilt für komplexere Datentypen (Objekte, Funktionen, Arrays)
