import React, { useState, createContext, useContext } from 'react';
import Data from './data';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    JSON.parse(localStorage.getItem('authenticatedUser')) || null
  );

  console.log(authenticatedUser);
  const [isLoading, setIsLoading] = useState(false);

  const data = new Data();

  const signIn = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await data.getUser(email, password);
      if (user !== null) {
        console.log(user);
        setAuthenticatedUser({ ...user });

        localStorage.setItem(
          'authenticatedUser',
          JSON.stringify(authenticatedUser)
        );
      } else {
        localStorage.removeItem('authenticatedUser');
        setAuthenticatedUser(null);
      }
      setIsLoading(false);
      return user;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const signOut = () => {
    localStorage.removeItem('authenticatedUser');
    setAuthenticatedUser(null);
  };

  const value = {
    isLoading,
    authenticatedUser,
    data,
    actions: {
      signIn,
      signOut,
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useContextValue = () => useContext(Context);

export default useContextValue;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
