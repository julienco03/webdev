import streamlit as st
import plotly.express as px
from backend import get_data

# Add input and text elements
st.title("Weather Forecast For The Next Days")
location = st.text_input("Location")
days = st.slider("Forecast Days", min_value=1, max_value=5,
                 help="Select the number of forecasted days")
option = st.selectbox("Select data to view", ["Temperature", "Sky"])
st.subheader(f"{option} for the next {days if days > 1 else ''} day{'s' if days > 1 else ''} in {location}")

if location:
    # Get the temperature/sky data
    try:
        filtered_data = get_data(location, days)
        dates = [i['dt_txt'] for i in filtered_data]

        if option == "Temperature":
            # Filter the data only for the temperatures
            temperatures = [i["main"]["temp"] for i in filtered_data]
            # Create a temperature plot
            figure = px.line(x=dates, y=temperatures, labels={"x": "Date", "y": "Temperatures"})
            st.plotly_chart(figure)

        elif option == "Sky":
            # Dictionary with all sky conditions and their corresponding image
            images = {
                "Clear": "images/clear.png",
                "Clouds": "images/cloud.png",
                "Rain": "images/rain.png",
                "Snow": "images/snow.png"
            }
            # Filter the data for the sky condition designation
            sky_conditions = [i['weather'][0]['main'] for i in filtered_data]
            # All image paths in correct order to the sky conditions
            image_paths = [images[condition] for condition in sky_conditions]
            # Display all images with time and date as caption
            st.image(image_paths, width=115, caption=dates)

    except KeyError:
        st.warning("Please provide a valid location...")
        exit(1)
