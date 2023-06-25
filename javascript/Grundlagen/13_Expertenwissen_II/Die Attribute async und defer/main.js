'use strict'

/**
 * Befindet sich das Skript (main.js) VOR dem body-Element bzw. vor
 * der Definition des div-Elements, wird es direkt ausgeführt und
 * das div wird nicht gefunden
 *
 * Ohne Attribute wie async und defer müssen Skripte also immer am Ende des body
 * eingebunden werden (auf Reihenfolge achten!), damit es zu keinen Fehlern kommt
 *
 * Ausnahme: Arbeiten Skripte nicht mit der DOM bzw. HTML-Elementen, können sie auch
 * im head eingebunden werden
 *
 * async: Skript wird im Hintergrund ausgeführt (parallel zum Parsen der Seite)
 * defer: Skript wird erst ausgeführt, wenn die Seite vollständig geparsed wurde (nicht kompatibel mit IE 6-9)
 *
 * Best Practice: Skript am Ende des body inkl. defer-Attribut
 */

if (document.querySelector('#test')) {
  console.log('Das div-Element wurde gefunden.')
} else {
  console.log('Das div-Element wurde nicht gefunden.')
}
