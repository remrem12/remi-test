import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { email } = useContext(UserContext);

  if (!email) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
