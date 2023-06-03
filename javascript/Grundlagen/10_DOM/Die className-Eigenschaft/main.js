'use strict'

const jumbotron = document.querySelector('.jumbotron')
let classes = jumbotron.className
console.log(classes) // jumbotron test

classes = 'meine-klasse'
classes += ' 123'
console.log(classes) // meine-klasse 123

classes = classes.replace('meine', 'eine')
classes = classes.replace(' 123', '')
console.log(classes) // eine-klasse

/**
 * Statt "Startseite" soll "CSS" die active-Klasse haben
 */
const nav_startseite = document.querySelector('#navigation ul > li:first-of-type a')
nav_startseite.className = ''

const nav_css = document.querySelector('#navigation ul > li:nth-of-type(3) a')
nav_css.className = 'active'
