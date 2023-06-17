'use strict'

document.addEventListener('keydown', (e) => {
  // console.log(e)
  if (e.key === 'w') {
    console.log('Es wurde das w-Zeichen gedrückt.')
  }
})

document.addEventListener('keyup', (e) => {
  console.log(e)
})

// wichtig: das keypress-Event hört nicht auf Shift, Capslock und Fn
document.addEventListener('keypress', (e) => {
  console.log(e)
})
