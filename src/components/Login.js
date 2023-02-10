import React from "react";
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  const styles = {
    container: {
      width: "100%",
    },
    buttons: {
      primary: {
        backgroundColor: "#4A37BE",
        borderColor: "#4A37BE",
      },
    },
  };

  const config = {
    products: [Products.emailMagicLinks, Products.oauth],
    emailMagicLinksOptions: {
      loginRedirectURL: "http://localhost:3000",
      loginExpirationMinutes: 60,
      signupRedirectURL: "http://localhost:3000",
      signupExpirationMinutes: 60,
    },
    oauthOptions: {
      providers: [{ type: "google" }],
      loginRedirectURL: "http://localhost:3000",
      loginExpirationMinutes: 60,
      signupRedirectURL: "http://localhost:3000",
      signupExpirationMinutes: 60,
    },
  };

  /*
  The Stytch JavaScript SDKs offer callbacks that help you track where users are in the authentication flow.
  You can also use these callbacks to trigger actions in your application.
  
  For example, you can use a the onEvent callback with a 200 on PASSWORD_AUTHENTICATE to trigger a redirect
  to a protected page after a user successfully logs in.
  */
  const callbacks = {
    onEvent: (message) => console.log(message),
    onError: (error) => console.log(error),
  }

  return <StytchLogin config={config} styles={styles} callbacks={callbacks} />;
};

export default Login;
