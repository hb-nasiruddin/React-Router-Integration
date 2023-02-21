import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../Common/Users";

export const AuthContent = createContext({});

export function AuthContextProvider(props) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState({
    first_name: "",
    last_name: "",
  });

  const onLogin = (email, password) => {
    try {
      const user = loginUser(email, password);
      console.log(user);
      if (user && user.id) {
        setIsUserLoggedIn(true);
        setLoggedInUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    setIsUserLoggedIn(false);
    setLoggedInUser({
      first_name: "",
      last_name: "",
    });
  };

  useEffect(() => {
    const oldUser = localStorage.getItem("user");
    if (oldUser) {
      setIsUserLoggedIn(true);
      setLoggedInUser(JSON.parse(oldUser));
    }
    return () => {
      setIsUserLoggedIn(null);
      setLoggedInUser({});
    };
  }, []);

  return (
    <AuthContent.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        loggedInUser,
        onLogin,
        onLogout
      }}
    >
      {props.children}
    </AuthContent.Provider>
  );
}

export const useAuth = () => useContext(AuthContent);

export default AuthContextProvider;
