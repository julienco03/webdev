"use strict";

let person = {
  vorname: "Max",
  nachname: "Mustermann",
  alter: 18,
};

const person_verarbeiten = function (p) {
  return {
    name: `${p.vorname} ${p.nachname}`,
    zsmfassung: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
    begruessung: `Hallo ${p.vorname} ${p.nachname}!`,
  };
};

console.log(person_verarbeiten(person));
