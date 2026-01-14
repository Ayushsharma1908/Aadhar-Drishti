
import React, { useState } from 'react';
import { AppView } from './types';
import AdminDashboard from './components/AdminDashboard';
import CitizenPanel from './components/CitizenPanel';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';


const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-100">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <AnimatePresence mode="wait">
          {view === AppView.LANDING && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <LandingPage setView={setView} />
            </motion.div>
          )}

          {view === AppView.ADMIN && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <AdminDashboard />
            </motion.div>
          )}

          {view === AppView.CITIZEN && (
            <motion.div
              key="citizen"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CitizenPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-[#242527] text-white py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-80 text-sm">
          <p>© 2024 UIDAI Hackathon Prototype - AADHAR Drishti</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy-by-Design</span>
            <span>Aadhaar Act Compliant</span>
            <span>DPDP Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
