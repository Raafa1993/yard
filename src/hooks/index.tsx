import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";

interface TransactionsProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
