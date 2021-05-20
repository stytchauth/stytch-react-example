# Stytch React Example App

This example app uses the Stytch React component to send magic links and a server to authenticate magic links. This repo contains several implementations of the same server written in Node and Python.

In order to use this app, you'll need to build the frontend and start the backend server.

## Configure your Stytch credentials

1. Copy the .env_template to your own .env file (`cp .env_template .env`)
1. Add your Stytch API credentials from the API keys tab in your Stytch dashboard. You'll need to update `STYTCH_PROJECT_ID`, `STYTCH_SECRET`, and `REACT_APP_STYTCH_PUBLIC_TOKEN` in your `.env` file with your project ID, secret, and public token from the dashboard.

## Quick start

Build the client and run a node server by running `. ./quickstart.sh`. Visit http://localhost:9000 to see the example app.

## Build the client

1. Make sure you have node installed: `brew install node`
1. Install dependencies: `npm install`
1. Build the frontend files from the client directory. Note: You'll need to rebuild your files to reflect any changes you want to make.
   ```
   $ cd client
   $ npm run build
   ```
1. This example app serves the frontend when you run a backend server. Click on the links under Supported server languages to go to the readme for your preferred language.

## Supported server languages

Click on the language to navigate to the setup instructions for each server
[Python (3.7)](https://github.com/stytchauth/stytchjs-react-express/tree/main/server/python)
[Node](https://github.com/stytchauth/stytchjs-react-express/tree/main/server/node)
