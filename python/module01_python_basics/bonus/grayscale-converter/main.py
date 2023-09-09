# Note: This script runs only on a local IDE with "streamlit run main.py"
import streamlit as st
from PIL import Image


def convert_to_grayscale(image):
    # Open the user uploaded image with PIL
    img = Image.open(image)
    # Convert the image to grayscale
    gray_uploaded_img = img.convert('L')
    # Display the grayscale image on the webpage
    st.image(gray_uploaded_img)


st.subheader("Color to Grayscale Converter")

uploaded_image = st.file_uploader("Upload Image")

with st.expander("Start camera"):
    camera_image = st.camera_input("Camera")

if uploaded_image is not None:
    convert_to_grayscale(uploaded_image)

if camera_image is not None:
    convert_to_grayscale(camera_image)
