'use strict'

class Fehler {
  constructor(fehlertext, formular_fehler) {
    this._fehlertext = fehlertext
    this._formular_fehler = formular_fehler
    this._html = this._html_generieren()
  }

  _html_generieren() {
    let fehlerbox = document.createElement('div')
    fehlerbox.setAttribute('class', 'fehlerbox')

    let fehlertext = document.createElement('span')
    fehlertext.textContent = this._fehlertext
    fehlerbox.insertAdjacentElement('afterbegin', fehlertext)

    let fehlerliste = document.createElement('ul')
    this._formular_fehler.forEach((fehler) => {
      let fehler_listenpunkt = document.createElement('li')
      fehler_listenpunkt.textContent = fehler
      fehlerliste.insertAdjacentElement('beforeend', fehler_listenpunkt)
    })
    fehlerbox.insertAdjacentElement('beforeend', fehlerliste)

    return fehlerbox
  }

  entfernen() {
    let fehlerbox = document.querySelector('.fehlerbox')
    if (fehlerbox !== null) {
      fehlerbox.remove()
    }
  }

  anzeigen() {
    let eingabeformular_container = document.querySelector('#eingabeformular-container')
    if (eingabeformular_container !== null) {
      eingabeformular_container.insertAdjacentElement('afterbegin', this._html)
    }
  }
}
