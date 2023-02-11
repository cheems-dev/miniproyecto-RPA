import { useState } from "react";

import { User } from "./types";
import UserContext from "./users-context";

interface IAuthProviderProps {
  children: JSX.Element;
}

function UserProvider({ children }: IAuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return {} as User;
  });

  const login = (username: string, token: string, authenticated: boolean) => {
    setUser({ username, token, authenticated: true });
    localStorage.setItem(
      "user",
      JSON.stringify({ username, token, authenticated })
    );
  };

  const logout = () => {
    setUser({} as User);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
