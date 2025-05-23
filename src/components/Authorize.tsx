import { IdentityProvider, useStytchUser } from '@stytch/react';
import { useEffect, type ReactElement } from 'react';

const Authorize = (): ReactElement => {
  const { user } = useStytchUser();

  useEffect(() => {
    if (!user) {
      window.location.href = '/';
    }
  }, [user]);

  return <IdentityProvider />;
};

export default Authorize;
