import { useState, createContext } from "react";

export const UserContext = createContext({
  email: "",
  handleLogin: (email: string) => {},
  handleLogout: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [email, setEmail] = useState(localStorage.getItem("remi-user") || "");

  const handleLogin = (email: string) => {
    localStorage.setItem("remi-user", email);
    setEmail(email);
  };

  const handleLogout = () => {
    localStorage.setItem("remi-user", "");
    setEmail("");
  };

  return (
    <UserContext.Provider value={{ email, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
