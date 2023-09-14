from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/v1/<word>")
def dictionary(word):
    df = pd.read_csv("dictionary.csv")
    definition = df.loc[df["word"] == word]["definition"].squeeze()
    return {"word": word, "description": definition}


if __name__ == "__main__":
    app.run(debug=True, port=5501)
