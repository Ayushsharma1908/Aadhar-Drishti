
import React from 'react';
import { Shield, Users, BarChart3, Bell, Map, FileText, Smartphone, Fingerprint } from 'lucide-react';

export const THEME = {
  bg: '#F8F7F4',
  text: '#121212',
  nav: '#242527',
  accent: '#E53E3E', // Government Red
};

export const MOCK_METRICS = [
  { title: 'Data Freshness Score', value: '78.4', change: '+2.1%', trend: 'up', description: 'National average data accuracy' },
  { title: 'Records Needing Update', value: '14.2%', change: '-0.5%', trend: 'down', description: 'Estimated outdated demographics' },
  { title: 'High-Risk Districts', value: '42', change: '+4', trend: 'up', description: 'Critical areas with <60% freshness' },
  { title: 'Auth Failure Rate', value: '3.8%', change: '-0.2%', trend: 'down', description: 'Aggregated biometric matching failure' },
];

export const MOCK_RECOMMENDATIONS = [
  { title: "Mobile Vans Deployment", action: "Deploy 15 mobile Aadhaar update vans to the Vidarbha region based on high biometric failure rates in elderly groups.", priority: "High" },
  { title: "SMS Awareness Campaign", action: "Initiate multilingual SMS drive for citizens aged 18-25 in Karnataka regarding mandatory 10-year document updates.", priority: "Medium" },
  { title: "Doorstep Services", action: "Partner with IPPB for doorstep mobile-linking services for senior citizens in high-migration urban clusters.", priority: "Medium" }
];

export const ICONS = {
  Privacy: <Shield className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Stats: <BarChart3 className="w-5 h-5" />,
  Alert: <Bell className="w-5 h-5" />,
  Map: <Map className="w-5 h-5" />,
  Doc: <FileText className="w-5 h-5" />,
  Mobile: <Smartphone className="w-5 h-5" />,
  Biometric: <Fingerprint className="w-5 h-5" />,
};
