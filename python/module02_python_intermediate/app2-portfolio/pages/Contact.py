import streamlit as st
from send_email import send_email
import pandas

df = pandas.read_csv("topics.csv")

st.header("Contact Me")

with st.form(key="contact-form"):
    user_mail = st.text_input("Your e-mail address")
    subject_options = df["topic"]
    subject = st.selectbox("What topic do you want to discuss?", subject_options)
    raw_message = st.text_input("Your message")
    message = f"""\
Subject: New email from {user_mail}

From: {user_mail}
{subject}
{raw_message}
"""
    submit_button = st.form_submit_button("Submit")

    if submit_button:
        send_email(message)
        st.info("Email was sent successfully!")
