import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: PORT,
      host: "0.0.0.0",
    },
    cors: {
      origin: [
        "http://localhost:3000",
        "https://furniro-furniture-kohl.vercel.app/",
      ],
      credentials: true,
    },
  });

  console.log(`🚀 Apollo Server ready at ${url}`);
}

startServer();
