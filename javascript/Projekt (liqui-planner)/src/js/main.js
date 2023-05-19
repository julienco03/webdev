"use strict";

// Gesamtbilanz anlegen
const haushaltsbuch = {
  gesamtbilanz: new Map(),
  eintraege: [],
  fehler: [],

  eintrag_erfassen() {
    this.fehler = [];
    let neuer_eintrag = new Map();
    neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel:")));
    neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ (Einnahme oder Ausgabe):")));
    neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag (in Euro):")));
    neuer_eintrag.set("datum", this.datum_verarbeiten(prompt("Datum (YYYY-MM-DD):")));
    neuer_eintrag.set("timestamp", Date.now());
    if (this.fehler.length === 0) {
      this.eintraege.push(neuer_eintrag);
    } else {
      console.log("Folgende Fehler wurden gefunden:\n");
      this.fehler.forEach((fehler) => {
        console.log(">> " + fehler);
      });
    }
  },

  titel_verarbeiten(titel) {
    titel = titel.trim();
    if (this.titel_validieren(titel)) {
      return titel;
    } else {
      this.fehler.push("Kein Titel angegeben!");
    }
  },
  titel_validieren(titel) {
    if (titel !== "") {
      return true;
    } else {
      return false;
    }
  },

  typ_verarbeiten(typ) {
    typ = typ.trim().toLowerCase();
    if (this.typ_validieren(typ)) {
      return typ;
    } else {
      this.fehler.push(`Ungültiger Eintrags-Typ angegeben: "${typ}"`);
    }
  },
  typ_validieren(typ) {
    if (typ.match(/^(?:einnahme|ausgabe)$/)) {
      return true;
    } else {
      return false;
    }
  },

  betrag_verarbeiten(betrag) {
    betrag = betrag.trim();
    if (this.betrag_validieren(betrag)) {
      return parseFloat(betrag.replace(",", ".")) * 100;
    } else {
      this.fehler.push(`Ungültiger Betrag: ${betrag} €`);
    }
  },
  betrag_validieren(betrag) {
    if (betrag.match(/^\d+(?:(?:,|.)\d{1,2})?$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  datum_verarbeiten(datum) {
    datum = datum.trim();
    if (this.datum_validieren(datum)) {
      return new Date(`${datum} 00:00:00`);
    } else {
      this.fehler.push(`Ungültiges Datum: "${datum}"`);
      return false;
    }
  },
  datum_validieren(datum) {
    if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag1, eintrag2) {
      if (eintrag1.get("datum") > eintrag2.get("datum")) {
        return -1;
      } else if (eintrag1.get("datum") < eintrag2.get("datum")) {
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
        `Titel: ${eintrag.get("titel")}\n` +
          `Typ: ${eintrag.get("typ")}\n` +
          `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n` +
          `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}\n` +
          `Timestamp: ${eintrag.get("timestamp")}`
      );
    });
  },

  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("bilanz", 0);
    this.eintraege.forEach(function (eintrag) {
      switch (eintrag.get("typ")) {
        case "einnahme":
          neue_gesamtbilanz.set(
            "einnahmen",
            neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag")
          );
          neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
          break;
        case "ausgabe":
          neue_gesamtbilanz.set(
            "ausgaben",
            neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag")
          );
          neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
          break;
        default:
          console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
          break;
      }
    });
    this.gesamtbilanz = neue_gesamtbilanz;
  },

  gesamtbilanz_ausgeben() {
    console.log(
      `Einnahmen: ${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2)} €\n` +
        `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n` +
        `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n` +
        `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") / 100 >= 0}`
    );
  },

  eintrag_hinzufuegen() {
    do {
      this.eintrag_erfassen();
      if (this.fehler.length === 0) {
        this.eintraege_sortieren();
        this.eintraege_ausgeben();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_ausgeben();
      }
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
