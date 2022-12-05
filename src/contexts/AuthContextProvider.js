import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

export const API = "http://34.91.217.40/";

const AuthContextProvider = ({ children }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(false);

  const register = async formData => {
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
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setCurrentUser(username);
    } catch (err) {
      console.log(err);
    }
  };

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}account/api/token/refresh/`,
        { refresh: tokens.refresh },
        config
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const username = localStorage.getItem("username");
      setCurrentUser(username);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("username");
    setCurrentUser(false);
  }

  async function deleteAccount() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}account/delete-account/`, config);
      handleLogout();
    } catch (err) {
      console.log(err);
    }
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
    deleteAccount,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
