import React from "react";
import { useNavigate } from "react-router-dom";
import { useStytch, useStytchSession } from '@stytch/react';

const Authenticate = ({ setAuthenticated }) => {
  const stytchClient = useStytch();
  const { session } = useStytchSession();
  
  const navigate = useNavigate();

  React.useEffect(() => {
    const authenticate = async () => {
      try {
        if (session) {
          setAuthenticated(true);
          navigate("/");

        } else {
          const token = new URLSearchParams(window.location.search).get("token");
          stytchClient.magicLinks.authenticate(token, {
            session_duration_minutes: 60,
          });
        }

      } catch (err) {
        console.error("Error authenticating magic link");
        navigate("/login");
      }
    };

    authenticate();
  }, [stytchClient, session]);

  return <React.Fragment />;
};

export default Authenticate;