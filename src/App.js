import { useStytchUser } from "@stytch/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Authorize from "./components/Authorize";

const App = () => {
  // The useStytchUser hook will return the existing Stytch User object if one exists
  const { user, fromCache } = useStytchUser();

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/authorize" element={<Authorize />} />
          <Route path="/" element={user ? <Profile /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
