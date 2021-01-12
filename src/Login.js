import React from 'react';
import Stytch from '@stytch/stytch-js'

const Login = () => {
	React.useEffect(() => {
		// Initialize Stytch.js with your public token. You can find this in your Stytch dashboard under API Keys.
		var STYTCH_PUBLIC_TOKEN = "public-token-test-111111111";
		var stytch = Stytch(STYTCH_PUBLIC_TOKEN, {
			onEvent: (response) => {
				// We recommend you save the userId into your DB if this is true
				if (response.data.type === 'USER_EVENT_TYPE' && response.data.created === true) {
					try {
						fetch('/users', { 
							method: 'POST',
							body: JSON.stringify({ userId: response.data.userID }),
							headers: {
								'Content-Type': 'application/json'
							},
						});
					} catch(e) {
						console.log(e);
					}
				}
			},
			onSuccess: (response) => {
					// Handle a successfully sent magic link
					console.log(response);
			},
			onError: (response) => {
				console.log(response);
			}
		});
		var style = {
			fontFamily: '"Helvetica New", Helvetica, sans-serif',
			textAlign: 'center',
			buttonColor: '#106ee9',
			fullWidth: true,
			inputTextColor: '#090909'
		};
		var loginOrCreateUserConfig = {
      loginConfig: {
        magicLinkUrl: "http://localhost:9000/authenticate",
        expirationMinutes: 30,
      },
      createUserConfig: {
        magicLinkUrl: "http://localhost:9000/authenticate",
        expirationMinutes: 30,
      },
   };
		stytch.mountLoginOrCreateUser({
			elementId: "#magic-link",
			style: style,
			config: loginOrCreateUserConfig
		});
	}, []);

	return (
		<div className="Sign-in-container">
			<h2>Sign up or log in</h2>
			<div id="magic-link"></div>
		</div>
	);
}

export default Login