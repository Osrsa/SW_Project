from flask import Flask
from create_db import init_db
from auth import auth
from upload import upload

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sw_engineering_project_0615'

app.register_blueprint(auth)
app.register_blueprint(upload)

if __name__ == "__main__":
    init_db()
    app.run(port=5000, debug=True)