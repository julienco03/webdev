"use strict";

// Gesamtbilanz anlegen
const haushaltsbuch = {
  gesamtbilanz: {
    ausgaben: 0,
    einnahmen: 0,
    bilanz: 0,
  },
  eintraege: [],
  eintrag_erfassen() {
    this.eintraege.push({
      titel: prompt("Titel: "),
      typ: prompt("Typ (Einnahme oder Ausgabe): "),
      betrag: parseInt(prompt("Betrag (in Cent): ")),
      datum: prompt("Datum (jjjj-mm-tt): "),
    });
  },
  eintrag_ausgeben() {
    console.log(
      `Titel: ${this.neuer_eintrag.titel}\nTyp: ${this.neuer_eintrag.typ}\nBetrag: ${this.neuer_eintrag.betrag} ct\nDatum: ${this.neuer_eintrag.datum}`
    );
  },
  eintrag_mit_gesamtbilanz_verrechnen() {
    switch (this.neuer_eintrag.typ) {
      case "Einnahme":
        this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
        this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
        break;
      case "Ausgabe":
        this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
        this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
        break;
      default:
        console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
        break;
    }
  },
  gesamtbilanz_ausgeben() {
    console.log(
      `Einnahmen: ${this.gesamtbilanz.einnahmen} ct\nAusgaben: ${
        this.gesamtbilanz.ausgaben
      } ct\nBilanz: ${this.gesamtbilanz.bilanz} ct\nBilanz ist positiv: ${
        this.gesamtbilanz.bilanz >= 0
      }`
    );
  },
  eintrag_hinzufuegen() {
    this.eintrag_erfassen();
    // this.eintrag_ausgeben();
    // this.eintrag_mit_gesamtbilanz_verrechnen();
    // this.gesamtbilanz_ausgeben();
  },
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);

// (() => {
//   eintrag_erfassen();
//   eintrag_ausgeben(titel, typ, betrag, datum);
//   eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
//   gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
// })();
