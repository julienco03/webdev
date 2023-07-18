import { objekt_anzeigen } from './utils/helper.js'
import { person_1, person_2 } from './utils/settings.js'
// Beide Module werden gemeinsam importiert (spart Schreibarbeit)
import { Konto, Kinderkonto } from './classes/Konten.js'
import * as Konten from './classes/Konten.js'

objekt_anzeigen(
  new Konten.Konto('DE6206752564487877676897819854', person_1.name, person_1.vermoegen)
)
objekt_anzeigen(
  new Konten.Kinderkonto('DE6206752564487877676897819854', person_2.name, person_2.vermoegen, 500)
)
