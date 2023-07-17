import { objekt_anzeigen } from './utils/helper.js'
// Import eines benannten Exports
import { max, moritz } from './utils/settings.js'
// Import eines benannten Exports
import { KiKo } from './classes/Kinderkonto.js'
// Benannter Import eines Exports
import { Konto as KONTO } from './classes/Konto.js'

objekt_anzeigen(new KONTO('DE6206752564419854', max.name, max.vermoegen))
objekt_anzeigen(new KiKo('DE6206752564419740', moritz.name, moritz.vermoegen, 500))
