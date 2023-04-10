"use strict";

let konto = {
  iban: "DE66499600000050",
  bic: "PHKXTRFHQ",
  kontostand: -420,
  aktiv: true,
  inhaber: {
    vorname: "Max",
    nachname: "Mustermann",
    geschlecht: "männlich",
    alter: 25,
  },
};

/*** DOT-NOTATION ***/
// Werte auslesen
console.log(konto.aktiv); // true
console.log(konto.inhaber.vorname); // Max

// Neue Eigenschaften bzw. properties hinzufügen
konto.abhebelimit = 2000;
konto.erstellungsjahr = 1997;

// Werte ändern
konto.kontostand = 1420;

/*** BRACKET-NOTATION ***/
// Werte auslesen
console.log(konto["aktiv"]); // true
console.log(konto["inhaber"]["vorname"]); // Max

// Neue Eigenschaften bzw. properties hinzufügen
konto["abhebelimit"] = 2000;
konto["erstellungsjahr"] = 1997;

// Werte ändern
konto["kontostand"] = 1420;

/**
 * Was bringt die Bracket-Notation gegenüber der Dot-Notation?
 *
 * Dot-Notation: Eigenschaft muss alphanumerisch (inkl. _ und $) sein und darf
 * nicht mit einer Zahl beginnen.
 *
 * Bracket-Notation: Eigenschaft kann Sonderzeichen und sogar Leerzeichen besitzen.
 * Statt einem String kann auch eine Variable beim Zugriff auf das Objekt verwendet werden.
 */
let eigenschaft = "iban";
let wert = konto[eigenschaft];

konto["eigenschaft mit leerzeichen"] = "hallo";
console.log(konto["eigenschaft mit leerzeichen"]); // hallo

/*** Eigenschaft löschen ***/
delete konto.inhaber.geschlecht;
delete konto.inhaber["alter"];
