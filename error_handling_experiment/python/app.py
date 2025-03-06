from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Error Handling Experiment!"

@app.route('/divide/<int:num>')
def divide(num):
    try:
        result = 10 / num
        return f"Result: {result}"
    except ZeroDivisionError:
        return "Error: Cannot divide by zero!", 400

@app.errorhandler(Exception)
def handle_exception(e):
    return f"An error occurred: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
