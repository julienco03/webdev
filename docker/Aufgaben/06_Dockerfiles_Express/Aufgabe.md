## Aufgabe: Express.js-App

► Schreibe das Dockerfile, um die Anwendung zu containerisieren
► Erzeuge ein Image auf Basis von deinem Dockerfile
► Starte einen Container, in dem die App ausgeführt wird und öffne sie im Browser

Tipps:  
► Als Basis verwendest du ein Node-Image  
► Ein sinnvoller Speicherort in dem Node-Image für die App-Dateien wäre etwa das Verzeichnis /web-app  
► Denke daran, sowohl die app.js als auch die package.json zu kopieren  
► Um die Dependencies zu installieren brauchst du hier den Befehl npm install  
&nbsp;&nbsp;&nbsp;&nbsp;► Bezieht sich auf die package.json -> die muss dann schon im Image vorhanden sein  
&nbsp;&nbsp;&nbsp;&nbsp;► Sinngemäß vergleichbar mit pip3 install -r requirements.txt bei der Flask-App  
► Den Web-Server kannst du per node app.js starten, es sind hier keine zusätzlichen Parameter notwendig!  
► Der Container-Port ist 8080 (siehe app.js)
