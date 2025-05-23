import { IdentityProvider, useStytchUser } from '@stytch/react';
import { useEffect, useRef } from 'react';

const Authorize = () => {
  const { user } = useStytchUser();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (hasRedirected.current) {
      return;
    }
    if (!user) {
      hasRedirected.current = true;
      window.location.href = '/';
    }
  }, [user]);

  return <IdentityProvider />;
};

export default Authorize; 