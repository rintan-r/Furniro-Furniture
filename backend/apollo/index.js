// lib/apollo.js
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from '../graphql/typeDefs.js'
import { resolvers } from '../graphql/resolvers.js'

let server

if (!global.apolloServer) {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  global.apolloServer = server
} else {
  server = global.apolloServer
}

export default startServerAndCreateNextHandler(server)
