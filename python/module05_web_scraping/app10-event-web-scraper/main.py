import selectorlib
import requests
import smtplib
import ssl
import os
import time

URL = "https://programmer100.pythonanywhere.com/tours/"


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
    with open("data.txt", "w") as file:
        file.write(extracted_data + "\n")


def read():
    with open("data.txt", "r") as file:
        return file.read()


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
            events = read()
            if extracted not in events:
                store(events + extracted)
                send_email(extracted)

        time.sleep(1)
