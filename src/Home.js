import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div>
      <div>You are logged out.</div>
      <Link to="/login">Login</Link>
    </div>
  );
};

const LoggedIn = () => {
  return <div>You are logged in.</div>;
};

const Home = ({ authenticated }) => {
  return authenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Home;
