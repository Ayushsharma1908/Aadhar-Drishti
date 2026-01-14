
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, MapPin, FileText, Calendar, ShieldCheck, HelpCircle } from 'lucide-react';

const CitizenPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [aadhaarLast4, setAadhaarLast4] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsVerifying(false);
    }, 1500);
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-[#242527]" />
            </div>
            <h2 className="text-2xl font-bold">Check Update Status</h2>
            <p className="text-sm text-gray-500 mt-2 italic">Demo Authentication Environment</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2 ml-1">Mobile Number</label>
              <input 
                type="tel" 
                required
                maxLength={10}
                placeholder="9876543210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2 ml-1">Aadhaar (Last 4 Digits)</label>
              <input 
                type="password" 
                required
                maxLength={4}
                placeholder="XXXX"
                value={aadhaarLast4}
                onChange={(e) => setAadhaarLast4(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-xl text-[11px] text-blue-700 border border-blue-100 leading-relaxed">
              <strong>Notice:</strong> This is a privacy-first system. We do not access real UIDAI databases. The status displayed will be based on aggregated trends in your district.
            </div>
            <button 
              disabled={isVerifying}
              className="w-full bg-[#E53E3E] text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-100 disabled:opacity-50"
            >
              {isVerifying ? 'Verifying Demo Account...' : 'Check Status'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* User Hero */}
      <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-4 border-green-500">
            <span className="text-2xl font-bold text-gray-400">UID</span>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 p-1.5 rounded-full border-4 border-white">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold mb-1">Aadhaar Freshness Overview</h2>
          <p className="text-gray-500 text-sm">Based on district trends in <span className="font-bold text-gray-700">South Bangalore</span></p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-xs font-medium text-green-700">Mobile Linked</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-full border border-yellow-100">
              <AlertCircle className="w-4 h-4 text-yellow-600" />
              <span className="text-xs font-medium text-yellow-700">Address May Be Outdated</span>
            </div>
          </div>
        </div>
        <div className="bg-[#242527] p-6 rounded-2xl text-center text-white w-full md:w-auto">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Update Priority</p>
          <p className="text-2xl font-bold text-red-500">MEDIUM</p>
          <p className="text-[10px] text-gray-400 mt-1">Next Review: July 2025</p>
        </div>
      </div>

      {/* Grid: Status Details + Transparency */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            Detailed Freshness Report
          </h3>
          <div className="space-y-6">
            <StatusItem 
              icon={ICONS.Map} 
              title="Demographics (Address)" 
              status="Needs Update" 
              color="text-yellow-600" 
              desc="High migration trends detected in your area."
            />
            <StatusItem 
              icon={ICONS.Mobile} 
              title="Mobile Linking" 
              status="Verified" 
              color="text-green-600" 
              desc="Ensures secure OTP-based authentication."
            />
            <StatusItem 
              icon={ICONS.Biometric} 
              title="Biometric Success Rate" 
              status="Likely to Succeed" 
              color="text-green-600" 
              desc="Last successful authentication was within 12 months."
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-bold">Why am I seeing this?</h3>
          </div>
          <div className="flex-grow space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              These alerts are generated using <strong>AADHAR Drishti's</strong> risk-inference engine. We look at:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" /></div>
                <p className="text-xs text-gray-600"><strong>Regional Migration:</strong> If you live in a high-migration urban cluster, your address is more likely to be outdated.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" /></div>
                <p className="text-xs text-gray-600"><strong>Update Cycle:</strong> UIDAI recommends updating documents every 10 years to maintain accuracy.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full" /></div>
                <p className="text-xs text-gray-600"><strong>Authentication Patterns:</strong> Aggregate data shows biometric matching accuracy degrades over time for specific age groups.</p>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-400">
            <ShieldCheck className="w-4 h-4" />
            No personal biometric data was used to generate this report.
          </div>
        </div>
      </div>

      {/* Action Panel */}
      <div className="bg-[#242527] text-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-xl font-bold mb-8">Next Steps for You</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <ActionCard 
            icon={<MapPin className="w-6 h-6 text-red-500" />} 
            title="Locate Center" 
            desc="Find 14 nearby update centers in South Bangalore." 
          />
          <ActionCard 
            icon={<FileText className="w-6 h-6 text-red-500" />} 
            title="Documents List" 
            desc="You'll need a Proof of Address (POA) and POI." 
          />
          <ActionCard 
            icon={<Calendar className="w-6 h-6 text-red-500" />} 
            title="Book Appointment" 
            desc="Skip the queue by booking a slot at the Aadhaar Seva Kendra." 
            primary
          />
        </div>
      </div>

      <div className="text-center pb-8">
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="text-xs font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors"
        >
          Logout / Close Panel
        </button>
      </div>
    </div>
  );
};

const StatusItem: React.FC<{ icon: React.ReactNode, title: string, status: string, color: string, desc: string }> = ({ icon, title, status, color, desc }) => (
  <div className="flex gap-4">
    <div className="bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <div className="flex items-center gap-2 mb-0.5">
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 bg-gray-50 rounded border border-gray-100 ${color}`}>{status}</span>
      </div>
      <p className="text-xs text-gray-500 leading-tight">{desc}</p>
    </div>
  </div>
);

const ActionCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, primary?: boolean }> = ({ icon, title, desc, primary }) => (
  <div className={`p-6 rounded-2xl border transition-all cursor-pointer ${primary ? 'bg-white/5 border-white/20 hover:bg-white/10' : 'border-white/10 hover:border-white/30'}`}>
    <div className="mb-4">{icon}</div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-xs text-gray-400 leading-relaxed mb-4">{desc}</p>
    <button className={`w-full py-2 text-xs font-bold rounded-lg ${primary ? 'bg-red-600 hover:bg-red-700' : 'bg-white/10 hover:bg-white/20'} transition-colors`}>
      {primary ? 'Start Now' : 'View Details'}
    </button>
  </div>
);

export default CitizenPanel;
