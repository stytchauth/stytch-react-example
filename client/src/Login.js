import { Stytch } from "@stytch/stytch-react";
import React from "react";

const STYTCH_PUBLIC_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;

const Login = () => {
  const stytchProps = {
    loginOrSignupView: {
      products: ['emailMagicLinks'],
      emailMagicLinksOptions: {
        loginRedirectURL: "http://localhost:9000/authenticate",
        loginExpirationMinutes:30,
        signupRedirectURL: "http://localhost:9000/authenticate",
        signupExpirationMinutes: 30,
      }
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      width: "321px",
      primaryColor: "#0577CA",
      primaryTextColor: "#090909",
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
        loginOrSignupView={stytchProps.loginOrSignupView}
        style={stytchProps.style}
        callbacks={stytchProps.callbacks}
      />
    </div>
  );
};

export default Login;
