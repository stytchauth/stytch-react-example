# Python (3.7) backend server

This directory contains example python code to run a Flask server that authenticates your magic link with the stytch-python client library. It also serves the frontend React app

## Requirements

- Python 3.7+
- Configured .env file in the repo root

## How to run

1. Create and activate a new virtual environment
   ```
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies
   ```
   pip install -r requirements.txt
   ```
3. Run the server
   ```
   python3 server.py
   ```

Go to http://localhost:3000 in your browser to see the demo

## Session management

This app sets a variable in React state for authenticating a user to illustrate the user experience for authenticating with Stytch - we don't recommend doing this! You should use a more secure session management solution, like flask-login.
