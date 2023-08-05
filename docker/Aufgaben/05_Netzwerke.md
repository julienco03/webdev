## Aufgabe - MongoDB & MongoExpress

So ähnlich wie bei der Verbindung von einem mariaDB-Container und einem phpMyAdmin-Container geht es hier darum eine Datenbank (MongoDB) und eine grafisches Webinterface für diese Datenbank (Mongo Express) auf Container-Ebene in einem Netzwerk miteinander zu verbinden.

Erstelle ein bridge-Netzwerk namens mongo-net und starte darin einen Mongo-Container mit dem Namen my-mongo. Verbinde im Zuge dessen auch das Verzeichnis /data/db im Container direkt mit einem Volume mongo-vol.

    docker network create mongo-net
    docker run -d --network mongo-net -v mongo-vol:/data/db --name my-mongo mongo

Starte nun, ebenfalls in dem Netzwerk mongo-net, einen Mongo Express Container, den du zum MongoDB-Container verbindest. Denke daran, einen Port vom Host auf den Port 8081 des Mongo Express – Containers weiterzuleiten, damit du die Mongo-Express-Oberfläche aufrufen kannst  
► Damit Mongo Express sich zu MongoDB verbindet, müssen Umgebungsvariablen gesetzt werden  
► Öffne schließlich die Anwendung im Browser

    docker run --network mongo-net -e ME_CONFIG_MONGODB_SERVER=my-mongo -p 8081:8081 mongo-express
