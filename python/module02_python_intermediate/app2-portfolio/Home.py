import streamlit as st
import pandas

st.set_page_config(layout="wide")

col1, col2 = st.columns(2)
with col1:
    st.image("images/my-photo.png", width=400)
with col2:
    st.title("Julienco")
    st.info("""
    Hi. It's me.\n
    Below you can find some of the apps I have built in Python. Feel free to contact me!
    """)

col3, empty_col, col4 = st.columns([3, 1, 3])
csv_data = pandas.read_csv("data.csv", sep=";")

with col3:
    for index, row in csv_data[:10].iterrows():
        st.header(row["title"])
        st.write(row["description"])
        st.image("images/" + row["image"], width=400)
        st.write(f"[Source Code]({row['url']})")

with col4:
    for index, row in csv_data[10:].iterrows():
        st.header(row["title"])
        st.write(row["description"])
        st.image("images/" + row["image"], width=400)
        st.write(f"[Source Code]({row['url']})")
