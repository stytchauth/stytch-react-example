import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';

const Authenticate = ({ setAuthenticated }) => {
  const { search } = useLocation();
  const token = queryString.parse(search).token;
  if (typeof token !== 'string') {
    throw new Error('No valid token provided.');
  }

  const history = useHistory();

  React.useEffect(() => {
    const authenticate = async () => {
      const response = await fetch(`/authenticate/${token}`);
      if (response.ok) {
				setAuthenticated(true);
        history.push('/');
      } else {
        history.push('/login');
      }
    };

    authenticate();
	}, []);
	
	return <React.Fragment/>;
}

export default Authenticate;