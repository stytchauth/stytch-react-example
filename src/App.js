import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authenticate from "./Authenticate";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  return (
    <Router>
      <div className="App">
        <header className="App-header"/>
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
