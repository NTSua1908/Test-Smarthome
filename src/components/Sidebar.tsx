import React from 'react';
import { 
  LayoutDashboard, 
  Armchair, 
  UtensilsCrossed, 
  Bed, 
  Settings, 
  PlusCircle, 
  LogOut,
  Home
} from 'lucide-react';
import { ViewType } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'living-room', label: 'Living Room', icon: Armchair },
    { id: 'kitchen', label: 'Kitchen', icon: UtensilsCrossed },
    { id: 'bedroom', label: 'Bedroom', icon: Bed },
  ];

  return (
    <aside className="w-64 flex flex-col bg-slate-950/50 border-r border-slate-800 p-6 h-screen sticky top-0 z-50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Home size={24} fill="currentColor" fillOpacity={0.2} />
        </div>
        <div>
          <h1 className="text-white text-base font-bold leading-none">Smart Home</h1>
          <p className="text-slate-400 text-xs mt-1">Welcome back, Alex</p>
        </div>
      </motion.div>

      <nav className="flex flex-col gap-2 flex-grow">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onViewChange(item.id as ViewType)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative group ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-white rounded-r-full"
                />
              )}
            </motion.button>
          );
        })}

        <div className="mt-auto flex flex-col gap-2">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => onViewChange('settings')}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative ${
              currentView === 'settings'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
            {currentView === 'settings' && (
              <motion.div 
                layoutId="active-pill"
                className="absolute left-0 w-1 h-6 bg-white rounded-r-full"
              />
            )}
          </motion.button>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-all"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Sign Out</span>
          </motion.button>
        </div>
      </nav>

      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary h-11 px-4 text-white text-sm font-bold shadow-lg shadow-primary/20"
      >
        <PlusCircle size={20} />
        <span>Add Device</span>
      </motion.button>
    </aside>
  );
};
