export type AuthAction =
  | { type: "login"; payload: string }
  | { type: "logout" };

export interface AuthState {
  logged: boolean;
  user: string;
}
