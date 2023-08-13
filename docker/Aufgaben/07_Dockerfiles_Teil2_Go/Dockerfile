# Ausführen einer Go-Datei auf einem Webserver mit einem einfachen Dockerfile
# Gesamtgröße des Image: ~320 MB

FROM golang:1.17-alpine
WORKDIR /app
COPY src ./
RUN go build -o main
EXPOSE 8080
CMD ["./main"]
