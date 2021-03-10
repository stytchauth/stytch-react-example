import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div>
      <h2>See you next time! 👋 </h2>
      <Link class="Button" to="/login">Login</Link>
    </div>
  );
};

const LoggedIn = () => {
  return <h2>Welcome back! 🎉</h2>;
};

const Home = ({ authenticated }) => {
  return authenticated ? <LoggedIn /> : <LoggedOut />;
};

export default Home;
