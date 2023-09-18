from email.message import EmailMessage
import smtplib
import imghdr
import os

SENDER = "julian160903@gmail.com"
RECEIVER = "julian160903@gmail.com"
PASSWORD = os.getenv("GOOGLE_APP_PASSWORD")


def send_mail(image_path):
    email_message = EmailMessage()
    email_message["Subject"] = "New customer showed up!"
    email_message.set_content("Hey, we just saw a new customer!")

    with open(image_path, "rb") as file:
        content = file.read()
    email_message.add_attachment(content, maintype="image", subtype=imghdr.what(None, content))

    gmail = smtplib.SMTP("smtp.gmail.com", 587)
    gmail.ehlo()
    gmail.starttls()
    gmail.login(SENDER, PASSWORD)
    gmail.sendmail(SENDER, RECEIVER, email_message.as_string())


if __name__ == "__main__":
    send_mail("images/19.png")
