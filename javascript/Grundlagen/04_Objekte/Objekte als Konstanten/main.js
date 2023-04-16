"use strict";

const person = {
  vorname: "Max",
  nachname: "Müller",
  alter: 24,
};

/**
 * Nicht erlaubt:
 *
 * person = 1;
 * person = ['a', 2]
 * person = null;
 * person = undefined;
 * person = {};
 */

/* Erlaubt */
person.vorname = "Ralf";
console.log(person.vorname);

person.geschlecht = "m";
console.log(person.geschlecht);

delete person.alter;
console.log(person);
