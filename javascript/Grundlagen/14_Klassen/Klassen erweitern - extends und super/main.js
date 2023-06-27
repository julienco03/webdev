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

let konto = new Konto('DE230472309572493075', 'Max Mustermann', 1500)
konto.einzahlen(500)
konto.abheben(4000)

let kindkonto = new KindKonto('DE23047230957242323', 'Mona Mustermann', 250)
kindkonto.abheben(200)
console.log(kindkonto.kontostand_abfragen()) // 50

kindkonto.abheben(200) // Konsole: Kontostand zu niedrig
console.log(kindkonto.kontostand_abfragen()) // 50
