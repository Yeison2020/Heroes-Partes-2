import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";

import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  // Here I'm setting my private routes just for the user when They're logged in.

  // Private Routes is a high order componet who will reiceve childrens meaning my DashboardRoutes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
