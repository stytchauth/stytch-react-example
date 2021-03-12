# Node backend server

Set up an Express server that will serve the front end and make API calls to Stytch.

## Requirements

1. Make sure you have node installed: `brew install node`

## Setting up the server

1. Install dependencies: `npm install`
1. Run the app: `npm start`
1. Open the app in your browser at `localhost:9000`

## Session management

This app sets a variable in React state for authenticating a user to illustrate the user experience for authenticating with Stytch - we don't recommend doing this! You should use a more secure session management solution, like [express-session](https://www.npmjs.com/package/express-session).
