import {useStytchUser} from "@stytch/react";
import type {ReactElement} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Authorize from "./components/Authorize";

const App = (): ReactElement => {
    const {user, fromCache} = useStytchUser();

    return (
        <Router>
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/oauth/authorize" element={<Authorize/>}/>
                        <Route path="/" element={user ? <Profile/> : <Login/>}/>
                    </Routes>
                </div>
            </main>
        </Router>
    );
};

export default App;
