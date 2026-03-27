import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const isServer = typeof window === "undefined";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: isServer
      ? process.env.GRAPHQL_ENDPOINT // server-side
      : "/api/graphql",             // client-side
  }),
  cache: new InMemoryCache(),
});
