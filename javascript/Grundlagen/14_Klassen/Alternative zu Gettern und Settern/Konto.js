// Eigenschaften mit '_' sind per Konvention privat und sollten außerhalb
// der Klasse nicht direkt genutzt bzw. über Methoden genutzt werden.
// Daher kann man das 'set' und 'get' bei den Methoden weglassen

class Konto {
  constructor(iban, inhaber, einzahlung) {
    this._iban = iban
    this._inhaber = [inhaber]
    this._saldo = einzahlung
    this._aktiv = true
  }

  einzahlen(einzahlung) {
    this._saldo += einzahlung
  }

  abheben(auszahlung) {
    this._saldo -= auszahlung
  }

  kontostand_abfragen() {
    return this._saldo
  }
}

let k_1 = new Konto('DE6206752564419745', 'Peter Pseudocode', 3000)
let k_2 = new Konto('DE6206752564411123', 'Franzi Forschleifler', 2500)
let k_3 = new Konto('DE6206752564411123', 'Steffi Switchinger', 1450)
