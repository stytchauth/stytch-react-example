import {useStytch, useStytchUser} from "@stytch/react";
import {useEffect, useRef} from "react";

/*
During both the Magic link and OAuth flow, Stytch will redirect the user back to your application to a specified redirect URL (see Login.js). 
Stytch will append query parameters to the redirect URL which are then used to complete the authentication flow. 
A redirect URL for this example app will look something like: http://localhost:3000/?stytch_token_type=magic_links&token=abc123

TokenAuthenticator will detect the presence of a token in the query parameters, and attempt to authenticate it.
On successful authentication, a session will be created and the user will be shown Profile.js 
*/
const TokenAuthenticator = ({children}) => {
  const stytch = useStytch();
  const {user} = useStytchUser();
  const isAuthenticating = useRef(false);

  useEffect(() => {
    // Guard: prevent running if stytch is not available or user exists
    if (user) {
      return;
    }

    // Guard: prevent concurrent authentication attempts
    if (isAuthenticating.current) {
      return;
    }

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    const tokenType = queryParams.get("stytch_token_type");

    // Guard: prevent running if no token or tokenType
    if (!token || !tokenType) {
      return;
    }

    const authenticateToken = async () => {
      isAuthenticating.current = true;

      const authOptions = {
        session_duration_minutes: 60
      };

      // If a token is found, authenticate it with the appropriate method
      switch (tokenType) {
        case "magic_links":
          await stytch.magicLinks.authenticate(token, authOptions);
          break;
        case "oauth":
          await stytch.oauth.authenticate(token, authOptions);
          break;
        default:
          console.warn(`Unsupported token type: ${tokenType}`);
          return;
      }

      window.location.href = "/";
    };

    authenticateToken();
  }, [stytch, user]);

  return children;
};

export default TokenAuthenticator;
