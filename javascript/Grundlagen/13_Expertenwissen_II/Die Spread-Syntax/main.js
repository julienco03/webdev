'use strict'

/* Beispiel 1 */
let zahlen = [41, 56, 33]
const addieren = function (x, y, z) {
  return x + y + z
}
console.log(addieren(zahlen[0], zahlen[1], zahlen[2]))
console.log(addieren(...zahlen)) // Kurzschreibweise

/* Beispiel 2 */
let abc = ['a', 'b', 'c']
let def = ['d', 'e', 'f']
let abcdef = [...abc, ...def]
console.log(abcdef)

/* Beispiel 3 */
let objekt_1 = {
  name: 'Max',
  nachname: 'Mustermann',
}
let objekt_2 = {
  ...objekt_1,
  alter: 20,
}
console.log(objekt_2)
