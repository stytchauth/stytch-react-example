# Stytch B2C React example application

<p align="center">
  <img src="https://user-images.githubusercontent.com/100632220/217049841-b9eeb72a-3e50-4074-839a-e64ee5d4a88c.png" width="750">
</p>

## Overview

This example application demonstrates how one may use Stytch within a React application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses Stytch's [React SDK](https://stytch.com/docs/sdks/javascript-sdk) which provides pre-built UI components, useful React hooks, and headless methods to securely interact with Stytch.

This application features Email Magic Links. You can use this application's source code as a learning resource, or use it as a jumping off point for your own project. We are excited to see what you build with Stytch!

## Set up

Follow the steps below to get this application fully functional and running using your own Stytch credentials.

### In the Stytch Dashboard

1. Create a [Stytch](https://stytch.com/) account. Once your account is set up a Project called "My first project" will be automatically created for you.

2. Within your new Project, navigate to [SDK configuration](https://stytch.com/dashboard/sdk-configuration), and make the following changes:

   - Click **Enable SDK**.
   - Under **Authorized environments** add the domain `http://localhost:3000`.

     <img width="400" alt="Authorized environments" src="https://user-images.githubusercontent.com/100632220/217052985-2e6fc264-7b8b-452b-9d24-66a76c143d10.png">

   - Within the **Email Magic Links** drawer, toggle on **Enable the LoginOrCreate Flow**.

     <img width="400" alt="SDK Email Magic Links" src="https://user-images.githubusercontent.com/100632220/217053215-8c369de8-7828-4ad6-ac88-a50918520fc3.png">

3. Navigate to [Redirect URLs](https://stytch.com/dashboard/redirect-urls), and add `http://localhost:3000` as the types **Login** and **Sign-up**.

   <img width="400" alt="Redirect URLs" src="https://user-images.githubusercontent.com/100632220/217054016-913cabda-098e-4436-9829-2f33e7db05a7.png">

4. Finally, navigate to [API Keys](https://stytch.com/dashboard/api-keys), and copy your `public_token`. You will need this value later on.

### On your machine

In your terminal clone the project and install dependencies:

```bash
git clone https://github.com/stytchauth/stytch-react-example.git
cd stytch-react-example
npm i
```

Next, create `.env.local` file by running the command below and your `public_token`. Learn more about Create React App's support for [custom environment variables here](https://create-react-app.dev/docs/adding-custom-environment-variables/).

```bash
echo "REACT_APP_STYTCH_PUBLIC_TOKEN=YOUR_TOKEN_HERE" > .env.local
# For example, echo "REACT_APP_STYTCH_PUBLIC_TOKEN=public-token-test-123abcd-1234-1234-abcd-123123abcabc" > .env.local
```

## Running locally

After completing all the set up steps above the application can be run with the command:

```bash
npm start
```

The application will be available at [`http://localhost:3000`](http://localhost:3000).

You'll be able to login with Email Magic Links and see your Stytch User object, Stytch Session, and see how logging out works.

## Next steps

This example app showcases a small portion of what you can accomplish with Stytch. Here are a few ideas to explore:

1. Add additional login methods like [Passwords](https://stytch.com/docs/passwords#guides_getting-started-sdk).
2. Replace the prebuilt UI with your own using by using the SDK's [headless methods](https://stytch.com/docs/sdks/javascript-sdk).
3. Add a Google OAuth button, or replace it with the high converting [Google One Tap UI](https://stytch.com/docs/oauth#guides_google-sdk).
4. Secure your app further by building MFA authentication using methods like [WebAuthn](https://stytch.com/docs/sdks/javascript-sdk#webauthn).
5. Use [Stytch Sessions](https://stytch.com/docs/sessions) to secure your backend.

## Get help and join the community

#### :speech_balloon: Stytch community Slack

Join the discussion, ask questions, and suggest new features in our ​[Slack community](https://stytch.slack.com/join/shared_invite/zt-2f0fi1ruu-ub~HGouWRmPARM1MTwPESA)!

#### :question: Need support?

Check out the [Stytch Forum](https://forum.stytch.com/) or email us at [support@stytch.com](mailto:support@stytch.com).
