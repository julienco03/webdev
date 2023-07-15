'use strict'

class Haushaltsbuch {
  constructor() {
    this._eintraege = []
    this._monatslistensammlung = new Monatslistensammlung()
    this._gesamtbilanz = new Gesamtbilanz()
  }

  eintrag_hinzufuegen(formulardaten) {
    let neuer_eintrag = new Map()
    neuer_eintrag.set('titel', formulardaten.titel)
    neuer_eintrag.set('typ', formulardaten.typ)
    neuer_eintrag.set('betrag', formulardaten.betrag)
    neuer_eintrag.set('datum', formulardaten.datum)
    neuer_eintrag.set('timestamp', Date.now())
    this._eintraege.push(neuer_eintrag)
    this._eintraege_sortieren()
    this._eintraege_anzeigen()
    this._gesamtbilanz_erstellen()
    this._gesamtbilanz_anzeigen()
  }

  _eintraege_sortieren() {
    // Einträge nach Datum absteigend sortieren
    this._eintraege.sort((eintrag1, eintrag2) => {
      if (eintrag1.get('datum') > eintrag2.get('datum')) {
        return -1
      } else if (eintrag1.get('datum') < eintrag2.get('datum')) {
        return 1
      } else {
        return 0
      }
    })
  }

  _html_eintrag_generieren(eintrag) {
    let listenpunkt = document.createElement('li')
    eintrag.get('typ') === 'einnahme'
      ? listenpunkt.setAttribute('class', 'einnahme')
      : listenpunkt.setAttribute('class', 'ausgabe')
    listenpunkt.setAttribute('data-timestamp', eintrag.get('timestamp'))

    let datum = document.createElement('span')
    datum.setAttribute('class', 'datum')
    datum.textContent = eintrag.get('datum').toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    listenpunkt.insertAdjacentElement('afterbegin', datum)

    let titel = document.createElement('span')
    titel.setAttribute('class', 'titel')
    titel.textContent = eintrag.get('titel')
    datum.insertAdjacentElement('afterend', titel)

    let betrag = document.createElement('span')
    betrag.setAttribute('class', 'betrag')
    betrag.textContent = `${(eintrag.get('betrag') / 100).toFixed(2).replace(/\./, ',')} €`
    titel.insertAdjacentElement('afterend', betrag)

    let button = document.createElement('button')
    button.setAttribute('class', 'entfernen-button')
    betrag.insertAdjacentElement('afterend', button)

    let icon = document.createElement('i')
    icon.setAttribute('class', 'fas fa-trash')
    button.insertAdjacentElement('afterbegin', icon)

    this._eintrag_entfernen_event_hinzufuegen(listenpunkt)
    return listenpunkt
  }

  _eintrag_entfernen_event_hinzufuegen(listenpunkt) {
    listenpunkt.querySelector('.entfernen-button').addEventListener('click', (e) => {
      let timestamp = e.target.parentElement.getAttribute('data-timestamp')
      this._eintrag_entfernen(timestamp)
    })
  }

  _eintrag_entfernen(timestamp) {
    let index
    for (let i = 0; i < this.eint_raege.length; i++) {
      if (this._eintraege[i].get('timestamp') === parseInt(timestamp)) {
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
      eintragsliste.insertAdjacentElement('beforeend', this._html_eintrag_generieren(eintrag))
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
      switch (eintrag.get('typ')) {
        case 'einnahme':
          neue_gesamtbilanz.set(
            'einnahmen',
            neue_gesamtbilanz.get('einnahmen') + eintrag.get('betrag')
          )
          neue_gesamtbilanz.set('bilanz', neue_gesamtbilanz.get('bilanz') + eintrag.get('betrag'))
          break
        case 'ausgabe':
          neue_gesamtbilanz.set(
            'ausgaben',
            neue_gesamtbilanz.get('ausgaben') + eintrag.get('betrag')
          )
          neue_gesamtbilanz.set('bilanz', neue_gesamtbilanz.get('bilanz') - eintrag.get('betrag'))
          break
        default:
          console.log(`Der Typ "${eintrag.get('typ')}" ist nicht bekannt.`)
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
    document.querySelector('#gesamtbilanz').remove()
    document
      .querySelector('body')
      .insertAdjacentElement('beforeend', this._html_gesamtbilanz_generieren())
  }
}
