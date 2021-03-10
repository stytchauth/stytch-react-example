import { Stytch } from "@stytch/stytch-react";
import React from "react";

const Login = () => {
  const STYTCH_PUBLIC_TOKEN = "public-token-1111-1111-1111";
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
      fontFamily: 'IBM Plex Sans, sans-serif',
      borderRadius: 500,
      button: {
        backgroundColor: '#0577CA',
      },
      input: {
        textColor: '#090909'
      },
      width: '321px'
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
