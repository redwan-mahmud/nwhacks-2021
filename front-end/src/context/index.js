import React, { useState, createContext, useContext } from 'react';
import Data from './data';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    Cookies.getJSON('authenticatedUser') || null
  );
  const data = new Data();

  const signIn = async (email, password) => {
    const user = await data.getUser(email, password);
    if (user !== null) {
      setAuthenticatedUser({ ...user });
      const cookieOptions = {
        expires: '3h',
      };
      Cookies.set('authenticatedUser', JSON.stringify(user), {
        cookieOptions,
      });
    } else {
      Cookies.remove('authenticatedUser');
      setAuthenticatedUser(null);
    }

    return user;
  };

  const signOut = () => {
    Cookies.remove('authenticatedUser');
    setAuthenticatedUser(null);
  };

  const value = {
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
