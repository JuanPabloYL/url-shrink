import type { AuthAction, AuthState } from "../../types";

const types = {
  login: "[AUTH] Login",
  logout: "[AUTH] Logout",
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case types.login:
      return { ...state };
    default:
      return state;
  }
};
