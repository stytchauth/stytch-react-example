import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Authenticate from "./Authenticate";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </header>
        <div className="App-content">
          <Switch>
            <Route path="/authenticate">
              <Authenticate setAuthenticated={setAuthenticated} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home authenticated={authenticated} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
