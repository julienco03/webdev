'use strict'

const nav = document.getElementById('navigation')
const nav_style = getComputedStyle(nav)

console.log(nav_style) // CSSStyleDeclaration
console.log(nav_style.color) // rgb(255, 255, 255)
console.log(nav_style.height) // 56px
console.log(nav_style.backgroundColor) // rgb(33, 33, 33)
