import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  unit?: string;
  status?: 'good' | 'warning' | 'error' | 'normal';
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, unit, status = 'normal' }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'warning': return 'text-amber-500';
      case 'error': return 'text-red-500';
      default: return 'text-white';
    }
  };

  return (
    <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-2xl font-black ${getStatusColor()}`}>
        {value}
        {unit && <span className="text-sm font-normal text-slate-500 ml-1">{unit}</span>}
      </p>
    </div>
  );
};
