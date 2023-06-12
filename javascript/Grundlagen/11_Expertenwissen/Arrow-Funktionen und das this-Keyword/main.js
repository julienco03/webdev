'use strict'

// this referenziert das Objekt in dessen Kontext es aufgerufen wird
let person1 = {
  vorname: 'max',
  nachname: 'mustermann',
  alter: 20,
  meine_methode() {
    console.log(this)
  },
}
person1.meine_methode() // {vorname: 'max', nachname: 'mustermann', alter: 20, meine_methode: ƒ}

// durch Nutzung von this innerhalb einer Funktion "fällt das this aus dem Kontext"
// im strict-Mode ist es undefined
// ohne strict-Mode bezieht es sich auf das Window-Objekt
let person2 = {
  vorname: 'max',
  nachname: 'mustermann',
  alter: 20,
  meine_methode() {
    const meine_funktion = function () {
      console.log(this)
    }
    meine_funktion()
  },
}
person2.meine_methode() // undefined

// Arrow-Funktionen erhalten den Kontext zum Objekt in dem sie erstellt werden
let person3 = {
  vorname: 'max',
  nachname: 'mustermann',
  alter: 20,
  meine_methode() {
    const meine_funktion = () => console.log(this)
    meine_funktion()
  },
}
person3.meine_methode() // {vorname: 'max', nachname: 'mustermann', alter: 20, meine_methode: ƒ}
