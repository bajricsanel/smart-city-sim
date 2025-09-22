import { db, nowISO } from '../domain/db.js';

export const Mutation = {
  switchSignal: (_: unknown, args: { id: string; state: 'RED' | 'YELLOW' | 'GREEN' }) => {
    const s = db.signals.find(x => x.id === args.id);
    if (!s) throw new Error('Signal not found');
    s.state = args.state;
    s.lastSwitchAt = nowISO();
    return s;
  },
  injectEvent: (_: unknown, args: { intersectionId: string; type: 'ACCIDENT' | 'CONGESTION' | 'ROADWORK'; severity: number }) => {
    const id = 'EV-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    const ev = { id, type: args.type, intersectionId: args.intersectionId, severity: Math.max(1, Math.min(5, args.severity)) };
    db.events.push(ev);
    return ev;
  }
};