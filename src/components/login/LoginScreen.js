import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
export const LoginScreen = () => {
  console.log(types);
  const navigate = useNavigate();
  const lastPath = localStorage.getItem("lastpath") || "/marvel";
  console.log(lastPath);

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    navigate(lastPath, {
      replace: true,
    });

    const action = {
      type: types.login,
      payload: {
        name: "Yeison Enmanuel",
      },
    };
    dispatch(action);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
