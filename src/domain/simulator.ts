import { db, nowISO } from './db.js';

export function startSimulator() {
  setInterval(() => {
    for (const [id, m] of db.metrics.entries()) {
      const delta = Math.round((Math.random() - 0.4) * 6);
      const newCount = Math.max(0, m.vehicleCount + delta);
      const newSpeed = Math.max(5, Math.min(90, m.avgSpeed + (Math.random() - 0.5) * 5));
      m.vehicleCount = newCount;
      m.avgSpeed = Number(newSpeed.toFixed(1));
      m.lastUpdatedAt = nowISO();

      const signal = db.signals.find(s => s.intersectionId === id);
      if (signal) {
        const congested = m.vehicleCount > 25 || m.avgSpeed < 15;
        if (congested && signal.state !== 'GREEN' && Math.random() > 0.6) {
          signal.state = 'GREEN';
          signal.lastSwitchAt = nowISO();
        } else if (!congested && Math.random() > 0.8) {
          signal.state = signal.state === 'GREEN' ? 'RED' : 'GREEN';
          signal.lastSwitchAt = nowISO();
        }
      }
    }
  }, 2000);
}