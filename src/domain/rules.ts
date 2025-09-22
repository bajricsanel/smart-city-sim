import { db } from './db.js';

export function predict(intersectionId: string, horizonMins: number) {
  const m = db.metrics.get(intersectionId);
  if (!m) {
    return { level: 'LOW', score: 0, reason: 'No metrics' };
  }

  const density = Math.min(1, m.vehicleCount / 50);
  const speedPenalty = Math.max(0, (30 - Math.min(30, m.avgSpeed)) / 30);
  const horizonFactor = Math.min(0.2, horizonMins / 100);

  const score = Math.min(1, 0.6 * density + 0.3 * speedPenalty + horizonFactor);
  const level = score > 0.65 ? 'HIGH' : score > 0.35 ? 'MED' : 'LOW';
  const reason = `vehicles=${m.vehicleCount}, avgSpeed=${m.avgSpeed}km/h, horizon=${horizonMins}m`;

  return { level, score: Number(score.toFixed(2)), reason };
}