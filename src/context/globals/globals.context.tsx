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
});

const GlobalsProvider: React.FC<Props> = (props) => {
  const [query, setQuery] = useState<Query>(initData);

  const value: GlobalsProviderValue = useMemo(() => {
    return {
      query,
      setQuery,
    };
  }, [query]);

  return (
    <GlobalsContext.Provider value={value}>
      {props.children}
    </GlobalsContext.Provider>
  );
};

export default GlobalsProvider;
