## Aufgabe 1: (Flask-Redis-App)

► Ziel von diesem Projekt ist es eine Webanwendung bestehend aus Frontend (Flask) und Backend (Redis) sowie einem Proxy-Server mit Hilfe von docker compose auszuführen  
► Die Flask-Anwendung ist mit einer Redis-Datenbank verbunden, in der die Seitenaufrufe gezählt werden  
► Die Flask-Anwendung enthält Unterseiten (/visits und /visits/reset), wofür Nginx bereits entsprechend konfiguriert worden ist

### Anleitung

► Schreibe die compose.yaml, in der du drei Services definierst: Frontend, Backend und Proxy-Server  
► Für deinen Backend-Service verwendest du das Standard-Redis-Image, bei den anderen beiden Services nutzt du deine anhand der beiden Dockerfiles gebauten Images  
► Damit sich alle Container richtig verbinden können und deine Anwendung auch wirklich läuft, ist es entscheidend deinen Frontend- und deinen Backend-Service richtig zu benennen:  
&nbsp;&nbsp;&nbsp;&nbsp;► Den Namen vom Frontend-Service kannst du aus der nginx-proxy/nginx.conf erschließen  
&nbsp;&nbsp;&nbsp;&nbsp;► Den Namen vom Backend-Service kannst du aus der flask-
app/app.py erschließen
