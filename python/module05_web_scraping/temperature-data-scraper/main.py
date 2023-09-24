import selectorlib
import requests
from datetime import datetime
import time

URL = "https://programmer100.pythonanywhere.com/"


def scrape(url):
    """ Scrape the page source from the URL """
    response = requests.get(url)
    source = response.text
    return source


def extract(src):
    extractor = selectorlib.Extractor.from_yaml_file("extract.yaml")
    value = extractor.extract(src)["temperature"]
    return value


def store(extracted_data):
    now = datetime.now().strftime("%y-%m-%d-%H-%M-%S")
    with open("data.txt", "a") as file:
        line = f"{now},{extracted_data}\n"
        file.write(line)


if __name__ == "__main__":
    while True:
        scraped = scrape(URL)
        extracted = extract(scraped)
        store(extracted)

        # Check every 2 seconds for the temperature
        time.sleep(2)
