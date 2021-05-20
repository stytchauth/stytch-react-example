import { Stytch } from "@stytch/stytch-react";
import React from "react";

const STYTCH_PUBLIC_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;

const Login = () => {
  const stytchProps = {
    config: {
      loginConfig: {
        magicLinkUrl: `http://localhost:9000/authenticate`,
        expirationMinutes: 30,
      },
      createUserConfig: {
        magicLinkUrl: `http://localhost:9000/authenticate`,
        expirationMinutes: 30,
      },
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      borderRadius: 10,
      button: {
        backgroundColor: "#0577CA",
      },
      input: {
        textColor: "#090909",
      },
      width: "321px",
    },
    publicToken: STYTCH_PUBLIC_TOKEN,
    callbacks: {
      onEvent: (data) => {
        if (data.eventData.type === "USER_EVENT_TYPE") {
          fetch(`/users`, {
            method: "POST",
            body: JSON.stringify({
              userId: data.eventData.userId,
              email: data.eventData.email,
            }),
            headers: {
              "Content-Type": "application/json",
            },
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
