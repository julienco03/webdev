'use strict'

/**
 * display-Eigenschaft vom ersten Jumbotron ändern
 * Achtung: Über style="..." ändert man das inline-Styling
 */
let jumbotron = document.querySelector('.jumbotron')
jumbotron.style['display'] = 'none'
console.log(jumbotron.style['display']) // none

/**
 * Navleiste einen blauen Hintergrund geben
 * Achtung: Referenz auf background-color über backgroundColor (camelCase)
 */
let nav_style = document.querySelector('#navigation').style
nav_style['backgroundColor'] = '#OOF'
