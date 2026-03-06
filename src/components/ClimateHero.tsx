import React from 'react';
import { Thermometer, TrendingUp } from 'lucide-react';

interface ClimateHeroProps {
  temp: number;
  trend: number;
  label: string;
  description: string;
}

export const ClimateHero: React.FC<ClimateHeroProps> = ({ temp, trend, label, description }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between min-h-[300px]">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-1">
          <Thermometer size={18} />
          {label}
        </div>
        <p className="text-slate-400">{description}</p>
      </div>

      <div className="relative z-10 flex items-baseline gap-4 mt-8">
        <span className="text-8xl font-black text-white drop-shadow-2xl">{temp}°C</span>
        <div className="flex flex-col">
          <span className="text-green-500 font-bold flex items-center text-lg">
            <TrendingUp size={20} className="mr-1" /> {trend}%
          </span>
          <span className="text-slate-400 text-sm">vs last hour</span>
        </div>
      </div>

      <div className="relative z-10 mt-8 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div className="bg-primary h-full rounded-full w-3/4 shadow-[0_0_15px_rgba(43,108,238,0.5)]"></div>
      </div>
    </div>
  );
};
