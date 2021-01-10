import React, { useState, createContext, useContext } from 'react';
import Data from './data';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    JSON.parse(localStorage.getItem('authenticatedUser')) || null
  );

  const [isLoading, setIsLoading] = useState(false);

  const data = new Data();

  const signIn = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await data.getUser(email, password);
      if (user !== null) {
        setAuthenticatedUser({ ...user });

        localStorage.setItem('authenticatedUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('authenticatedUser');
        setAuthenticatedUser(null);
      }
      setIsLoading(false);
      return user;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      return null;
    }
  };

  const signUp = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await data.createUser(email, password);
      if (user !== null) {
        setAuthenticatedUser({ ...user });

        localStorage.setItem('authenticatedUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('authenticatedUser');
        setAuthenticatedUser(null);
      }
      setIsLoading(false);
      return user;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
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
      signUp,
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useContextValue = () => useContext(Context);

export default useContextValue;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
