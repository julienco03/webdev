'use strict'

// Attribute hinzufügen
document.querySelector('.jumbotron').setAttribute('lang', 'de')

// Attribute entfernen
document.querySelector('head > meta:nth-of-type(3)').removeAttribute('content')

// Attribute auslesen
console.log(document.querySelector('html').getAttribute('lang')) // de

// Attribute abfragen
console.log(document.querySelector('head > link').hasAttribute('rel')) // true
