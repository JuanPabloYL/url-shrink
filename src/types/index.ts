export type AuthAction =
  | { type: "login"; payload: string }
  | { type: "logout" };

export interface AuthState {
  logged: boolean;
  user: string;
}

export interface ShortenedLink {
  id: string;
  originalURL: string;
  shortURL: string;
  customAlias?: string;
  title?: string;
  createdAt: string;
}
