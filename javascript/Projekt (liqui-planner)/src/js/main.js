'use strict'

// Gesamtbilanz anlegen
const haushaltsbuch = {
  gesamtbilanz: new Map(),
  eintraege: [],
  fehler: [],

  eintrag_erfassen() {
    this.fehler = []
    let neuer_eintrag = new Map()
    neuer_eintrag.set('titel', this.titel_verarbeiten(prompt('Titel:')))
    neuer_eintrag.set('typ', this.typ_verarbeiten(prompt('Typ (Einnahme oder Ausgabe):')))
    neuer_eintrag.set('betrag', this.betrag_verarbeiten(prompt('Betrag (in Euro):')))
    neuer_eintrag.set('datum', this.datum_verarbeiten(prompt('Datum (YYYY-MM-DD):')))
    neuer_eintrag.set('timestamp', Date.now())
    if (this.fehler.length === 0) {
      this.eintraege.push(neuer_eintrag)
    } else {
      console.log('Folgende Fehler wurden gefunden:\n')
      this.fehler.forEach((fehler) => {
        console.log('>> ' + fehler)
      })
    }
  },

  titel_verarbeiten(titel) {
    if (titel != null) {
      titel = titel.trim()
    }
    if (this.titel_validieren(titel)) {
      return titel
    } else {
      this.fehler.push('Kein Titel angegeben!')
    }
  },
  titel_validieren(titel) {
    if (titel !== '') {
      return true
    } else {
      return false
    }
  },

  typ_verarbeiten(typ) {
    if (typ != null) {
      typ = typ.trim().toLowerCase()
    }
    if (this.typ_validieren(typ)) {
      return typ
    } else {
      this.fehler.push(`Ungültiger Eintrags-Typ angegeben: "${typ}"`)
    }
  },
  typ_validieren(typ) {
    if (typ != null && typ.match(/^(?:einnahme|ausgabe)$/)) {
      return true
    } else {
      return false
    }
  },

  betrag_verarbeiten(betrag) {
    if (betrag != null) {
      betrag = betrag.trim()
    }
    if (this.betrag_validieren(betrag)) {
      return parseFloat(betrag.replace(',', '.')) * 100
    } else {
      this.fehler.push(`Ungültiger Betrag: ${betrag} €`)
    }
  },
  betrag_validieren(betrag) {
    if (betrag != null && betrag.match(/^\d+(?:(?:,|.)\d{1,2})?$/) !== null) {
      return true
    } else {
      return false
    }
  },

  datum_verarbeiten(datum) {
    if (datum != null) {
      datum = datum.trim()
    }
    if (this.datum_validieren(datum)) {
      return new Date(`${datum} 00:00:00`)
    } else {
      this.fehler.push(`Ungültiges Datum: "${datum}"`)
      return false
    }
  },
  datum_validieren(datum) {
    if (datum != null && datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
      return true
    } else {
      return false
    }
  },

  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag1, eintrag2) {
      if (eintrag1.get('datum') > eintrag2.get('datum')) {
        return -1
      } else if (eintrag1.get('datum') < eintrag2.get('datum')) {
        return 1
      } else {
        return 0
      }
    })
  },

  html_eintrag_generieren(eintrag) {
    // <li class="..."></li>
    let listenpunkt = document.createElement('li')
    if (eintrag.get('typ') === 'einnahme') {
      listenpunkt.setAttribute('class', 'einnahme')
    } else if (eintrag.get('typ') === 'ausgabe') {
      listenpunkt.setAttribute('class', 'ausgabe')
    }
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

    return listenpunkt
  },

  eintraege_anzeigen() {
    // entferne evtl. vorhandene Monatslisten
    document.querySelectorAll('.monatsliste ul').forEach((eintragsliste) => {
      eintragsliste.remove()
    })
    // füge die Einträge in die neue Monatsliste ein
    let eintragsliste = document.createElement('ul')
    for (const eintrag of this.eintraege) {
      eintragsliste.insertAdjacentElement('beforeend', this.html_eintrag_generieren(eintrag))
    }
    // füge die Monatsliste in article.monatliste ein
    document.querySelector('.monatsliste').insertAdjacentElement('afterbegin', eintragsliste)
  },

  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map()
    neue_gesamtbilanz.set('einnahmen', 0)
    neue_gesamtbilanz.set('ausgaben', 0)
    neue_gesamtbilanz.set('bilanz', 0)
    this.eintraege.forEach(function (eintrag) {
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
  },

  html_gesamtbilanz_generieren() {
    let gesamtbilanz = document.createElement('gesamtbilanz')
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
  },

  gesamtbilanz_anzeigen() {
    // entferne evtl. vorhandene Gesamtbilanz und füge sie neu ein
    document.querySelector('#gesamtbilanz').remove()
    let body = document.querySelector('body')
    body.insertAdjacentElement('beforeend', this.html_gesamtbilanz_generieren())
  },

  eintrag_hinzufuegen() {
    do {
      this.eintrag_erfassen()
      if (this.fehler.length === 0) {
        this.eintraege_sortieren()
        this.eintraege_anzeigen()
        this.gesamtbilanz_erstellen()
        this.gesamtbilanz_anzeigen()
      }
    } while (confirm('Weiteren Eintrag hinzufügen?'))
  },
}

haushaltsbuch.eintrag_hinzufuegen()
