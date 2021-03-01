import React from "react";
import { Stytch } from "@stytch/stytch-react";

const Login = () => {
  const STYTCH_PUBLIC_TOKEN =
    "public-token-test-196bf55b-4d4d-4694-bb9c-4312a2398cf6";
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
    publicToken: STYTCH_PUBLIC_TOKEN,
    callbacks: {
      onEvent: (data) => {
        if (data.eventData.type === "USER_EVENT_TYPE") {
          fetch("/users", {
            method: "POST",
            body: JSON.stringify({
              userId: data.eventData.userId,
              email: data.eventData.email,
            }),
          });
        }
      },
      onSuccess: (data) => console.log(data),
      onError: (data) => console.log(data),
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
