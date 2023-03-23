import { message } from "antd";
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
    message.success("Login success fully");
  };

  const handleLogout = () => {
    localStorage.setItem("remi-user", "");
    setEmail("");
    message.success("Logout success fully");
  };

  return (
    <UserContext.Provider value={{ email, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
