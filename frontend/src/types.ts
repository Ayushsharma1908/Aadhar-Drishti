
export enum AppView {
  ADMIN = 'ADMIN',
  CITIZEN = 'CITIZEN',
  LANDING = 'LANDING'
}

export interface MetricCardData {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  description: string;
}

export interface HeatmapData {
  id: string;
  name: string;
  risk: 'Healthy' | 'Needs Attention' | 'Critical';
  value: number;
}

export interface Recommendation {
  title: string;
  action: string;
  priority: 'Low' | 'Medium' | 'High';
}

export interface CitizenStatus {
  address: 'Up to Date' | 'Needs Update';
  mobile: 'Linked' | 'Not Linked';
  biometrics: 'Likely Success' | 'May Fail';
}
