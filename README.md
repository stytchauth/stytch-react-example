# Stytch React Example App

This example app uses the Stytch React component to send [Email Magic Links](https://stytch.com/docs/magic-links#email-magic-links_email-magic-links-overview) and a server to authenticate magic links. This repo contains two implementations of the same server written in Node and Python.

In order to use this app, you'll need to build the frontend and start the backend server.

## Configure your Stytch credentials

1. Copy the .env_template to your own .env file (`cp .env_template .env`)
2. Fill in the placeholder values for `STYTCH_PROJECT_ID`, `STYTCH_SECRET`, and `REACT_APP_STYTCH_PUBLIC_TOKEN` in your .env file. Get your Stytch API credentials from the API keys in your [Stytch dashboard](https://stytch.com/dashboard/api-keys).
3. Add `http://localhost:3000/authenticate` as a valid sign-up and login redirect URL on your [Stytch Dashboard](https://stytch.com/dashboard/redirect-urls).
4. Configure the Stytch JavaScript SDK by visiting the [Stytch Dashboard](https://stytch.com/dashboard/sdk-configuration):
   - Add `http://localhost:3000` as an authorized domain.
   - Enable the LoginOrCreate option for Email Magic Links.

## Quick start

Build the client and run a Node server by running `./quickstart.sh`. Run `./quickstart.sh --help` to see all the server options.

Visit http://localhost:3000 to see the example app.

## Build the client

To build the client by itself, follow these instructions:

1. Make sure you have node installed: `brew install node`
2. Install dependencies: `npm install`
3. Build the frontend files from the client directory. Note: You'll need to rebuild your files to reflect any changes you want to make.
   ```
   $ cd client
   $ npm run build
   ```
4. This example app serves the frontend when you run a backend server. Click on the links under Supported server languages to go to the readme for your preferred language.

## Supported server languages

To run the server by itself, navigate to the setup instructions for the backend you want to use:

- [Python (3.7)](server/python)
- [Node](server/node)
