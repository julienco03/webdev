class KindKonto extends Konto {
  constructor(iban, inhaber, einzahlung) {
    // Durch 'super' kann man den Elternkonstruktor nutzen
    super(iban, inhaber, einzahlung)
    this._limit = 0
  }

  // Durch 'super' kann man die Logik aus der Methode der Elternklasse übernehmen
  abheben(auszahlung) {
    if (this._saldo_pruefen(auszahlung)) {
      super.abheben(auszahlung)
    } else {
      console.log('Auszahlung nicht möglich: Limit überschritten!')
    }
  }

  // Der '_' suggeriert, dass das eine private Hilfsmethode ist
  _saldo_pruefen(auszahlung) {
    return this._saldo - auszahlung >= this._limit ? true : false
  }
}
