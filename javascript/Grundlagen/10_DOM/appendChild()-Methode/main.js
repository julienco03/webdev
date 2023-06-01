'use strict'

let div = document.createElement('div')
div.setAttribute('id', 'meine_id')
div.setAttribute('class', 'meine_klasse')

let text = document.createTextNode('*** TEST123 ***')
div.appendChild(text)
console.log(div)

let jumbotron = document.querySelector('.jumbotron > section')
jumbotron.appendChild(div)

/**
 * "Startseite" rutscht in der Navigationsleiste ans Ende der Liste,
 * da das li-Element schon vorhanden ist. Das Kindelement wird hierbei
 * entfernt und als letztes Kindelement eingefügt.
 */
let ul = document.querySelector('#navigation > ul')
let li = document.querySelector('#navigation > ul > li')
ul.appendChild(li)
