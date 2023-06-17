'use strict'

let formular = document.querySelector('form')

formular.addEventListener('submit', (e) => {
  // verhindere das Standardverhalten des submit-Buttons
  e.preventDefault()
  // Daten stehen dennoch zur Verfügung
  console.log(e)
})

formular.addEventListener('reset', (e) => console.log(e))
