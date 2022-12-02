import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

export const API = 'http://34.116.219.34/';

const AuthContextProvider = ({ children }) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(false);

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const { data } = await axios.post(`${API}account/register/`, formData);
      setSuccess(data);
      console.log(data);
    } catch (err) {
      console.log(Object.values(err.response.data).flat(2)[0]);
      setSuccess(Object.values(err.response.data).flat(2)[0]);
      setError(Object.values(err.response.data).flat(2));
    }
  };

  const login = async (formData, username) => {
    try {
      const res = await axios.post(`${API}account/login/`, formData);
      console.log(res);
      localStorage.setItem('tokens', JSON.stringify(res.data));
      localStorage.setItem('username', username);
      setCurrentUser(username);
    } catch (err) {
      console.log(err);
    }
  };

  async function checkAuth() {
    console.log('Check Auth Worked!');
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/account/api/token/refresh/`,
        { refresh: tokens.refresh },
        config
      );
      localStorage.setItem(
        'tokens',
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem('email');
      setCurrentUser(email);
      console.log(res);
    } catch (err) {
      console.log(err);
      handleLogout();
    }
  }

  function handleLogout() {
    localStorage.removeItem('tokens');
    localStorage.removeItem('email');
    setCurrentUser(false);
  }

  const values = {
    error,
    success,
    currentUser,

    checkAuth,
    setSuccess,
    setError,
    register,
    login,
    handleLogout,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
