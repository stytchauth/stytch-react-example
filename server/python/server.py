import os
import sqlite3

import stytch

from dotenv import load_dotenv, find_dotenv
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    send_from_directory,
    redirect,
)


# Setup Stytch python client library
load_dotenv(find_dotenv())
stytch_project_id = os.getenv("STYTCH_PROJECT_ID")
stytch_secret = os.getenv("STYTCH_SECRET")
client = stytch.Client(stytch_project_id, stytch_secret, "test")

app = Flask(
    __name__, static_folder="../../client/build", static_url_path="/../../client/build"
)

con = sqlite3.connect(os.path.join(os.path.dirname(__file__), "db.sqlite"), check_same_thread=False)

def create_database(con):
    con.execute('''
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text UNIQUE,
            stytch_id text,

            CONSTRAINT email_unique UNIQUE (email)
        )
    ''')

# BACKEND ROUTES
@app.route("/stytch", methods=["GET"])
def authenticate_stytch_token():
    token = request.args.get("token")
    resp = client.MagicLinks.authenticate(token, options={})

    if resp.status_code != 200:
        return resp

    stytch_resp_data = resp.json()
    user_id = stytch_resp_data["user_id"]
    result = con.execute(
        'SELECT id from user WHERE stytch_id = ?',
        (user_id,),
    ).fetchone()

    if not result:
        return {"msg": "Could not find user {}".format(user_id)}

    return {"msg": "Successfully authenticated user {0}".format(user_id)}


@app.route("/users", methods=["POST"])
def create_users():
    data = request.json
    stytch_id = data.get("userId")
    email = data.get("email")
    cur = con.cursor()
    users = cur.execute(
        'SELECT id, email FROM user WHERE stytch_id = ? AND email = ?',
        (stytch_id, email),
    )
    if not users.fetchone():
        cur.execute(
            'INSERT into user (stytch_id, email) VALUES (?, ?)',
            (stytch_id, email),
        )
    con.commit()
    return {"user": {"email": email, "stytch_id": stytch_id}}


# FRONT END ROUTES
@app.route("/js/<path:path>")
def send_js(path):
    return send_from_directory(app.static_folder, "js/" + path)


@app.route("/static/<path:path>")
def send_static(path):
    return send_from_directory(app.static_folder, "static/" + path)


@app.route("/", methods=["GET"], defaults={"path": None})
@app.route("/<path:path>", methods=["GET"])
def index(path):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    create_database(con)
    app.run(port=3000)

# TODO: Integrate flask-login
# class User(flask_login.UserMixin):
#     def __init__(self, id: str, stytch_id: str):
#         self.id = id
#         self.stytch_id = stytch_id


# def login_user(user: User):
#     return flask_login.login_user(user)
