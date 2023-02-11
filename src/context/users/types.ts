export interface User {
  username: string;
  token: string;
  authenticated: boolean;
}

export interface UserContextData {
  user: User;
  login: (username: string, token: string, authenticated: boolean) => void;
  logout: () => void;
}
