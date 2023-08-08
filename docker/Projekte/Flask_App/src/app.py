from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<h1>Hallo Welt von Flask mit Docker</h1>'
