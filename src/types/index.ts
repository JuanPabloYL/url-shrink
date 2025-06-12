import type { User } from "firebase/auth";

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};
export type AuthAction =
  | {
      type: "LOGIN";
      payload: User;
    }
  | { type: "LOGOUT" }
  | { type: "CHECKING_DONE" }
  | { type: "LOADING" }
  | { type: "ERROR"; payload: string }
  | { type: "SET_USER"; payload: User | null };

export interface ShortenedLink {
  id: string;
  originalURL: string;
  shortURL: string;
  customAlias?: string;
  title?: string;
  createdAt: string;
}

export type AuthContextType = {
  state: AuthState;
  signup: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
