from flask import Flask
from create_db import init_db
from auth import auth

app = Flask(__name__)
app.register_blueprint(auth)

if __name__ == "__main__":
    init_db()
    app.run(port=5000, debug=True)