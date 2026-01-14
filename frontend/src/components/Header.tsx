
import React from 'react';
import { AppView } from '../types';
import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-white border-b border-[#242527] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setView(AppView.LANDING)}
        >
          <div className="bg-[#E53E3E] p-2 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#121212]">AADHAR Drishti</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-tight">National Freshness System</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <button
            onClick={() => setView(AppView.ADMIN)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              currentView === AppView.ADMIN 
                ? 'bg-[#242527] text-white' 
                : 'text-[#121212] hover:bg-gray-100'
            }`}
          >
            Admin Dashboard
          </button>
          <button
            onClick={() => setView(AppView.CITIZEN)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              currentView === AppView.CITIZEN 
                ? 'bg-[#242527] text-white' 
                : 'text-[#121212] hover:bg-gray-100'
            }`}
          >
            Citizen Panel
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" 
            alt="India Flag" 
            className="h-6 border border-gray-200" 
          />
          <div className="hidden sm:block text-right">
            <p className="text-[10px] font-bold text-gray-800">GOVERNMENT OF INDIA</p>
            <p className="text-[10px] text-gray-500">UIDAI Prototype</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
