'use strict'

let k = new Konto('DE230472309572493075', 'Max Mustermann', 1500)

let k_als_json_string = JSON.stringify(k)
// Ausgabe: {"iban":"DE230472309572493075","inhaber":["Max Mustermann"],"saldo":1500,"aktiv":true}

let k_als_objekt = JSON.parse(k_als_json_string)
// Ausgabe: {iban: 'DE230472309572493075', inhaber: Array(1), saldo: 1500, aktiv: true}
// Wichtig: k_als_objekt ist keine Instanz von Konto, sondern nur ein einfaches Objekt

let k_neu = new Konto(k_als_objekt.iban, k_als_objekt.inhaber, k_als_objekt.saldo)
// Ausgabe: Konto {iban: 'DE230472309572493075', inhaber: Array(1), saldo: 1500, aktiv: true}
