import type { Intersection, Signal, Metrics, Event } from './types.js';

export const nowISO = () => new Date().toISOString();

const intersections: Intersection[] = [
  { id: 'I-101', name: 'King Fahd Rd & 5th Ave', lat: 25.276987, lng: 55.296249 },
  { id: 'I-202', name: 'Al-Shaheed & Gulf',     lat: 29.311660, lng: 47.481766 }
];

const signals: Signal[] = [
  { id: 'S-101', intersectionId: 'I-101', state: 'RED',    lastSwitchAt: nowISO() },
  { id: 'S-202', intersectionId: 'I-202', state: 'GREEN',  lastSwitchAt: nowISO() }
];

const metrics = new Map<string, Metrics>([
  ['I-101', { intersectionId: 'I-101', vehicleCount: 12, avgSpeed: 34, lastUpdatedAt: nowISO() }],
  ['I-202', { intersectionId: 'I-202', vehicleCount: 7,  avgSpeed: 42, lastUpdatedAt: nowISO() }]
]);

const events: Event[] = [];

export const db = {
  intersections,
  signals,
  metrics,
  events
};