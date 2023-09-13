import requests
from send_email import send_email

topic = "mercedes"
api_key = "cde5a4701d064cc0b8818a67b0ae3aef"
url = f"https://newsapi.org/v2/everything?"\
      f"q={topic}&"\
      "sortBy=popularity&"\
      "pageSize=20&" \
      "language=de&" \
      f"apiKey={api_key}"

# Make request to endpoint
request = requests.get(url)

# Get dictionary with data
content = request.json()

# Add subject to message
message = "Subject: Daily News Digest\n\n"

# Add title and description for each news article
for article in content["articles"]:
    if article['title'] is not None and article["description"] != "":
        message += article['title'] + "\n"
        message += article['description'] + "\n"
        message += article["url"] + "\n\n"

# Properly encode the message to prevent errors
message = message.encode("utf-8")

# Send email
send_email(message)
