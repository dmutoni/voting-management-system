import React from "react";
import { createContext, useState, useEffect } from "react";
import { getToken } from "../helpers/getData";
const AuthContext = createContext({
  authedUser: {},
  setAuthUser: (user) => {},
  isLoggedIn: false,
  setIsLoggedIn: () => null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async function () {
      let token = await getToken();
      setIsLoggedIn(token != null);
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) return <p>Loading ......</p>;
  return (
    <AuthContext.Provider
      value={{
        authedUser: user,
        setAuthUser: setUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
