import streamlit as st
import plotly.express as px
from backend import get_data

st.title("Weather Forecast For The Next Days")

location = st.text_input("Location")

days = st.slider("Forecast Days", min_value=1, max_value=5,
                 help="Select the number of forecasted days")

option = st.selectbox("Select data to view", ["Temperature", "Sky"])

st.subheader(f"{option} for the next {days if days > 1 else ''} day{'s' if days > 1 else ''} in {location}")

data = get_data(location, days, option)
figure = px.line(x=data[0], y=data[1], labels={"x": "Date", "y": "Temperatures"})
st.plotly_chart(figure)
