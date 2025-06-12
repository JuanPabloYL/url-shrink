import type { AuthAction, AuthState } from "../../types";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, loading: false, error: null };
    case "LOGOUT":
      return { ...state, user: null, loading: false, error: null };
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_USER":
      return { ...state, user: action.payload, loading: false };
    case "CHECKING_DONE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
