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
      button: {
        textColor: "yellow",
      },
    },
    // Fill this token in from your Stytch dashboard
    publicToken: "public-token-1111-1111-1111",
  };

  return (
    <div className="Sign-in-container">
      <Stytch
        publicToken={stytchProps.publicToken}
        type={stytchProps.type}
        config={stytchProps.config}
        style={stytchProps.style}
      />
    </div>
  );
};

export default Login;
