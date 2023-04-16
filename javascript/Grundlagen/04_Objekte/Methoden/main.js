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
  // benannte Funktion statt "einzahlen: function(e) {}"
  einzahlen: function (e) {
    this.kontostand += e;
  },
  abheben: function (a) {
    this.kontostand -= a;
  },
};

let konto2 = {
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
  // benannte Funktion statt "einzahlen: function(e) {}"
  einzahlen(e) {
    this.kontostand += e;
  },
  abheben(a) {
    this.kontostand -= a;
  },
};

konto.einzahlen(1000);
console.log(konto.kontostand); // 580

konto2.einzahlen(5000);
console.log(konto2.kontostand); // 4580
