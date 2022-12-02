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

  async function getActivatedCode() {
    const res = await axios.get(`${API}account/activate`);
    console.log(res);
  }

  const values = {
    error,
    success,

    setSuccess,
    setError,
    register,
    login,
    getActivatedCode,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
