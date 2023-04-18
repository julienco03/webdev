"use strict";

/**
 * Anlegen und Schachteln von Arrays
 */
let obst = ["Äpfel", "Birnen", "Orangen"];
let gemüse = ["Karotten", "Paprika", "Tomaten", "Gurken"];
let einkaufsliste = [obst, gemüse, "Brot", "Eier", "Milch"];

/**
 * Zugriff auf ein- und mehrdimensionale Arrays
 */
console.log(obst[0]); // Äpfel (allg. erstes Element)
console.log(obst[obst.length - 1]); // Orangen (allg. letztes Element)
console.log(gemüse.length); // 4 (allg. Anzahl Elemente)

console.log(einkaufsliste);
/*[
    [
        "Äpfel",
        "Birnen",
        "Orangen"
    ],
    [
        "Karotten",
        "Paprika",
        "Tomaten",
        "Gurken"
    ],
    "Brot",
    "Eier",
    "Milch"
]*/
console.log(einkaufsliste[0][1]); // Birnen
console.log(einkaufsliste[1]);
/*[
    "Karotten",
    "Paprika",
    "Tomaten",
    "Gurken"
]*/

/**
 * Arrays und Objekte in Kombination
 */
let auto_objekt = {
  marke: "Hyundai",
  modell: "i20N",
  farbe: "silbergrau",
};
let auto = [auto_objekt, 34900, "neu"];

console.log(auto);
/*[
    {
        "marke": "Hyundai",
        "modell": "i20N",
        "farbe": "silbergrau"
    },
    34900,
    "neu"
]*/
console.log(auto[0].modell); // i20N
