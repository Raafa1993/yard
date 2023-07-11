import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface TransactionsProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
