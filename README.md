# Stytch React Example App

This example app uses the Stytch React component to send magic links and a server to authenticate magic links. This repo contains several implementations of the same server written in Node and Python.

In order to use this app, you'll need to build the frontend and start the backend server.

## Configure your Stytch credentials

1. Copy the .env_template to your own .env file (`cp .env_template .env`)
1. Add your Stytch API credentials from the API keys tab in your Stytch dashboard. You'll need to update `STYTCH_PROJECT_ID` and `STYTCH_SECRET` in your `.env` file with your project ID and secret from the dashboard.
1. From the API keys tab, create a public token and use it for `STYTCH_PUBLIC_TOKEN` in `Login.js`.

## Build the client

2. Build the front end files from the client directory. Note: You'll need to rebuild your files to reflect any changes you want to make.
   ```
   $ cd client
   $ npm run build
   ```
3. This example app serves the frontend when you run a backend server. Click on the links below Supported Languages to your preferred language to see instructions on how to run the server.

## Supported server languages

Click on the language to navigate to the setup instructions for each server
[Python (3.7)](https://github.com/stytchauth/stytchjs-react-express/tree/main/server/python)
[node](https://github.com/stytchauth/stytchjs-react-express/tree/main/server/node)
