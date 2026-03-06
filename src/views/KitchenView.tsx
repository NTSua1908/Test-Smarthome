import React from 'react';
import { Header } from '../components/Header';
import { DeviceCard } from '../components/DeviceCard';
import { StatCard } from '../components/StatCard';
import { 
  Refrigerator, 
  Microwave, 
  Coffee, 
  Lightbulb,
  Zap,
  MoreHorizontal
} from 'lucide-react';

export const KitchenView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Header title="Kitchen" subtitle="4 Devices Active • 19°C Fridge Temp" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between min-h-[350px]">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-1">
                <Refrigerator size={18} />
                Smart Refrigerator
              </div>
              <p className="text-slate-400">Optimal cooling performance</p>
            </div>
            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase rounded-full border border-green-500/20">Active</span>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="flex items-baseline gap-4">
              <span className="text-8xl font-black text-white drop-shadow-2xl">4°C</span>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Main Unit</span>
                <span className="text-primary text-xs font-bold">-18°C Freezer</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Contents Overview</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Fresh Produce</span>
                  <span className="font-bold">65%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[65%]"></div>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-slate-300">Beverages</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[20%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex gap-4">
            <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all">Quick Chill</button>
            <button className="px-6 py-2 bg-slate-800 text-slate-300 text-xs font-bold rounded-lg border border-slate-700 hover:border-primary/50 transition-all">Shopping List</button>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-lg bg-orange-500/20 text-orange-500">
                <Microwave size={28} />
              </div>
              <div className="text-right">
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Preheating</p>
                <p className="text-white text-xl font-black">180°C</p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Smart Oven</h3>
            <p className="text-slate-400 text-sm mb-6">Roasting Chicken Mode</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase mb-2">
                  <span>Timer</span>
                  <span className="text-primary font-black">24:15 left</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-2/3 shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            <button className="flex-1 py-3 rounded-lg bg-orange-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all">Stop</button>
            <button className="p-3 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-[22px] font-bold text-white mb-6">Kitchen Appliances & Lighting</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DeviceCard name="Pendant Lights" category="Lighting" status="on" value="ON • 100% Warm" icon={Lightbulb} />
          <DeviceCard name="Under Cabinet" category="Lighting" status="on" value="ON • 40% Cool" icon={Lightbulb} />
          <DeviceCard name="Dishwasher" category="Appliance" status="standby" icon={Zap} />
          <DeviceCard name="Smart Kettle" category="Small Appliance" status="standby" icon={Coffee} />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Kitchen Humidity" value="54%" />
        <StatCard label="Gas Detection" value="Safe" status="good" />
        <StatCard label="Water Usage" value="12" unit="L" />
        <StatCard label="Exhaust Fan" value="Auto" status="normal" />
      </div>
    </div>
  );
};
