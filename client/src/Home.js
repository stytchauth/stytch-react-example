import React from "react";
import { useNavigate } from "react-router-dom";

const LoggedOut = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/login")
  }, []);

  return <React.Fragment />;
};

const LoggedIn = () => {
  return <h2>Welcome back! 🎉</h2>;
};

const Home = ({ authenticated }) => {
  return authenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Home;
