FROM ubuntu

# vim muss erst nachinstalliert werden
RUN apt-get update && apt-get install -y vim

WORKDIR /app

# vim wird immer ausgeführt
ENTRYPOINT [ "vim" ]

# dateiname kann überschrieben werden
# beispiel: docker run -it CONTAINER_ID test.txt
CMD [ "datei.txt" ]
