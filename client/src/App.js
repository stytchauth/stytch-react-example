import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Authenticate from "./Authenticate";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
        <div className="App-content">
          <Routes>
            <Route
              path="/authenticate"
              element={<Authenticate setAuthenticated={setAuthenticated} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home authenticated={authenticated} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
