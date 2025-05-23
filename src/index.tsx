import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';
import TokenAuthenticator from './components/TokenAuthenticator';

// Initialize the Stytch client using our public token
const stytch = new StytchUIClient(
  import.meta.env.VITE_STYTCH_PUBLIC_TOKEN as string,
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <TokenAuthenticator>
        <App />
      </TokenAuthenticator>
    </StytchProvider>
  </React.StrictMode>,
);

