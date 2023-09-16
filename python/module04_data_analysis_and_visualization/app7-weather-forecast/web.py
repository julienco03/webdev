import streamlit as st
import plotly.express as px

st.title("Weather Forecast For The Next Days")

location = st.text_input("Location")

days = st.slider("Forecast Days", min_value=1, max_value=5,
                 help="Select the number of forecasted days")

option = st.selectbox("Select data to view", ["Temperature", "Sky"])

st.subheader(f"{option} for the next {days if days > 1 else ''} day{'s' if days > 1 else ''} in {location}")


def get_data(forecasted_days):
    dates_data = ["2022-01-01", "2022-05-27", "2022-10-17"]
    temperatures_data = [10, 11, 14]
    return dates_data, temperatures_data


dates, temperatures = get_data(days)
figure = px.line(x=dates, y=temperatures, labels={"x": "Date", "y": "Temperatures"})
st.plotly_chart(figure)
