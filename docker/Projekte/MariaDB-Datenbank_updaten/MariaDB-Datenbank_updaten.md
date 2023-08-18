## Datenbanksoftware ohne Datenverlust aktualisieren

► Wir wollen einen Container updaten, in dem eine MariaDB läuft  
► Dazu werden wir die Datenbank in einem Volume sichern  
► Wir updaten den Container, indem wir einen neuen Container mit einer neuen Version
von MariaDB erstellen  
► Wichtig: MariaDB ist i.d.R. nicht abwärtskompatibel: Wenn du stattdessen die Version
herabstufst, könnte der Container abstürzen!

    1. Container mit Volume 'db' erstellen und Root Password setzen
    docker run -it -v db:/var/lib/mysql --name db-old -e MARIA_ROOT_PASSWORD=password123 mariadb:10.5

    2. Vorhandene MySQL-Datenbanken anzeigen
    Variante 1
    docker exec -it db-old bash // Bash starten
    mysql -u root -p // MySQL-Shell starten und Passwort eingeben
    SHOW databases; // Datenbanken anzeigen

    Variante 2 (direkt MySQL-Shell starten)
    docker exec -it db-old -u root -ppassword123

    Variante 3 (direkt in die MySQL-Shell + SQL-Datei in Datenbank reinschreiben)
    [Windows Terminal] Get-Content db.sql | docker container exec -i db-old mysql -u root -ppasswort123
    [Linux Shell] docker container exec -i db-old mysql -u root -ppasswort123 < db.sql

    3. Neuen Container mit neuester Version von MariaDB erstellen (mit dem selben Volume 'db')
    docker run -it -v db:/var/lib/mysql --name db-new -e MARIA_ROOT_PASSWORD=password123 mariadb:latest

    4. Prüfen, ob alle Daten im neuen Container vorhanden sind
    docker exec -it db-new mysql -u root -ppassword123
    SHOW databases;
    USE docker_containers_db;
    SHOW tables;
