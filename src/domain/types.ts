export type Intersection = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

export type Signal = {
  id: string;
  intersectionId: string;
  state: 'RED' | 'YELLOW' | 'GREEN';
  lastSwitchAt: string;
};

export type Metrics = {
  intersectionId: string;
  vehicleCount: number;
  avgSpeed: number;
  lastUpdatedAt: string;
};

export type Event = {
  id: string;
  type: 'ACCIDENT' | 'CONGESTION' | 'ROADWORK';
  intersectionId: string;
  severity: number;
};