'use strict'

class Eingabeformular {
  constructor() {
    this.html = this._html_generieren()
  }

  _absenden_event_hinzufuegen(eingabeformular) {
    let formular = eingabeformular.querySelector('#eingabeformular')
    formular.addEventListener('submit', (e) => {
      e.preventDefault() // verhindere das Standardverhalten beim Absenden des Formulars
      let formular_daten = this._formulardaten_verarbeiten(this._formulardaten_holen())
      let formular_fehler = this._formulardaten_validieren(formular_daten)
      this._fehlerbox_entfernen()
      if (formular_fehler.length === 0) {
        haushaltsbuch.eintrag_hinzufuegen(formular_daten)
        formular.reset()
        this._datum_aktualisieren()
      } else {
        this._fehlerbox_anzeigen(formular_fehler)
      }
    })
  }

  _formulardaten_holen() {
    return {
      titel: document.querySelector('#titel').value,
      einnahme: document.querySelector('#einnahme').checked,
      betrag: document.querySelector('#betrag').valueAsNumber,
      datum: document.querySelector('#datum').valueAsDate,
    }
  }

  _formulardaten_verarbeiten(formulardaten) {
    return {
      titel: formulardaten.titel.trim(),
      typ: formulardaten.einnahme === true ? 'einnahme' : 'ausgabe',
      betrag: formulardaten.betrag * 100,
      datum: formulardaten.datum,
    }
  }

  _formulardaten_validieren(formulardaten) {
    let fehler = []
    if (formulardaten.titel === '') {
      fehler.push('Kein Titel!')
    }
    if (isNaN(formulardaten.betrag)) {
      fehler.push('Kein Betrag!')
    }
    if (formulardaten.datum === null) {
      fehler.push('Kein Datum!')
    }
    return fehler
  }

  _datum_aktualisieren() {
    // Setze das Datum nach Absenden des Formulars automatisch wieder auf den heutigen Tag
    let datum_input = document.querySelector('#datum')
    if (datum_input !== null) {
      datum_input.valueAsDate = new Date()
    }
  }

  _html_fehlerbox_generieren(formular_fehler) {
    let fehlerbox = document.createElement('div')
    fehlerbox.setAttribute('class', 'fehlerbox')

    let fehlertext = document.createElement('span')
    fehlertext.textContent = 'Folgende Felder wurden nicht korrekt ausgefüllt:'
    fehlerbox.insertAdjacentElement('afterbegin', fehlertext)

    let fehlerliste = document.createElement('ul')
    formular_fehler.forEach((fehler) => {
      let fehler_listenpunkt = document.createElement('li')
      fehler_listenpunkt.textContent = fehler
      fehlerliste.insertAdjacentElement('beforeend', fehler_listenpunkt)
    })
    fehlerbox.insertAdjacentElement('beforeend', fehlerliste)

    return fehlerbox
  }

  _fehlerbox_anzeigen(formular_fehler) {
    let eingabeformular_container = document.querySelector('#eingabeformular')
    if (eingabeformular_container !== null) {
      eingabeformular_container.insertAdjacentElement(
        'afterbegin',
        this._html_fehlerbox_generieren(formular_fehler)
      )
    }
  }

  _fehlerbox_entfernen() {
    let fehlerbox = document.querySelector('.fehlerbox')
    if (fehlerbox !== null) {
      fehlerbox.remove()
    }
  }

  _html_generieren() {
    let eingabeformular = document.createElement('section')
    eingabeformular.setAttribute('id', 'eingabeformular-container')
    eingabeformular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
        <div class="eingabeformular-zeile">
          <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div class="eingabeformular-zeile">
          <div class="titel-typ-eingabe-gruppe">
            <label for="titel">Titel</label>
            <input
              type="text"
              id="titel"
              form="eingabeformular"
              name="titel"
              placeholder="z.B. Einkaufen"
              size="10"
              title="Titel des Eintrags"
              required
            />
            <input
              type="radio"
              id="einnahme"
              name="typ"
              value="einnahme"
              form="eingabeformular"
              title="Typ des Eintrags"
              checked
            />
            <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
            <input
              type="radio"
              id="ausgabe"
              name="typ"
              value="ausgabe"
              form="eingabeformular"
              title="Typ des Eintrags"
            />
            <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
          </div>
        </div>
        <div class="eingabeformular-zeile">
          <div class="betrag-datum-eingabe-gruppe">
            <label for="betrag">Betrag</label>
            <input
              type="number"
              id="betrag"
              name="betrag"
              form="eingabeformular"
              placeholder="z.B. 10,42"
              size="10"
              step="0.01"
              title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)"
              required
            />
            <label for="datum">Datum</label>
            <input
              type="date"
              id="datum"
              name="datum"
              form="eingabeformular"
              placeholder="jjjj-mm-tt"
              size="10"
              title="Datum des Eintrags (Format: jjjj-mm-tt)"
            />
          </div>
        </div>
        <div class="eingabeformular-zeile">
          <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`
    this._absenden_event_hinzufuegen(eingabeformular)
    return eingabeformular
  }

  anzeigen() {
    let navigationsleiste = document.querySelector('body')
    if (navigationsleiste !== null) {
      navigationsleiste.insertAdjacentElement('afterbegin', this._html_generieren())
      this._datum_aktualisieren()
    }
  }
}
