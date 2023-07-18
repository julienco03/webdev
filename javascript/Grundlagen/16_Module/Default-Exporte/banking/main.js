// Import eines (unbenannten) default-Exports
// Lange Schreibweise: import { default as obj_anzeigen } from './utils/helper.js'
import obj_anzeigen from './utils/helper.js'

// Import eines default-Exports
import KiKo from './classes/Kinderkonto.js'

// Import eines benannten Exports
import { max, moritz } from './utils/settings.js'
// Benannter Import eines Exports
import { Konto as KONTO } from './classes/Konto.js'

obj_anzeigen(new KONTO('DE6206752564419854', max.name, max.vermoegen))
obj_anzeigen(new KiKo('DE6206752564419740', moritz.name, moritz.vermoegen, 500))
