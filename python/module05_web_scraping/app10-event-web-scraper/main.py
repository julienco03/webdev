import selectorlib
import requests
import smtplib
import ssl
import os
import time
import sqlite3

URL = "https://programmer100.pythonanywhere.com/tours/"

connection = sqlite3.connect("data.db")


def scrape(url):
    """ Scrape the page source from the URL """
    response = requests.get(url)
    source = response.text
    return source


def extract(src):
    extractor = selectorlib.Extractor.from_yaml_file("extract.yaml")
    value = extractor.extract(src)["tours"]
    return value


def store(extracted_data):
    row = [item.split(",").strip() for item in extracted_data]
    cursor = connection.cursor()
    cursor.execute("INSERT INTO events VALUES(?,?,?)", row)
    connection.commit()


def read(extracted_data):
    row = [item.split(",").strip() for item in extracted_data]
    band, city, date = row
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM events WHERE band=? AND city=? AND date=?", (band, city, date))
    rows = cursor.fetchall()
    print(rows)
    return rows


def send_email(message):
    host = "smtp.gmail.com"
    port = 465

    username = "julian160903@gmail.com"
    password = os.getenv("GOOGLE_APP_PASSWORD")

    receiver = "julian160903@gmail.com"
    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(username, receiver, message)


if __name__ == "__main__":
    while True:
        scraped = scrape(URL)
        extracted = extract(scraped)

        if extracted != "No upcoming tours":
            row = read(extracted)
            if not row:
                store(extracted)
                send_email(message="Hey, a new event was found!")

        # Check every 5 minutes for new events
        time.sleep(300)
