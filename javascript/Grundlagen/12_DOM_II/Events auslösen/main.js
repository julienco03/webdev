'use strict'

let link = document.querySelector('a.active')
let input = document.querySelector('input[type=text]')
let formular = document.querySelector('form')

setTimeout(() => link.click(), 10000)

setTimeout(() => input.focus(), 1000)
setTimeout(() => input.blur(), 3000)

setTimeout(() => formular.reset(), 8000)
setTimeout(() => formular.submit(), 12000)
