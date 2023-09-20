from fpdf import FPDF
import pandas as pd

df = pd.read_csv("articles.csv", dtype={"id": str})


class Article:
    def __init__(self, article_id):
        self.id = article_id
        self.name = df.loc[df["id"] == article_id, "name"].squeeze()
        self.price = df.loc[df["id"] == article_id, "price"].squeeze()

    def available(self):
        """ Returns hoy many articles of a kind are in stock """
        return df.loc[df["id"] == self.id, "in stock"].squeeze()

    def buy(self):
        """ Reduces 'in stock' by one when an article gets bought """
        available_articles = self.available()
        if available_articles > 0:
            df.loc[df["id"] == self.id, "in stock"] = available_articles - 1
            df.to_csv("articles.csv", index=False)
            receipt = Receipt(article)
            receipt.generate()
            print("The purchase was successful. The invoice is attached.")
        else:
            print("No more articles of this kind in stock.")


class Receipt:
    def __init__(self, article_object):
        self.article = article_object

    def generate(self):
        pdf = FPDF(orientation="P", unit="mm", format="A4")
        pdf.add_page()

        pdf.set_font(family="Times", size=16, style="B")
        pdf.cell(w=50, h=8, txt=f"Receipt nr.{self.article.id}", ln=1)

        pdf.set_font(family="Times", size=16, style="B")
        pdf.cell(w=50, h=8, txt=f"Article: {self.article.name}", ln=1)

        pdf.set_font(family="Times", size=16, style="B")
        pdf.cell(w=50, h=8, txt=f"Price: {self.article.price}", ln=1)

        pdf.output("receipt.pdf")


article_ID = input("Enter an article ID: ")
article = Article(article_ID)
article.buy()
