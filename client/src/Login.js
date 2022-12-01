import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";
import React from "react";

const Login = () => {
  const stytchProps = {
    config: {
      products: [Products.emailMagicLinks],
      emailMagicLinksOptions: {
        loginRedirectURL: "http://localhost:3000/authenticate",
        loginExpirationMinutes: 30,
        signupRedirectURL: "http://localhost:3000/authenticate",
        signupExpirationMinutes: 30,
      },
    },

    styles: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      buttons: {
        primary: {
          backgroundColor: "#0577CA",
          textColor: "#090909",
        },
      },
    },
    callbacks: {
      onEvent: (event) => console.log(event),
      onError: (error) => console.log(error),
    },
  };

  return (
    <div className="Sign-in-container">
      <StytchLogin
        config={stytchProps.config}
        styles={stytchProps.styles}
        callbacks={stytchProps.callbacks}
      />
    </div>
  );
};

export default Login;
