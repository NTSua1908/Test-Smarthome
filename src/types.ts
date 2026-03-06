export type DeviceStatus = 'on' | 'off' | 'standby';

export interface Device {
  id: string;
  name: string;
  type: string;
  category: 'lighting' | 'cooling' | 'entertainment' | 'appliance' | 'security' | 'other';
  status: DeviceStatus;
  value?: string | number;
  icon: string;
}

export interface Room {
  id: string;
  name: string;
  icon: string;
  devices: Device[];
  temp?: number;
  humidity?: number;
}

export type ViewType = 'dashboard' | 'living-room' | 'kitchen' | 'bedroom' | 'settings';
