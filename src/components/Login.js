import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  // OpenAI Branding: Modern, minimalist; uses company palette
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#FFFFFF', // OpenAI primary white
      color: '#000000', // Main black text
      borderRadius: '12px',
      boxShadow: '0 2px 16px rgba(16,185,129,0.07)',
      padding: '2rem 1.25rem',
      margin: '2rem auto',
      maxWidth: 420
    },
    buttons: {
      primary: {
        backgroundColor: '#10B981', // OpenAI green
        color: '#FFFFFF', // White for readable button text
        borderColor: '#10B981',
        borderRadius: '8px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        boxShadow: 'none',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#08916A', // darker green hover
          color: '#FFFFFF',
        },
      },
    },
    colors: {
      primary: '#10B981', // Main green
      background: '#F7FAFC', // Light background from secondary colors
      text: '#000000', // Main black
      secondary: '#FBBF24', // Accent yellow
      border: '#E5E7EB', // Subtle border grey
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
