import streamlit as st
import pandas as pd
import plotly.express as px

st.header("In Search for Happiness")

all_options = ["Happiness",
               "GDP",
               "Social Support",
               "Life Expectancy",
               "Generosity",
               "Corruption"]
option_x = st.selectbox("Select the data for the X-axis", all_options)
option_y = st.selectbox("Select the data for the Y-axis", all_options)

st.subheader(f"{option_x} and {option_y}")

df = pd.read_csv("happy.csv")
x_data = df[option_x.lower().replace(" ", "_")]
y_data = df[option_y.lower().replace(" ", "_")]

figure = px.scatter(x=x_data, y=y_data, labels={"x": option_x, "y": option_y})

st.plotly_chart(figure)
