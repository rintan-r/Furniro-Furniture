// src/providers/Providers.jsx
"use client";

import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import { store } from "@/store/store";
import { client } from "@/lib/apolloClient";

export default function Providers({ children }) {
  return(
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ReduxProvider>
  );
}
