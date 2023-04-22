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
  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag1, eintrag2) {
      if (eintrag1.datum > eintrag2.datum) {
        return -1;
      } else if (eintrag1.datum < eintrag2.datum) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  eintraege_ausgeben() {
    console.clear();
    this.eintraege.forEach((eintrag) => {
      console.log(
        `Titel: ${eintrag.titel}\n` +
          `Typ: ${eintrag.typ}\n` +
          `Betrag: ${eintrag.betrag} ct\n` +
          `Datum: ${eintrag.datum}`
      );
    });
  },
  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = {
      ausgaben: 0,
      einnahmen: 0,
      bilanz: 0,
    };
    this.eintraege.forEach(function (eintrag) {
      switch (eintrag.typ) {
        case "Einnahme":
          neue_gesamtbilanz.einnahmen += eintrag.betrag;
          neue_gesamtbilanz.bilanz += eintrag.betrag;

          break;
        case "Ausgabe":
          neue_gesamtbilanz.ausgaben += eintrag.betrag;
          neue_gesamtbilanz.bilanz -= eintrag.betrag;
          break;
        default:
          console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt.`);
          break;
      }
    });
    this.gesamtbilanz.ausgaben = neue_gesamtbilanz.ausgaben;
    this.gesamtbilanz.einnahmen = neue_gesamtbilanz.einnahmen;
    this.gesamtbilanz.bilanz = neue_gesamtbilanz.bilanz;
  },
  gesamtbilanz_ausgeben() {
    console.log(
      `Einnahmen: ${this.gesamtbilanz.einnahmen} ct\n` +
        `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n` +
        `Bilanz: ${this.gesamtbilanz.bilanz} ct\n` +
        `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
    );
  },
  eintrag_hinzufuegen() {
    do {
      this.eintrag_erfassen();
      this.eintraege_sortieren();
      this.eintraege_ausgeben();
      this.gesamtbilanz_erstellen();
      this.gesamtbilanz_ausgeben();
    } while (confirm("Weiteren Eintrag hinzufügen?"));
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
