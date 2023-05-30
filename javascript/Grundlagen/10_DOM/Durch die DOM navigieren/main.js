'use strict'

let nav = document.querySelector('#navigation')

/**
 * Kindelemente
 */
console.log(nav.child_nodes) // NodeList(3) [text, ul, text]
console.log(nav.firstChild) // #text
console.log(nav.lastChild) // #text

console.log(nav.children) // HTMLCollection [ul]
console.log(nav.firstElementChild) // ul
console.log(nav.lastElementChild) // ul

/**
 * Geschwisterelemente
 */
console.log(nav.nextSibling) // #text
console.log(nav.previousSibling) // #text
console.log(nav.nextElementSibling) // article.jumbotron
console.log(nav.previousElementSibling) // null

/**
 * Elternelemente
 */
console.log(nav.parentNode) // body
console.log(nav.parentElement) // body
