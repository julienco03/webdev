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

// Werte auslesen (Dot-Notation)
console.log(konto.aktiv); // 420
console.log(konto.inhaber.vorname); // Max

// Neue Eigenschaften bzw. properties hinzufügen (Dot-Notation)
konto.abhebelimit = 2000;
konto.erstellungsjahr = 1997;

// Werte ändern (Dot-Notation)
konto.kontostand = 1420;
