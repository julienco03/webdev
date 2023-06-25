'use strict'

const addieren = function (array) {
  let sum = 0
  array.forEach((e) => {
    sum += e
  })
  return sum
}
console.log(addieren([1, 2, 3, 4, 5])) // 15

const addieren_2 = function (...summanden) {
  let sum = 0
  summanden.forEach((e) => {
    sum += e
  })
  return sum
}
console.log(addieren_2(1, 2, 3, 4, 5)) // 15
