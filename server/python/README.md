# Python (3.7) backend server

Set up an Express server that will serve the front end and make API calls to Stytch.

## Requirements

Python 3.7+
Configured .env file

## How to run

Create and activate a new virtual environment

### Recommended virtual env

```
python3 -m venv env
source env/bin/activate
```

### Install dependencies

```
pip install -r requirements.txt
Export and run the application
```

### Run the server

```
export FLASK_APP=server/python/server.py
python3 -m flask run --port=9000
```

Go to localhost:9000 in your browser to see the demo

## Session management

This app sets a variable in React state for authenticating a user to illustrate the user experience for authenticating with Stytch - we don't recommend doing this! You should use a more secure session management solution, like flask-login.
