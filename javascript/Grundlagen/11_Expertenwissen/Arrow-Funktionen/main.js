'use strict'

// const multiplizieren = function (a, b) {return a * b}
// console.log(multiplizieren(5, 10)) // 50

const multiplizieren_fat_arrow = (x, y) => x * y
console.log(multiplizieren_fat_arrow(5, 10)) // 50

const begruessung = (name) => `Hallo ${name}!`
console.log(begruessung('Max')) // Hallo Max!

let einkaufsliste = ['Brot', 'Eier', 'Milch']
einkaufsliste.forEach((x) => console.log(x)) // Brot Eier Milch
