import React from 'react';
import { Header } from '../components/Header';
import { ClimateHero } from '../components/ClimateHero';
import { DeviceCard } from '../components/DeviceCard';
import { StatCard } from '../components/StatCard';
import { 
  Tv, 
  Lightbulb, 
  Fan, 
  Film, 
  Moon, 
  Sun,
  CheckCircle2
} from 'lucide-react';

export const LivingRoomView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Header title="Living Room" subtitle="3 Devices Active • 25°C Room Temp" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ClimateHero 
            temp={25} 
            trend={2} 
            label="Climate Control" 
            description="Optimal environment maintained" 
          />
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-2">Active Scene</h3>
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary">
              <div className="flex items-center gap-3">
                <Film size={18} />
                <span className="font-bold uppercase text-xs tracking-widest">Cinema Mode</span>
              </div>
              <CheckCircle2 size={18} />
            </button>
            <button className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-transparent text-slate-400 hover:border-slate-600 transition-all">
              <div className="flex items-center gap-3">
                <Moon size={18} />
                <span className="font-bold uppercase text-xs tracking-widest">Sleepy Night</span>
              </div>
            </button>
            <button className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-transparent text-slate-400 hover:border-slate-600 transition-all">
              <div className="flex items-center gap-3">
                <Sun size={18} />
                <span className="font-bold uppercase text-xs tracking-widest">Morning Sun</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-[22px] font-bold text-white mb-6">Device Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DeviceCard 
            name="Ceiling Light" 
            category="Lighting" 
            status="on" 
            value="ON • 80% Brightness" 
            icon={Lightbulb} 
          />
          <DeviceCard 
            name="Ceiling Fan" 
            category="Cooling" 
            status="on" 
            value="ON • Speed 2" 
            icon={Fan} 
          />
          <DeviceCard 
            name="Smart TV" 
            category="Entertainment" 
            status="standby" 
            icon={Tv} 
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Humidity" value="42%" />
        <StatCard label="Energy Use" value="1.2" unit="kW" />
        <StatCard label="Air Quality" value="Good" status="good" />
        <StatCard label="Wi-Fi" value="94%" />
      </div>
    </div>
  );
};
