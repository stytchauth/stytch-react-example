import { useEffect, useRef, Redirect } from 'react';
import { IdentityProvider, useStytchUser } from '@stytch/react';

const Authorize = () => {
  const containerRef = useRef(null);

  const { user } = useStytchUser();

  if (!user) {
    const loginURL = `/?returnTo=${window.location.toString()}`
    return <Redirect to={loginURL} />
  }

  return <IdentityProvider />

};

export default Authorize; 