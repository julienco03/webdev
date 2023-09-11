import smtplib
import ssl
import os


def send_email(message):
    host = "smtp.gmail.com"
    port = 465
    context = ssl.create_default_context()

    username = "julian160903@gmail.com"
    password = os.getenv("GOOGLE_APP_PASSWORD")

    receiver = "julian160903@gmail.com"

    with smtplib.SMTP_SSL(host, port, context=context) as server:
        try:
            server.login(username, password)
            server.sendmail(username, receiver, message)
        except smtplib.SMTPResponseException as e:
            print(e)


if __name__ == "__main__":
    send_email("TEST")
