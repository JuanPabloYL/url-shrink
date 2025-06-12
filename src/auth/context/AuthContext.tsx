import { useEffect, useReducer, type ReactNode } from "react";
import { authReducer } from "./authReducer";
import type { AuthContextType, AuthState } from "../../types";
import {
  logoutFirebase,
  registerUserWithEmailPassword,
  startLogInWithEmailAndPassword,
} from "../../firebase/provider";
import { AuthContext } from "./AuthProvider";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/firebase";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Firebase

  // Sync Firebase Auth state on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, (firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        dispatch({ type: "LOGIN", payload: firebaseUser });
      } else {
        dispatch({ type: "LOGOUT" });
      }
      dispatch({ type: "CHECKING_DONE" });

      // console.log(state);
      return () => unsubscribe();
    });
  }, []);

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    dispatch({ type: "LOADING" });
    try {
      const userCredential = await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
      console.log(userCredential);

      dispatch({ type: "LOGIN", payload: userCredential?.user });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await startLogInWithEmailAndPassword(email, password);

      if (!response?.user) {
        throw new Error("User not found after login");
      }

      dispatch({ type: "LOGIN", payload: response?.user });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
  };

  const startLogOut = async () => {
    await logoutFirebase();
    dispatch({ type: "LOGOUT" });
  };

  const value: AuthContextType = {
    state,
    signup,
    login,
    logout,
    startLogOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
