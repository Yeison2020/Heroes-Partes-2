import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ childre }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user.logged ? childre : <Navigate to="/login" />;
};

export default PrivateRoute;
