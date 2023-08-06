## MariaDB und phpmyadmin verbinden

Netzwerk erstellen

    docker network create blog-network

MariaDB-Container starten

    docker run -d --network blog-network -e MARIA_ROOT_PASSWORD=password123 --name my-mariadb mariadb

IP-Adresse des Containers holen

    docker network inspect my-mariadb // liefert 172.20.0.2

phpmyadmin-Container starten und mit MariaDB über _PMA_HOST_ verbinden

    docker run -d -e PMA_HOST=172.20.0.2 -p 8080:80 --name phpmyadmin phpmyadmin

► Über _localhost:8080_ kann schließlich auf die Datenbank zugegriffen werden. Das funktioniert aber noch nicht ganz, da phpmyadmin nicht im _blog-network_, sondern im bridge-Netzwerk läuft. Daher muss folgendes getan werden:

    docker network connect blog-network phpmyadmin // mit blog-network
    docker network disconnect bridge phpmyadmin // vom bridge-NEtwerk trennen

## WordPress und MariaDB verbinden

► Zuerst ist es notwendig, einen Nutzer in phpadmin zu erstellen. Das macht man über _User Accounts -> Add user account_. Wichtig ist, dass man hierbei die Option _Create database with same name and grant all priviliges_ aktiviert.

WordPress-Container starten

    docker run -d --network blog-network -e WORDPRESS_DB_HOST=172.20.0.2 -e WORDPRESS_DB_USER=blog -e WORDPRESS_DB_PASSWORD="0D[GWYXz3rm" -e WORDPRESS_DB_NAME=blog -p 8081:80 wordpress

► Nun kann man in phpmyadmin alle WordPress-Daten in der Datenbank sehen.
