'use strict'

window.addEventListener('resize', (e) => console.log(e))

window.addEventListener('scroll', (e) => {
  console.log(e)
  console.log(scrollX, scrollY)
})

window.addEventListener('load', (e) => {
  console.log(e)
  console.log(e.timeStamp) // Ladezeit aller Daten der Seite
})
