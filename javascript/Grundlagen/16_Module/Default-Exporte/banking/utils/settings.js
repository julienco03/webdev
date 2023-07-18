let einrueckung = 4
let element_typ = 'pre'
let person_1 = {
  name: 'Max Mustermann',
  vermoegen: 3500,
}
let person_2 = {
  name: 'Sabrina Mustermann',
  vermoegen: 3500,
}

// default-Export
export default element_typ
export { einrueckung, person_1 as max, person_2 as moritz }
