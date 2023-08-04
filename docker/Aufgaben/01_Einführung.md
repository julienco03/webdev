## Aufgabe 1

► Starte in Docker einen Node.js-Container  
► Der Docker-Befehl ist sehr ähnlich zu dem Beispiel mit dem Python-Container:
du brauchst in dem Docker-Befehl nur Python durch node auszutauschen, beachte dabei aber die Flag!

    docker run -it node

## Aufgabe 2

► Starte in Docker einen (neuen) Ubuntu-Container  
► Aktualisiere den Paketmanager apt und installiere dann das Programm tree  
► Führe dann den Befehl tree im Stammverzeichnis aus

    docker run -it ubuntu

Bash:

    apt-get update && apt-get install -y tree
    cd /
    tree
