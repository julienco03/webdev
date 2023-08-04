## Aufgabe 1: (Images)

► Lade das aktuelle node:alpine-Image herunter

    docker pull node:alpine

► Benenne das heruntergeladene Image in small-node um

    docker tag node:alpine small-node

► Erzeuge und starte einen Node.js-Container basierend auf dem small-node-Image, welcher automatisch wieder gelöscht werden soll. Starte dann per docker exec in diesem Container eine Bash

    docker run -it --rm small-node

► Welche Fehlermeldung tritt dabei auf?

    docker exec CONTAINER_ID bash
    >> OCI runtime exec failed: exec failed: unable to start container process: exec: "bash": executable file not found in $PATH: unknown

► Lösche beide Node.js-Images, die auf Alpine basieren

    docker image rm --force node:alpine small-node

## Aufgabe 2: (Container)

► Erzeuge einen neuen Node.js-Container namens test-container auf Grundlage des Standard-Node.js-Images und führe darin die bash aus

    docker run -it --name test-container node bash

► Steuere mit der bash im Container den Ordner etc an und finde die Version
der zugrunde liegenden Debian-Distribution heraus (steht in der Datei:
"debian_version").

    cd etc/
    cat debian_version
    exit

► Benenne dann den Container test-container um in my-node-app

    docker rename test-container my-node-app

► Erstelle dann dort dann den Ordner /app

    docker start -i my-node-app bash
    mkdir app

► Wechsel anschließend in diesen Ordner und erstelle eine Datei "main.js"

    cd app/
    apt-get update && apt-get install -y nano
    nano main.js // + Befehl reinschreiben

► Führe anschließend dein Skript via node main.js aus

    node main.js
