import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs

Google Branding: Clean, playful, and colorful with sans-serif fonts.
Primary colors: #4285F4 (Blue), #DB4437 (Red), #F4B400 (Yellow), #0F9D58 (Green).
*/
const Login = () => {
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#fff', // Google white
      color: '#202124', // Google dark text
      borderRadius: '12px',
      boxShadow: '0 2px 16px rgba(60,64,67,0.08)',
      padding: '2rem 1.25rem',
      margin: '2rem auto',
      maxWidth: 420
    },
    buttons: {
      primary: {
        backgroundColor: '#4285F4',
        color: '#fff',
        borderColor: '#4285F4',
        borderRadius: '8px',
        fontWeight: 600,
        letterSpacing: '0.04em',
        boxShadow: 'none',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#3367D6',
          color: '#fff',
        },
      },
      secondary: {
        backgroundColor: '#F1F1F1',
        color: '#202124',
        borderColor: '#ABABAB',
        borderRadius: '8px',
        fontWeight: 500,
        '&:hover': {
          backgroundColor: '#E0E0E0',
        },
      },
    },
    colors: {
      primary: '#4285F4',
      background: '#fff',
      text: '#202124',
      secondary: '#ABABAB',
      accentRed: '#DB4437',
      accentYellow: '#F4B400',
      accentGreen: '#0F9D58',
      border: '#F1F1F1',
    },
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
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
