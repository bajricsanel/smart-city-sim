# Smart-City Traffic Simulation API (GraphQL + TypeScript)

A tiny, production-style GraphQL service that simulates intersections, traffic signals, sensors
and events (accidents, congestion). Includes a simple "AI" heuristic to predict congestion.

## Why this sample?
- Clean architecture: separated domain logic and resolvers
- TypeScript + GraphQL with clear schema-first approach
- Easy to run locally (Node) or with Docker
- Extensible: add Redis rate-limits, Postgres persistence, GraphQL subscriptions

## Tech
- TypeScript
- Apollo Server (GraphQL)
- Node 18+
- (Optional) Docker & docker-compose

## Run locally
```bash
npm install
npm run start
