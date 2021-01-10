import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useContectValue from '../context';

const ProtectedRoute = ({
  component: Component,
  routeProps,
  componentProps,
}) => {
  const {
    authenticatedUser: { accessToken },
  } = useContectValue();
  const isAuthenticated = !!accessToken;

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...componentProps} {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
