import { Navigate } from 'react-router-dom';
import { IdentityProvider, useStytchUser } from '@stytch/react';
import { useEffect } from 'react';
const Authorize = () => {
  const { user } = useStytchUser();

  useEffect(() => {
    if (!user) {
      window.location.href = '/';
    }
  }, [user]);

  return <IdentityProvider />;
};

export default Authorize; 