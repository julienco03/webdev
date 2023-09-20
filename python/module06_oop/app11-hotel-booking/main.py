import pandas as pd

df = pd.read_csv("hotels.csv", dtype={"id": str})


class Hotel:
    def __init__(self, hotel_id):
        self.hotel_id = hotel_id
        self.name = df.loc[df["id"] == hotel_id, "name"].squeeze()

    def book(self):
        """ Book a hotel by changing the availability to 'no' """
        df.loc[df["id"] == self.hotel_id, "available"] = "no"
        df.to_csv("hotels.csv", index=False)

    def available(self):
        """ Checks if the hotel is available """
        availability = df.loc[df["id"] == self.hotel_id, "available"].squeeze()
        return availability == "yes"


class ReservationTicket:
    def __init__(self, customer_name, hotel_object):
        self.customer_name = customer_name
        self.hotel = hotel_object

    def generate(self):
        content = "\nThank you for your reservation.\n"
        content += "Here is your booking data:\n"
        content += f"Name: {self.customer_name}\n"
        content += f"Hotel-ID: {self.hotel.name}\n"

        return content


hotel_ID = input("Enter the ID of the hotel: ")
hotel = Hotel(hotel_ID)

if hotel.available():
    hotel.book()
    name = input("Enter your name: ")
    reservation_ticket = ReservationTicket(name, hotel)
    print(reservation_ticket.generate())
else:
    print("Hotel is not free.")
