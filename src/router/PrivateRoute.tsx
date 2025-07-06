import { useContext, type JSX } from "react";
import { AuthContext } from "../auth/context/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not provided.");
  }
  const { state } = authContext;
  const { user, loading } = state;

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};
