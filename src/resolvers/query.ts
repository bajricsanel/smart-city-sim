import { db } from '../domain/db.js';
import { predict } from '../domain/rules.js';

export const Query = {
  intersections: () => db.intersections,
  signal: (_: unknown, args: { id: string }) =>
    db.signals.find(s => s.id === args.id) || null,
  liveMetrics: (_: unknown, args: { intersectionId: string }) =>
    db.metrics.get(args.intersectionId) || null,
  events: (_: unknown, args: { intersectionId: string }) =>
    db.events.filter(e => e.intersectionId === args.intersectionId),
  predictCongestion: (_: unknown, args: { intersectionId: string, horizonMins: number }) =>
    predict(args.intersectionId, args.horizonMins)
};