'use strict'

let div = document.createElement('div')

// Attribut über Knoten hinzufügen
let attr = document.createAttribute('id')
attr.value = 'meine_id'
div.setAttributeNode(attr)

// Attribut auf direktem Wege setzen
div.setAttribute('class', 'meine_klasse')

// Textknoten hinzufügen
let text_node = document.createTextNode('text123')

console.log(div.id) // meine_id
console.log(div.className) // meine_klasse
console.log(text_node) // text123
