import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';

const STYTCH_PUBLIC_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;

const stytch = new StytchUIClient(STYTCH_PUBLIC_TOKEN);

ReactDOM.render(
  <StytchProvider stytch={stytch}>
    <App />
  </StytchProvider>,
  document.getElementById("root")
);
