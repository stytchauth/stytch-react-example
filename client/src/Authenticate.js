import React from "react";
import { useNavigate } from "react-router-dom";

const Authenticate = ({ setAuthenticated }) => {
  const token = new URLSearchParams(window.location.search).get("token");
  if (typeof token !== "string") {
    throw new Error("No valid token provided.");
  }
  const navigate = useNavigate();

  React.useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetch(`/stytch?token=${token}`);
        if (response.ok) {
          // TODO: Add database call to get user and set information here.
          setAuthenticated(true);
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Error authenticating magic link");
        navigate("/login");
      }
    };

    authenticate();
  }, []);

  return <React.Fragment />;
};

export default Authenticate;
