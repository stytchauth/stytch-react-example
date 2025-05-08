import { Navigate } from 'react-router-dom';
import { IdentityProvider, useStytchUser } from '@stytch/react';

const Authorize = () => {
  const { user } = useStytchUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <IdentityProvider />;
};

export default Authorize; 