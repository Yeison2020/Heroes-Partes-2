import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";

// Import Notes here I needed to write children the entire word for my Component to render It's childrens
const PrivateRoute = ({ children }) => {
  console.log("Private Routes");
  const location = useLocation();
  const { user } = useContext(AuthContext);
  console.log(location);
  localStorage.setItem("lastpath", location.pathname);

  return user.logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
