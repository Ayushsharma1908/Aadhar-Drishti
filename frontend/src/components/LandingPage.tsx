
import React from 'react';
import { AppView } from '../types';
import { motion } from 'framer-motion';
import { Shield, Database, Users, EyeOff } from 'lucide-react';

interface LandingPageProps {
  setView: (view: AppView) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setView }) => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Privacy-First Aadhaar <span className="text-[#E53E3E]">Data Freshness</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Ensuring national benefit delivery through community-level awareness and 
          aggregated analytics, strictly adhering to the Aadhaar Act & DPDP framework.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-gray-300 transition-all cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setView(AppView.ADMIN)}
        >
          <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Database className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Government Panel</h3>
          <p className="text-gray-600 mb-6">
            Access macro-level analytics to identify districts with high risk of authentication failure 
            and generate actionable awareness strategies.
          </p>
          <ul className="space-y-3 mb-8 text-sm text-gray-500">
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"/> Aggregated Risk Maps</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"/> Migration Impact Analytics</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"/> Recommendation Engine</li>
          </ul>
          <button className="w-full bg-[#E53E3E] text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
            Enter Admin Dashboard
          </button>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-gray-300 transition-all cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setView(AppView.CITIZEN)}
        >
          <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Users className="text-green-600 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Citizen Panel</h3>
          <p className="text-gray-600 mb-6">
            Empowering individuals with proactive guidance on their Aadhaar update status 
            without storing personal biometric data.
          </p>
          <ul className="space-y-3 mb-8 text-sm text-gray-500">
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"/> Personalized Update Guidance</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"/> Nearby Center Locator</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"/> Document Checklists</li>
          </ul>
          <button className="w-full bg-[#242527] text-white py-3 rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-gray-200">
            Launch Citizen Portal
          </button>
        </motion.div>
      </div>

      <div className="mt-16 bg-white/50 border border-[#242527]/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-white p-4 rounded-full shadow-sm">
          <EyeOff className="w-8 h-8 text-[#242527]" />
        </div>
        <div>
          <h4 className="text-lg font-bold">Privacy Commitment</h4>
          <p className="text-sm text-gray-600">
            AADHAR Drishti operates on a zero-PII storage model. All data displayed in the Admin panel is 
            synthetic or anonymized and aggregated to the district level. No individual biometric or Aadhaar 
            records are ever accessed or processed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
