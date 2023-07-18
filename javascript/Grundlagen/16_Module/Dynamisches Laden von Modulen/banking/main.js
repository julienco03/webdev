import { objekt_anzeigen } from './utils/helper.js'
import { person_1, person_2 } from './utils/settings.js'
import { Konto } from './classes/Konto.js'
import { Kinderkonto } from './classes/Kinderkonto.js'

// Bei einem Click-Event auf den Button wird über das Import Statement ein Promise erzeugt, welches
// uns (bei Erfüllung) über 'then()' das zu importierende Modul als Modul-Objekt zur Verfügung stellt.
// Darüber lassen sich die Module also dynamisch nachladen.
document.querySelector('button').addEventListener('click', () => {
  import('./utils/helper.js').then((Utils) => {
    Utils.objekt_anzeigen(new Konto('DE620675256441', person_1.name, person_1.vermoegen))
    Utils.objekt_anzeigen(new Kinderkonto('DE620675256441', person_2.name, person_2.vermoegen, 500))
  })
})
console.log(import('./utils/helper.js'))
console.log(import('./utils/helper.js').then())
