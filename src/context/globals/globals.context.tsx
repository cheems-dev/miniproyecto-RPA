import React, { createContext } from "react";
import { useMemo, useState } from "react";
import { ReactNode } from "react";

import { GlobalsProviderValue } from "./globals.context.types";
import CONSTANTS from "../../config/constants";
import { Query } from "../../types/query.types";
import HELPERS from "../../utils/helpers";

// Provider Props
export interface Props {
  children: ReactNode;
}

const { categories, countries } = HELPERS;
const { PAGE_BY_DEFAULT } = CONSTANTS;

const initData = {
  category: categories[0].id,
  country: countries[0].id,
  page: PAGE_BY_DEFAULT,
};

export const GlobalsContext = createContext<GlobalsProviderValue>({
  query: initData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setQuery(value: React.SetStateAction<Query>): void {
    throw new Error("Function not implemented.");
  },
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLoading(value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});

const GlobalsProvider: React.FC<Props> = (props) => {
  const [query, setQuery] = useState<Query>(initData);
  const [loading, setLoading] = useState(false);

  const value: GlobalsProviderValue = useMemo(() => {
    return {
      query,
      setQuery,
      loading,
      setLoading,
    };
  }, [query, loading]);

  return (
    <GlobalsContext.Provider value={value}>
      {props.children}
    </GlobalsContext.Provider>
  );
};

export default GlobalsProvider;
