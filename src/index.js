import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";
import TokenAuthenticator from "./components/TokenAuthenticator";

// We initialize the Stytch client using our project's public token which can be found in the Stytch dashboard
const stytch = new StytchUIClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* StytchProvider gives our app access to the Stytch client */}
    <StytchProvider stytch={stytch}>
      <TokenAuthenticator>
        <App />
      </TokenAuthenticator>
    </StytchProvider>
  </React.StrictMode>
);
