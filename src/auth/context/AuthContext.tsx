import { useReducer, type ReactNode } from "react";
import { authReducer } from "./authReducer";
import type { AuthState } from "../../types";
import { AuthContext } from "./AuthProvider";

const initialState: AuthState = {
  logged: false,
  user: "Juan Pablo",
};

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
