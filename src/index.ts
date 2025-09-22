import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fs from 'node:fs';
import path from 'node:path';
import { resolvers } from './resolvers/index.js';
import { startSimulator } from './domain/simulator.js';

const schemaPath = path.join(process.cwd(), 'src', 'schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, 'utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

async function main() {
  startSimulator();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });
  console.log(`🚦 Smart-City GraphQL ready at ${url}`);
}

main().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});