## Aufgabe - Copy & Bind Mount

► Erstelle einen Webserver mit PHP und Apache (Image: php, z.B.
php:8.1-apache), und liefere darüber eine PHP-Webseite aus
► Schaue dazu auf Dockerhub nach, in welchem Pfad der Webserver die Daten erwartet  
► Das Projekt kann ein Ordner mit einer "index.php"-Datei sein, mit folgendem Inhalt: \<?php phpinfo(); ?\>

    docker run -d --name php-copy -p 5050:80 php:8.1-apache

Aufgabe 1)  
► Kopiere das Projekt in den Container hinein

    docker cp index.php php-copy:/var/www/html

Aufgabe 2)  
► Erstelle ein Bind-Mount (wahlweise readonly), und liefere
darüber das Projekt aus

    docker run -d --name php-bind -p 5051:80 -v ${PWD}:/var/www/html:ro php:8.1-apache
    ALTERNATIV:
    docker run -d --name php-bind2 -p 5052:80 --mount type=bind,source=${PWD},destination=/var/www/html,readonly php:8.1-apache

► Was könnten die Vor- und Nachteile von Copy bzw. Bind-Mount
sein?

Copy:

- Vorteil: _docker cp_ kopiert die Dateien in den _writable layer_ des Containers => Zugriffe sind performant
- Nachteil: Änderungen müssen manuell übernommen werden (oft gut!)

Bind:

- Vorteil: Änderungen müssen nicht übertragen werden
- Nachteil: Änderungen an Dateien müssen direkt im Container sichtbar sein. Ggf. müssen auch Änderungen aus dem Container auf den Host zurückgeschrieben werden => kostet zusätzliche Performance
