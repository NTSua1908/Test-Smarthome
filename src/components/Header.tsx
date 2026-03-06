import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
  statusDot?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, statusDot = true }) => {
  return (
    <header className="flex justify-between items-end mb-10">
      <div>
        <h2 className="text-4xl font-black tracking-tight text-white">{title}</h2>
        <p className="text-slate-400 mt-2 font-medium flex items-center gap-2">
          {statusDot && <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>}
          {subtitle}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden border-2 border-primary/50">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yetUl8BqAg6y7yts-t4k3pc_7evoaFthLq212KLl3qilQ-x0t6b0DnytEW1wd7mNlO26LX0zAlQ-j4RJWHASbi6csy2srZfRbTjWsDbkDORN1PmtvQZ6WeW-4AS6PgKMWSe4ajLcbXvzjbfn8u0J7oCOo1-6af9dCFQmTi0B_nL2tVdCSNYshSpJBta2ZT1CDqSKeK3iCLQJ8bb33cTQKVOS3n8ZXR2SHKC1CsjNulVMYPusGEbVr0RnPkpirSwGdj48Z-lsWhPw" 
            alt="User"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
