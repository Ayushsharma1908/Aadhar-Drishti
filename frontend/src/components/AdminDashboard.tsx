
import React, { useState, useEffect } from 'react';
import { MOCK_METRICS, MOCK_RECOMMENDATIONS, ICONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, Map as MapIcon, RefreshCw, TrendingUp } from 'lucide-react';

const AGE_DATA = [
  { name: '0-5 yrs', gap: 45, failure: 12 },
  { name: '5-18 yrs', gap: 28, failure: 5 },
  { name: '18-60 yrs', gap: 12, failure: 2 },
  { name: '60+ yrs', gap: 35, failure: 18 },
];

const UPDATE_TYPE_DATA = [
  { name: 'Address', value: 40 },
  { name: 'Mobile', value: 35 },
  { name: 'Biometric', value: 25 },
];

const COLORS = ['#E53E3E', '#2D3748', '#4A5568', '#718096'];

const AdminDashboard: React.FC = () => {
  const [filterState, setFilterState] = useState('All India');
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-8">
      {/* Filters & Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-4">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <MapIcon className="w-5 h-5 text-gray-400" />
            National Insights: {filterState}
          </h2>
          <p className="text-xs text-gray-500">Last updated: Today, 10:00 AM</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <select 
            value={filterState} 
            onChange={(e) => setFilterState(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-red-500 bg-white"
          >
            <option>All India</option>
            <option>Maharashtra</option>
            <option>Uttar Pradesh</option>
            <option>Karnataka</option>
          </select>
          <button 
            onClick={handleRefresh}
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_METRICS.map((metric, idx) => (
          <motion.div 
            key={metric.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gray-50 rounded-full opacity-50 z-0" />
            <p className="text-xs font-semibold text-gray-500 mb-1 z-10 relative uppercase tracking-wider">{metric.title}</p>
            <div className="flex items-baseline gap-2 z-10 relative">
              <span className="text-3xl font-bold">{metric.value}</span>
              <span className={`text-xs font-bold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 z-10 relative">{metric.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts & Heatmap Simulation */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
            <h3 className="text-md font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-red-500" />
              Age-Wise Update Gaps & Auth Failures
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={AGE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar name="Update Gap %" dataKey="gap" fill="#242527" radius={[4, 4, 0, 0]} />
                  <Bar name="Auth Failure %" dataKey="failure" fill="#E53E3E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* District Map Simulation */}
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
            <h3 className="text-md font-bold mb-6 flex items-center gap-2">
              <MapIcon className="w-4 h-4 text-red-500" />
              Geographical Risk Heatmap
            </h3>
            <div className="bg-gray-50 rounded-xl aspect-[16/9] flex items-center justify-center border border-dashed border-gray-300 relative">
              <div className="text-center p-8">
                <p className="text-sm text-gray-500 mb-2">Simulated GIS View - High-Density Clusters</p>
                <div className="flex gap-4 justify-center mt-4">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-green-500" /><span className="text-[10px]">Healthy</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-yellow-500" /><span className="text-[10px]">Attention</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500" /><span className="text-[10px]">Critical</span></div>
                </div>
              </div>
              {/* Mock Map Pins */}
              <div className="absolute top-1/4 left-1/3 bg-red-500/20 p-4 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 bg-yellow-500/20 p-6 rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 bg-red-500/20 p-3 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
            <h3 className="text-md font-bold mb-6">Update Type Analysis</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={UPDATE_TYPE_DATA}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {UPDATE_TYPE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#242527] text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-red-500" />
              <h3 className="font-bold">Recommendation Engine</h3>
            </div>
            <p className="text-xs text-gray-400 mb-6 italic">Auto-generated actions based on current telemetry.</p>
            <div className="space-y-4">
              {MOCK_RECOMMENDATIONS.map((rec, i) => (
                <div key={i} className="border-l-2 border-red-500 pl-4 py-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-tighter">{rec.priority} Priority</span>
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{rec.title}</h4>
                  <p className="text-[11px] text-gray-300 leading-tight">{rec.action}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-xs font-bold transition-colors">
              Approve awareness drive
            </button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-yellow-800 uppercase">Privacy Guard Active</p>
              <p className="text-[10px] text-yellow-700 leading-relaxed">
                System compliant with DPDP Act. Differential privacy noise (ε=0.1) added to district counts. Individual tracking disabled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
