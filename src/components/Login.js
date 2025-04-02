import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  const styles = {
    container: {
      width: '100%',
    },
    buttons: {
      primary: {
        backgroundColor: '#3A6E97', // Primary Gong blue
        borderColor: '#3A6E97',
        '&:hover': {
          backgroundColor: '#4ECDC4', // Secondary teal for hover
        },
      },
    },
    colors: {
      primary: '#3A6E97', // Primary Gong blue
      background: '#FFFFFF', // White background for modern, clean look
      text: '#333333', // Dark gray text for readability
      secondary: '#FF6B6B', // Secondary accent color
    },
    fontFamily: 'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif',
  };
  const config = {
    products: [Products.emailMagicLinks],
    emailMagicLinksOptions: {
      loginRedirectURL: 'http://localhost:3000/authenticate',
      loginExpirationMinutes: 60,
      signupRedirectURL: 'http://localhost:3000/authenticate',
      signupExpirationMinutes: 60,
    },
  };

  return <StytchLogin config={config} styles={styles} />;
};

export default Login;