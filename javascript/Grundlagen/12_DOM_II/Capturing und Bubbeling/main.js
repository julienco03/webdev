'use strict'

let element1 = document.querySelector('#navigation li:first-of-type > a')
let element1_parent = element1.parentElement

let element2 = document.querySelector('#navigation li:nth-of-type(2) > a')
let element2_parent = element2.parentElement

element1.addEventListener('click', (e) => {
  /**
   * verhindert das Standardverhalten beim Klicken auf den Link
   * hier: verhindert Öffnen eines neuen Tabs und beide console.log() werden ausgegeben
   */
  e.preventDefault()
  console.log('element1 hat es mitbekommen!')
})
element1_parent.addEventListener('click', () => {
  console.log('element1_parent hat es mitbekommen!')
})

element2.addEventListener('click', (e) => {
  /**
   * verhindert die Bubbeling-Phase
   * hier: der neue Tab wird geöffnet und das console.log() ausgegeben
   * das console.log() vom parent wird nicht ausgegeben
   */
  e.stopPropagation()
  console.log('element2 hat es mitbekommen!')
})
element2_parent.addEventListener('click', () => {
  console.log('element2_parent hat es mitbekommen!')
})
