from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/v1/<word>")
def dictionary(word):
    definition = word.upper()
    return {"word": word, "description": definition}


if __name__ == "__main__":
    app.run(debug=True, port=5501)
