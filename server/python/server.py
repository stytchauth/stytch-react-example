import os
import sqlite3

import stytch
import flask_login

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


con = sqlite3.connect("db.sqlite", check_same_thread=False)

# BACKEND ROUTES
@app.route("/stytch", methods=["GET"])
def authenticate_stytch_token():
    token = request.args.get("token")
    resp = client.MagicLinks.authenticate(token, options={})

    if resp.status_code == 200:
        stytch_resp_data = resp.json()
        cur = con.cursor()
        result = cur.execute(
            'SELECT id from user WHERE stytch_id = "{0}"'.format(
                stytch_resp_data["userId"]
            )
        )
        user_row = result.fetchone()[0]

        return {
            "msg": "Successfully authenticated user {0}".format(
                stytch_resp_data["userId"]
            )
        }

    return resp


@app.route("/users", methods=["POST"])
def create_users():
    data = request.json
    stytch_id = data.get("userId")
    email = data.get("email")
    cur = con.cursor()
    users = cur.execute(
        'SELECT id, email FROM user WHERE stytch_id = "{0}" AND email = "{1}"'.format(
            stytch_id, email
        )
    )
    if not users.fetchone():
        cur.execute(
            'INSERT into user (email, stytch_id) VALUES ("{0}", "{1}")'.format(
                email, stytch_id
            )
        )
        cur.commit()
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
    app.run()

# TODO: Integrate flask-login
# class User(flask_login.UserMixin):
#     def __init__(self, id: str, stytch_id: str):
#         self.id = id
#         self.stytch_id = stytch_id


# def login_user(user: User):
#     return flask_login.login_user(user)
