import { createContext } from "react";

import { User, UserContextData } from "./types";

const UserContext = createContext<UserContextData>({
  user: {} as User,
  // eslint-disable-next-line prettier/prettier
  login: () => {},
  // eslint-disable-next-line prettier/prettier
  logout: () => {},
});

export default UserContext;
