'use strict'

const eingabeformular = {
  formulardaten_holen() {
    return {
      titel: document.querySelector('#titel').value,
      einnahme: document.querySelector('#einnahme').checked,
      ausgabe: document.querySelector('#ausgabe').checked,
      betrag: document.querySelector('#betrag').value,
      datum: document.querySelector('#datum').valueAsDate,
    }
  },

  formulardaten_verarbeiten(formulardaten) {
    return {
      titel: formulardaten['titel'].trim(),
      typ: formulardaten.einnahme === true ? 'einnahme' : 'ausgabe',
      betrag: parseFloat(formulardaten.betrag) * 100,
      datum: formulardaten.datum,
    }
  },

  absenden_event_hinzufuegen(eingabeformular) {
    eingabeformular.querySelector('#eingabeformular').addEventListener('submit', (e) => {
      e.preventDefault()
      let formulardaten = this.formulardaten_verarbeiten(this.formulardaten_holen())
      console.log(formulardaten)
    })
  },

  html_generieren() {
    let section = document.createElement('section')
    section.setAttribute('id', 'eingabeformular-container')
    section.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
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
           />
           <input
             type="radio"
             id="einnahme"
             name="typ"
             value="einnahme"
             form="eingabeformular"
             title="Typ des Eintrags"
           />
           <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
           <input
             type="radio"
             id="ausgabe"
             name="typ"
             value="ausgabe"
             form="eingabeformular"
             title="Typ des Eintrags"
             checked
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

    this.absenden_event_hinzufuegen(section)
    return section
  },

  anzeigen() {
    document
      .querySelector('#navigationsleiste')
      .insertAdjacentElement('afterend', this.html_generieren())
  },
}
