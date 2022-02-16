import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return user.logged ? <Navigate to="/marvel" /> : children;
};

export default PublicRoute;
