'use strict'

class Haushaltsbuch {
  constructor() {
    this._eintraege = []
    this._monatslistensammlung = new Monatslistensammlung()
    this._gesamtbilanz = new Gesamtbilanz()
  }

  eintrag_hinzufuegen(formulardaten) {
    let neuer_eintrag = new Eintrag(
      formulardaten.titel,
      formulardaten.typ,
      formulardaten.betrag,
      formulardaten.datum
    )
    this._eintraege.push(neuer_eintrag)
    this._eintraege_sortieren()
    this._eintraege_anzeigen()
    this._gesamtbilanz_erstellen()
    this._gesamtbilanz_anzeigen()
  }

  _eintraege_sortieren() {
    // Einträge nach Datum absteigend sortieren
    this._eintraege.sort((eintrag1, eintrag2) => {
      if (eintrag1.datum() > eintrag2.datum()) {
        return -1
      } else if (eintrag1.datum() < eintrag2.datum()) {
        return 1
      } else {
        return 0
      }
    })
  }

  eintrag_entfernen(timestamp) {
    let index
    for (let i = 0; i < this._eintraege.length; i++) {
      if (this._eintraege[i].timestamp() === parseInt(timestamp)) {
        index = i
        break
      }
    }
    this._eintraege.splice(index, 1)
    this._eintraege_anzeigen()
    this._gesamtbilanz_erstellen()
    this._gesamtbilanz_anzeigen()
  }

  _eintraege_anzeigen() {
    // entferne vorhandene Monatslisten
    document.querySelectorAll('.monatsliste ul').forEach((eintragsliste) => eintragsliste.remove())
    // füge die einzelnen Einträge in die neue Monatsliste ein
    let eintragsliste = document.createElement('ul')
    this._eintraege.forEach((eintrag) => {
      eintragsliste.insertAdjacentElement('beforeend', eintrag.html())
    })
    // füge die neue Monatsliste in article.monatliste ein
    document.querySelector('.monatsliste').insertAdjacentElement('afterbegin', eintragsliste)
  }

  _gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map()
    neue_gesamtbilanz.set('einnahmen', 0)
    neue_gesamtbilanz.set('ausgaben', 0)
    neue_gesamtbilanz.set('bilanz', 0)
    this._eintraege.forEach((eintrag) => {
      switch (eintrag.typ()) {
        case 'einnahme':
          neue_gesamtbilanz.set('einnahmen', neue_gesamtbilanz.get('einnahmen') + eintrag.betrag())
          neue_gesamtbilanz.set('bilanz', neue_gesamtbilanz.get('bilanz') + eintrag.betrag())
          break
        case 'ausgabe':
          neue_gesamtbilanz.set('ausgaben', neue_gesamtbilanz.get('ausgaben') + eintrag.betrag())
          neue_gesamtbilanz.set('bilanz', neue_gesamtbilanz.get('bilanz') - eintrag.betrag())
          break
        default:
          console.log(`Der Typ "${eintrag.typ()}" ist nicht bekannt.`)
          break
      }
    })
    this.gesamtbilanz = neue_gesamtbilanz
  }

  _html_gesamtbilanz_generieren() {
    let gesamtbilanz = document.createElement('aside')
    gesamtbilanz.setAttribute('id', 'gesamtbilanz')
    gesamtbilanz.innerHTML = `
          <h1>Gesamtbilanz</h1>
          <div class="gesamtbilanz-zeile einnahmen">
            <span>Einnahmen:</span>
            <span>${(this.gesamtbilanz.get('einnahmen') / 100).toFixed(2)} €</span>
          </div>
          <div class="gesamtbilanz-zeile ausgaben">
            <span>Ausgaben:</span>
            <span>${(this.gesamtbilanz.get('ausgaben') / 100).toFixed(2)} €</span>
          </div>
          <div class="gesamtbilanz-zeile bilanz">
            <span>Bilanz:</span>
            <span class=${this.gesamtbilanz.get('bilanz') / 100 >= 0 ? 'positiv' : 'negativ'}>
            ${(this.gesamtbilanz.get('bilanz') / 100).toFixed(2)} €</span>
          </div>
          `
    return gesamtbilanz
  }

  _gesamtbilanz_anzeigen() {
    // entferne vorhandene Gesamtbilanz und füge sie neu ein
    if (document.querySelector('#gesamtbilanz') !== null) {
      document.querySelector('#gesamtbilanz').remove()
    }
    document
      .querySelector('body')
      .insertAdjacentElement('beforeend', this._html_gesamtbilanz_generieren())
  }
}
