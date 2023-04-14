"use strict";

let konto_1 = {
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

console.log(konto_1);

let auto = {
  marke: "Mercedes Benz",
  modell: "S63",
  kraftstoffart: "Benzin",
  kilometerstand: 187,
  ausstattung: {
    navi: true,
    klimaanlange: true,
    sitzheizung: true,
    tempomat: true,
    panoramadach: true,
  },
  zustand: "neu",
  preis: 156000,
};

console.log(auto);
