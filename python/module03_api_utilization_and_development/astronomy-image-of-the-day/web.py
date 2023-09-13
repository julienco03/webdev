import streamlit as st
import requests

api_key = "ovW1Ozf8DB3Tce0PW2PSCd7dE4DSh67zinsM5Iac"
url = "https://api.nasa.gov/planetary/apod?"\
    f"api_key={api_key}"

# Get request data as dictionary
response1 = requests.get(url)
data = response1.json()

# Extract image title, url and explanation
title = data["title"]
image_url = data["url"]
explanation = data["explanation"]
date = data["date"]

# Download image and write binary data into image file
image_filepath = "img.png"
response2 = requests.get(image_url)
with open(image_filepath, "wb") as file:
    file.write(response2.content)

st.subheader(date)
st.title(title)
st.image(image_filepath)
st.write(explanation)
