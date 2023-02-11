import { Dispatch, ReactNode, SetStateAction } from "react";

import { Query } from "../../types/query.types";

// Provider Props
export interface GlobalsProviderProps {
  children: ReactNode;
}

// Provider value
export interface GlobalsProviderValue {
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
}
