import { useContext, type JSX } from "react";
import { AuthContext } from "../auth/context/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { state } = useContext(AuthContext);
  const { user, loading } = state;

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};
