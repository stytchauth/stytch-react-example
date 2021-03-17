# Stytch.js with React and Express

Example app using the Stytch Javascript SDK, React, and Express

# Getting started

1. Make sure you have node installed: `brew install node`
2. Copy the .env_template to your own .env file (`cp .env_template .env`)
3. Add your Stytch API credentials from the API keys tab in your Stytch dashboard. You'll need to update `STYTCH_PROJECT_ID` and `STYTCH_SECRET` in your `.env` file with your project ID and secret from the dashboard.
4. From the API keys tab, create a public token and use it for `STYTCH_PUBLIC_TOKEN` in `client/src/Login.js`.
5. Run the app:
   Build the front end:
   ```
   cd client
   npm install
   npm run build
   ```
   Run the backend:
   ```
   cd server/node
   npm install
   npm start
   ```
6. Open the app in your browser at `localhost:9000`

# Session management

This app sets a variable in React state for authenticating a user to illustrate the user experience for authenticating with Stytch - we don't recommend doing this! You should use a more secure session management solution, like [express-session](https://www.npmjs.com/package/express-session).
