import React, { useState } from 'react';
import { Header } from '../components/Header';
import { DeviceCard } from '../components/DeviceCard';
import { StatCard } from '../components/StatCard';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  Minus, 
  Plus, 
  Moon, 
  BookOpen, 
  Sun, 
  CheckCircle2,
  LayoutPanelLeft,
  Lightbulb
} from 'lucide-react';

export const BedroomView: React.FC = () => {
  const [targetTemp, setTargetTemp] = useState(22);
  const [activeScene, setActiveScene] = useState('reading');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <Header title="Bedroom" subtitle="2 Devices Active • 22°C Target Temp" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AC Control */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="lg:col-span-2 relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 p-8 flex flex-col items-center justify-center min-h-[400px]"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          
          <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-1">
                <Wind size={18} />
                Air Conditioning
              </div>
              <p className="text-slate-400">Cooling Mode Active</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fan Speed</span>
              <div className="flex gap-1 mt-1">
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="w-4 h-1 bg-primary rounded-full" />
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-4 h-1 bg-primary rounded-full" />
                <div className="w-4 h-1 bg-slate-700 rounded-full" />
              </div>
            </div>
          </div>

          <div className="relative mt-8 group">
            <motion.div 
              animate={{ rotate: (targetTemp - 16) * 15 }}
              className="w-64 h-64 rounded-full border-[12px] border-slate-800 flex items-center justify-center relative transition-all duration-500"
            >
              <div className="absolute inset-[-12px] rounded-full dial-gradient opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="text-center -rotate-0">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={targetTemp}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="text-7xl font-black text-white block"
                  >
                    {targetTemp}°
                  </motion.span>
                </AnimatePresence>
                <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em] mt-2">Target</p>
              </div>
              <div 
                className="absolute w-6 h-6 bg-primary rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(43,108,238,0.8)]" 
                style={{ transform: 'translate(120px)' }}
              ></div>
            </motion.div>
          </div>

          <div className="flex gap-6 mt-10">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setTargetTemp(prev => Math.max(16, prev - 1))}
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Minus size={24} />
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setTargetTemp(prev => Math.min(30, prev + 1))}
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Plus size={24} />
            </motion.button>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Night Mode Card */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 p-6 flex flex-col justify-between h-48 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Moon size={96} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">Night Mode</h3>
              <p className="text-indigo-200/60 text-sm">Optimizes lights and temp for sleep</p>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-indigo-400 font-bold text-sm">NOT ACTIVE</span>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-900/40"
              >
                Activate
              </motion.button>
            </div>
          </motion.div>

          {/* Scenes */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col gap-4 flex-grow"
          >
            <h3 className="text-lg font-bold text-white mb-2">Room Scenes</h3>
            <div className="flex flex-col gap-3">
              {[
                { id: 'reading', label: 'Reading', icon: BookOpen },
                { id: 'evening', label: 'Evening', icon: Sun }
              ].map((scene) => (
                <motion.button 
                  key={scene.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveScene(scene.id)}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                    activeScene === scene.id 
                      ? 'bg-primary/10 border border-primary/30 text-primary' 
                      : 'bg-slate-800/50 border border-transparent text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <scene.icon size={18} />
                    <span className="font-bold uppercase text-xs tracking-widest">{scene.label}</span>
                  </div>
                  {activeScene === scene.id && <CheckCircle2 size={18} />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-[22px] font-bold text-white mb-6">Device Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-orange-500/20 text-orange-500">
                  <LayoutPanelLeft size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Smart Blinds</h4>
                  <p className="text-slate-400 text-sm font-medium">South Facing Window</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-white">65%</span>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Open</p>
              </div>
            </div>
            <div className="relative w-full h-8 bg-slate-800 rounded-lg overflow-hidden flex items-center px-2 cursor-pointer group">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                className="absolute left-0 top-0 h-full bg-orange-500/40 rounded-r-lg"
              />
              <motion.div 
                initial={{ left: 0 }}
                animate={{ left: '65%' }}
                className="absolute -translate-x-1/2 w-4 h-10 bg-white shadow-xl rounded-md z-10 border border-slate-600"
              />
            </div>
          </motion.div>
          
          <DeviceCard 
            name="Night Lamp" 
            category="Lighting" 
            status="on" 
            value="ON • Warm Glow" 
            icon={Lightbulb} 
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Humidity" value="38%" />
        <StatCard label="Sleep Score" value="88" unit="/ 100" />
        <StatCard label="Air Quality" value="Excellent" status="good" />
        <StatCard label="Silence Level" value="32" unit="dB" />
      </div>
    </motion.div>
  );
};
