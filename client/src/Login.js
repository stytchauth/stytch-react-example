import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";
import { useNavigate } from "react-router-dom";
import React from "react";

const Login = () => {
  const navigate = useNavigate();

  const stytchProps = {
    config: {
      products: [Products.emailMagicLinks, Products.otp],
      emailMagicLinksOptions: {
        loginRedirectURL: "http://localhost:3000/authenticate",
        loginExpirationMinutes: 30,
        signupRedirectURL: "http://localhost:3000/authenticate",
        signupExpirationMinutes: 30,
      },
      otpOptions: {
        methods: [
          "sms"
        ],
        expirationMinutes: 5,
      }
    },
    styles: {
      container: {
        backgroundColor: "#000000",
        borderColor: "#ADBCC5",
        borderRadius: "16px",
        width: "400px"
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#5C727D",
        success: "#0C5A56",
        error: "#8B1214"
      },
      buttons: {
        primary: {
          backgroundColor: "#3773F5",
          textColor: "#0A0B0D",
          borderColor: "#3773F5",
          borderRadius: "100px"
        },
      },
      "fontFamily": "Arial",
      "hideHeaderText": false,
      "logo": {
        "logoImageUrl": "data:image/png;base64,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"
      }
    },
    callbacks: {
      onEvent: (event) => {
        console.log(event)

        if (event.type == "OTP_AUTHENTICATE" && event.data.session) {
          setTimeout(() => {
            navigate("/authenticate")
          }, 1000)
        }

      },
      onError: (error) => console.log(error),
    },
  };

  return (
    <StytchLogin
      config={stytchProps.config}
      styles={stytchProps.styles}
      callbacks={stytchProps.callbacks}
    />
  );
};

export default Login;
