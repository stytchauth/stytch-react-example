import React from "react";
import { Stytch } from "@stytch/stytch-react";

const Login = () => {
  const stytchProps = {
    config: {
      loginConfig: {
        magicLinkUrl: "http://localhost:9000/authenticate",
        expirationMinutes: 30,
      },
      createUserConfig: {
        magicLinkUrl: "http://localhost:9000/authenticate",
        expirationMinutes: 30,
      },
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      button: { backgroundColor: "#106ee9" },
      input: { textColor: "#090909" },
    },
    // Fill this public token in from your Stytch dashboard.
    publicToken: "public-token-1111-1111-1111",
    callbacks: {
      onEvent: (message) => console.log(message),
      onSuccess: (message) => console.log(message),
      onError: (message) => console.log(message),
    },
  };

  return (
    <div className="Sign-in-container">
      <Stytch
        publicToken={stytchProps.publicToken}
        config={stytchProps.config}
        style={stytchProps.style}
        callbacks={stytchProps.callbacks}
      />
    </div>
  );
};

export default Login;
