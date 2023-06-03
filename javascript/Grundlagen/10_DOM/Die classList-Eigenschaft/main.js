'use strict'

const jumbotron = document.querySelector('.jumbotron')
let classList = jumbotron.classList
console.log(classList) // DOMTokenList(2) ['jumbotron', 'test', value: 'jumbotron test']

classList.add('meine-klasse')
classList.remove('test')
console.log(classList) // DOMTokenList(2) ['jumbotron', 'meine-klasse', value: 'jumbotron meine-klasse']

classList.replace('meine-klasse', 'hallo')
console.log(classList) // DOMTokenList(2) ['jumbotron', 'hallo', value: 'jumbotron hallo']

console.log(classList.contains('jumbotron')) // true
console.log(classList.contains('qwertz')) // false

classList.toggle('jumbotron')
console.log(classList) // DOMTokenList ['hallo', value: 'hallo']
classList.toggle('jumbotron')
console.log(classList) // DOMTokenList(2) ['hallo', 'jumbotron', value: 'hallo jumbotron']
