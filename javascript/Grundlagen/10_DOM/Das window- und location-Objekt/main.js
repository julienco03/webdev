'use strict'

/**
 * Eigenschaften des window-Objekts
 * Info: statt window.property kann auch property verwendet werden
 */

// Breite und Höhe des Viewports inkl. Scrollbar, z.B. 955 812
console.log(innerWidth, innerHeight)

// Breite und Höhe des Fensters inkl. Scrollbar, z.B. 970 1111
console.log(outerWidth, outerHeight)

// Scroll-Zustand, z.B. 0 177
console.log(scrollX, scrollY)

// Informationen zum aktuellen Speicherort des Dokuments (read-only)
console.log(location.hostname) // 127.0.0.1
console.log(location.host) // 127.0.0.1:5500
console.log(location.href) // http://127.0.0.1:5500/javascript/Grundlagen/10_DOM/Das%20window-Objekt/index.html

/**
    Methoden des window-Objekts
    Info: statt window.method() kann auch method() verwendet werden


    Unterbricht das Programm mit einem Fenster bis "Ok" ausgewählt wird
        alert('ACHTUNG!')

    Unterbricht das Programm mit einem Fenster bis "Ok" oder "Abbrechen" ausgewählt wird
        confirm('Möchten Sie fortfahren?')

    Unterbricht das Programm mit einem Fenster bis "Ok" oder "Abbrechen" ausgewählt wird (+ optionale Eingabe)
        prompt("Wie geht's?")

    Öffnet das "Drucken"-Fenster
        print()

    Öffnet ein Fenster mit der angegeben URL, solange Pop-Ups erlaubt sind
        open('https://www.google.de')

    Fenster wird geschlossen
        close()

    Gibt eine CSSStyleDeclaration zurück
        getComputedStyle(object)
 */
