## Aufgabe - HTML-Seite im nginx-Container anpassen

Ziel dieser Aufgabe ist es, die Willkommensseite vom nginx-Container, die
standardmäßig im Browser angezeigt wird, zu modifizieren

► Starte dazu einen nginx-Container und verbinde einen beliebigen, freien Port zu ihm  
► Erinnerung: Der nginx-Webserver erwartet eingehende Verbindungen auf Port 80!

    // Es empfiehlt sich -d ("detached") als Flag zu nutzen, damit Nginx im Hintergrund läuft
    // Das Flag -it funktioniert auch, aber die Ausgabe von Nginx wird im Terminal angezeigt
    docker run -d -p 80:80 --name my-nginx nginx

► Greife auf die bash von deinem nginx-Container zu (während der Webserver läuft)

    docker exec -it my-nginx bash

► Navigiere über die bash in das Verzeichnis /usr/share/nginx/html

    cd /usr/share/nginx/html

► Verändere dann den Inhalt der Datei index.html, speichere die Änderungen ab und
aktualisiere die URL in deinem Browser  
► Dazu kann es wie üblich hilfreich sein, den Editor nano nachzuinstallieren

    apt-get update && apt-get install -y nano
    nano index.html // + Datei abändern
