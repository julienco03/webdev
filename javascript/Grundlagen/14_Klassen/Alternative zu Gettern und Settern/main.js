'use strict'

// let konto = {
//     iban: "DE6206752564419854",
//     inhaber: ["Max Mustermann"],
//     saldo: 3500,
//     aktiv: true,
//     einzahlen(einzahlung) {
//         this.saldo += einzahlung;
//     },
//     abheben(auszahlung) {
//         this.saldo -= auszahlung;
//     },
//     kontostand_abfragen() {
//         return this.saldo;
//     }
// };

let k = new Konto('DE230472309572493075', 'Max Mustermann', 1500)
k.einzahlen(500)
k.abheben(4000)

console.log(k.kontostand_abfragen())
