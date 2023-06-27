class Konto {
  constructor(iban, inhaber, einzahlung) {
    this.iban = iban
    this.inhaber = [inhaber]
    this.saldo = einzahlung
    this.aktiv = true
  }

  /**
   * @param {number} einzahlung
   */
  set einzahlen(einzahlung) {
    this.saldo += einzahlung
  }

  /**
   * @param {number} auszahlung
   */
  set abheben(auszahlung) {
    this.saldo -= auszahlung
  }

  get kontostand_abfragen() {
    return this.saldo
  }
}
