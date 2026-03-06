import React from 'react';
import { Header } from '../components/Header';
import { StatCard } from '../components/StatCard';
import { motion } from 'motion/react';
import { 
  Zap, 
  Sun, 
  Droplets, 
  Wind, 
  Compass, 
  Video, 
  Lock, 
  LockOpen, 
  Warehouse,
  Lightbulb,
  Snowflake,
  ShieldCheck,
  Router,
  Flower2,
  Music,
  Maximize2
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const DashboardView: React.FC = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <Header title="Home Overview" subtitle="Everything is looking good today." />
      
      <div className="grid grid-cols-12 gap-6">
        {/* Main Stats */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            variants={itemVariants}
            className="col-span-2 glass-dark rounded-2xl p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative z-10 flex justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Active Devices</p>
                <h3 className="text-4xl font-black text-white">12 <span className="text-lg font-medium text-slate-500">/ 18</span></h3>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm font-medium mb-1">Current Load</p>
                <h3 className="text-4xl font-black text-primary">2.4 <span className="text-lg font-medium opacity-60">kW</span></h3>
              </div>
            </div>
            <div className="relative z-10 flex gap-4 mt-6">
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '66%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-primary h-full shadow-[0_0_10px_rgba(43,108,238,0.5)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Weather */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="glass-dark rounded-2xl p-6 relative overflow-hidden cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Outdoor Weather</p>
                <h4 className="text-2xl font-bold text-white">San Francisco</h4>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sun className="text-amber-400" size={36} fill="currentColor" />
              </motion.div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-black text-white">18°C</span>
              <div className="h-10 w-[1px] bg-slate-800"></div>
              <div>
                <p className="text-green-400 text-xs font-bold flex items-center gap-1">
                  AQI 12
                </p>
                <p className="text-slate-400 text-xs">Excellent</p>
              </div>
            </div>
            <div className="flex justify-between text-slate-400 text-xs border-t border-slate-800 pt-4">
              <div className="flex items-center gap-1"><Droplets size={14} /> 64%</div>
              <div className="flex items-center gap-1"><Wind size={14} /> 12km/h</div>
              <div className="flex items-center gap-1"><Compass size={14} /> 1012hPa</div>
            </div>
          </motion.div>

          {/* Energy Chart */}
          <motion.div 
            variants={itemVariants}
            className="glass-dark rounded-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Energy Usage</p>
              <span className="text-xs text-primary font-bold cursor-pointer hover:underline">Last 24 Hours</span>
            </div>
            <div className="flex-grow flex items-end gap-2 min-h-[120px]">
              {[40, 60, 80, 70, 90, 50].map((h, i) => (
                <div key={i} className="w-full h-full bg-primary/10 rounded-t-sm relative group">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="absolute bottom-0 w-full bg-primary/40 rounded-t-sm group-hover:bg-primary/60 transition-colors"
                  />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-primary">
                    {h}%
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-white font-bold text-sm">Daily Total</p>
              <p className="text-white font-black text-lg">14.2 kWh</p>
            </div>
          </motion.div>
        </div>

        {/* Security Sidebar */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <motion.div 
            variants={itemVariants}
            className="glass-dark rounded-2xl p-6 h-full flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Video className="text-rose-500" size={20} fill="currentColor" />
                <h3 className="text-lg font-bold text-white">Security</h3>
              </div>
              <motion.span 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20"
              >
                LIVE
              </motion.span>
            </div>
            
            <div className="flex flex-col gap-4">
              {[
                { name: 'Front Door', time: '2m ago', seed: 'door' },
                { name: 'Backyard', time: 'System Secure', seed: 'yard' }
              ].map((cam, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video rounded-xl overflow-hidden group bg-slate-800 cursor-pointer"
                >
                  <img 
                    alt={cam.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" 
                    src={`https://picsum.photos/seed/${cam.seed}/400/225`} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex flex-col">
                    <span className="text-white text-xs font-bold">{cam.name}</span>
                    <span className="text-slate-400 text-[10px]">{cam.time}</span>
                  </div>
                  <div className="absolute top-3 right-3 p-1.5 rounded-lg glass-dark text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800 space-y-3">
              {[
                { label: 'Main Entrance', icon: LockOpen, action: 'Unlock' },
                { label: 'Garage Door', icon: Warehouse, action: 'Closed' }
              ].map((item, i) => (
                <motion.button 
                  key={i}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="text-primary" size={18} />
                    <span className="text-sm font-bold text-white">{item.label}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 group-hover:text-primary uppercase">{item.action}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Controls */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-6">Quick Controls</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { label: 'All Lights', icon: Lightbulb },
            { label: 'Climate', icon: Snowflake },
            { label: 'Armed', icon: ShieldCheck },
            { label: 'Network', icon: Router },
            { label: 'Garden', icon: Flower2 },
            { label: 'Audio', icon: Music },
          ].map((item, i) => (
            <motion.button 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, backgroundColor: 'rgba(43, 108, 238, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-dark p-4 rounded-xl flex flex-col items-center gap-3 border border-slate-800 hover:border-primary/50 transition-all group"
            >
              <item.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
