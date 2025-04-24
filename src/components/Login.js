import React from 'react';
import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

/*
Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch

This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
  // OpenAI Branding: Modern, minimalist; dark/light mode inspired
  const styles = {
    container: {
      width: '100%',
      backgroundColor: '#1C1C1E', // main dark background
      color: '#F9F9F9', // main light text
      borderRadius: '12px', // modern, clean line
      boxShadow: '0 2px 16px rgba(28,28,30,0.10)',
      padding: '2rem 1.25rem',
      margin: '2rem auto',
      maxWidth: 420
    },
    buttons: {
      primary: {
        backgroundColor: '#1C1C1E', // Primary dark
        color: '#F9F9F9', // Primary light
        borderColor: '#EDEDED', // sublte border
        borderRadius: '8px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        boxShadow: 'none',
        transition: 'background .2s',
        '&:hover': {
          backgroundColor: '#7E7E7E', // muted hover
          color: '#F9F9F9',
        },
      },
    },
    colors: {
      primary: '#1C1C1E', // main dark
      background: '#F9F9F9', // off-white bg alt
      text: '#1C1C1E', // dark text for light bg
      secondary: '#7E7E7E', // muted element
      border: '#EDEDED', // delicate border
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
