import pandas as pd

df_hotels = pd.read_csv("hotels.csv", dtype={"id": str})
df_cards = pd.read_csv("cards.csv", dtype=str).to_dict(orient="records")
df_card_security = pd.read_csv("card_security.csv", dtype=str)


class Hotel:
    def __init__(self, hotel_id):
        self.hotel_id = hotel_id
        self.name = df_hotels.loc[df_hotels["id"] == hotel_id, "name"].squeeze()

    def book(self):
        """ Book a hotel by changing the availability to 'no' """
        df_hotels.loc[df_hotels["id"] == self.hotel_id, "available"] = "no"
        df_hotels.to_csv("hotels.csv", index=False)

    def available(self):
        """ Checks if the hotel is available """
        availability = df_hotels.loc[df_hotels["id"] == self.hotel_id, "available"].squeeze()
        return availability == "yes"


class ReservationTicket:
    def __init__(self, customer_name, hotel_object):
        self.customer_name = customer_name
        self.hotel = hotel_object

    def generate(self):
        content = f"""
                Thank you for your reservation!
                Here are you booking data:
                Name: {self.customer_name}
                Hotel name: {self.hotel.name}
                """
        return content


class CreditCard:
    def __init__(self, number):
        self.number = number

    def validate(self, expiration, holder, cvc):
        card_data = {"number": self.number, "expiration": expiration, "holder": holder, "cvc": cvc}
        if card_data in df_cards:
            return True
        else:
            return False


class SecureCreditCard(CreditCard):
    def authenticate(self, given_password):
        password = df_card_security.loc[df_card_security["number"] == self.number, "password"].squeeze()
        if password == given_password:
            return True
        else:
            return False


print(df_hotels)
hotel_ID = input("Enter the ID of the hotel: ")
hotel = Hotel(hotel_ID)

if hotel.available():
    # Get credit card data
    cc_card_number = input("Enter the credit card number: ")
    cc_expiration = input("Enter the expiration date: ")
    cc_holder = input("Enter the credit card holder: ")
    cc_cvc = input("Enter the cvc: ")

    credit_card = SecureCreditCard(number=cc_card_number)

    if credit_card.validate(expiration=cc_expiration, holder=cc_holder, cvc=cc_cvc):
        cc_password = input("Please enter your credit card password: ")
        if credit_card.authenticate(given_password=cc_password):
            print("Authentication was successful!")
            hotel.book()
            name = input("Enter your name: ")
            reservation_ticket = ReservationTicket(name, hotel)
            print(reservation_ticket.generate())
        else:
            print("Credit card authentication failed!")
    else:
        print("There was a problem with your payment!")

else:
    print("Hotel is not free!")
