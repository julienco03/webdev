'use strict'

/**
 * Syntax: Bedingung ? Ausdruck_1 : Ausdruck_2
 * Dient als Kurzschreibweise für einen if-else-Ausdruck
 * Verkettung des ternären Operators auch möglich
 */
let x = parseInt((Math.random() * 10).toFixed())
let y = parseInt((Math.random() * 10).toFixed())

let max = x > y ? x : y
console.log(`x: ${x}, y: ${y}, max: ${max}`)

let zahl = 2
console.log(zahl === 1 ? '1' : zahl === 2 ? '2' : 'weder 1 noch 2')
