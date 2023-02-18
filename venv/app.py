from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<p>Hello, World!</p>'


@app.route('/add')
def add():
    num1 = request.args.get('num1', default = 1, type = float)
    num2 = request.args.get('num2', default = 1, type = float)
    return jsonify(sum = num1 + num2)