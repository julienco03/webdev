'use strict'

/**
 * Elemente mit CSS-Selektor auswählen
 */
console.log(document.querySelector('a')) // a.active
console.log(document.querySelector('body > #navigation > ul')) // ul

console.log(document.querySelectorAll('a')) // NodeList(4) [a.active, a, a, a]
console.log(document.querySelectorAll('.jumbotron')) // NodeList(2) [article.jumbotron, article.jumbotron]
