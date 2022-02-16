import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate } from "react-router-dom";

// Import Notes here I needed to write children the entire word for my Component to render It's childrens
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user.logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
