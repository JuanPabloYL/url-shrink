import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { Dashboard } from "../app/components/Dashboard";
import { SignUpPage } from "../auth/pages/SignUpPage";
import { PrivateRoute } from "./PrivateRoute";

import { DotLoader } from "react-spinners";
import { useAuth } from "../auth/context/AuthProvider";

export const AppRouter = () => {
  const { state } = useAuth();
  const { user, loading } = state;
  console.log(user);

  if (loading)
    return (
      <div className="loader">
        <DotLoader color="#335ceb" />;
      </div>
    );

  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        {user ? (
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
        )}
        <Route path="/*" element={<Navigate to={`/login`} />} />
      </Routes>
    </div>
  );
};
