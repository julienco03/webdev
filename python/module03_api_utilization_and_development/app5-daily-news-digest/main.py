import requests

api_key = "cde5a4701d064cc0b8818a67b0ae3aef"
url = f"https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey={api_key}"

# Make request to endpoint
request = requests.get(url)

# Get dictionary with data
content = request.json()

# Access the article titles and descriptions
for article in content["articles"]:
    print(article["title"])
    print(article["description"])
