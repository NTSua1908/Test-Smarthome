import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface DeviceCardProps {
  name: string;
  category: string;
  status: 'on' | 'off' | 'standby';
  value?: string;
  icon: LucideIcon;
  onToggle?: (status: 'on' | 'off' | 'standby') => void;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ 
  name, 
  category, 
  status: initialStatus, 
  value, 
  icon: Icon,
  onToggle 
}) => {
  const [status, setStatus] = useState(initialStatus);
  const isOn = status === 'on';

  const handleToggle = () => {
    const newStatus = isOn ? 'standby' : 'on';
    setStatus(newStatus);
    onToggle?.(newStatus);
  };

  return (
    <motion.div 
      layout
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleToggle}
      className={`group relative p-6 rounded-xl border transition-all cursor-pointer overflow-hidden ${
        isOn 
          ? 'bg-white/5 border-primary/30 shadow-2xl shadow-primary/10' 
          : 'bg-slate-900/20 border-slate-800 hover:border-slate-600'
      }`}
    >
      {isOn && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-2xl rounded-full"
        />
      )}
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <motion.div 
          animate={{ 
            scale: isOn ? 1.1 : 1,
            backgroundColor: isOn ? 'rgba(43, 108, 238, 0.2)' : 'rgba(30, 41, 59, 1)'
          }}
          className={`p-3 rounded-lg ${isOn ? 'text-primary' : 'text-slate-500'}`}
        >
          <Icon size={28} />
        </motion.div>
        
        <div className={`w-12 h-6 rounded-full relative flex items-center px-1 transition-all duration-300 ${
          isOn ? 'bg-primary shadow-[0_0_15px_rgba(43,108,238,0.5)]' : 'bg-slate-700'
        }`}>
          <motion.div 
            animate={{ x: isOn ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`w-4 h-4 rounded-full shadow-sm ${isOn ? 'bg-white' : 'bg-slate-500'}`} 
          />
        </div>
      </div>
      
      <div className="relative z-10">
        <p className="text-slate-400 text-sm font-medium">{category}</p>
        <h4 className={`text-xl font-bold transition-all duration-300 ${isOn ? 'text-white' : 'text-white/40'}`}>
          {name}
        </h4>
        <motion.p 
          key={status}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-bold mt-1 uppercase tracking-tighter ${isOn ? 'text-primary' : 'text-slate-500'}`}
        >
          {isOn ? (value || 'ON') : 'STANDBY'}
        </motion.p>
      </div>
    </motion.div>
  );
};
