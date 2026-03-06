import React from 'react';
import { Header } from '../components/Header';
import { 
  User, 
  Edit2, 
  Plus, 
  Trash2, 
  UserPlus, 
  Armchair, 
  UtensilsCrossed, 
  Bed,
  ShieldCheck,
  Bell,
  Smartphone,
  Mail,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto w-full">
      <Header title="Settings" subtitle="Manage your profile, devices, and preferences" statusDot={false} />

      <div className="space-y-10 pb-20">
        {/* Profile */}
        <section>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <User className="text-primary" size={20} />
            Profile Settings
          </h3>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-slate-700 overflow-hidden border-4 border-primary/20">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yetUl8BqAg6y7yts-t4k3pc_7evoaFthLq212KLl3qilQ-x0t6b0DnytEW1wd7mNlO26LX0zAlQ-j4RJWHASbi6csy2srZfRbTjWsDbkDORN1PmtvQZ6WeW-4AS6PgKMWSe4ajLcbXvzjbfn8u0J7oCOo1-6af9dCFQmTi0B_nL2tVdCSNYshSpJBta2ZT1CDqSKeK3iCLQJ8bb33cTQKVOS3n8ZXR2SHKC1CsjNulVMYPusGEbVr0RnPkpirSwGdj48Z-lsWhPw" 
                    alt="Profile"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full shadow-lg">
                  <Edit2 size={14} />
                </button>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
                    <input 
                      className="w-full bg-slate-800 border-none rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary outline-none" 
                      type="text" 
                      defaultValue="Alex Thompson" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email Address</label>
                    <input 
                      className="w-full bg-slate-800 border-none rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary outline-none" 
                      type="email" 
                      defaultValue="alex.t@smartlife.io" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Management */}
        <section>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="text-primary" size={20} />
            Home Management
          </h3>
          <div className="space-y-4">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 bg-slate-800/50 border-b border-slate-800 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Rooms & Zones</span>
                <button className="text-primary text-xs font-bold hover:underline flex items-center gap-1">
                  <Plus size={16} /> Add Room
                </button>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { name: 'Living Room', icon: Armchair, devices: 8 },
                  { name: 'Kitchen', icon: UtensilsCrossed, devices: 5 },
                  { name: 'Master Bedroom', icon: Bed, devices: 4 },
                ].map((room, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <room.icon className="text-slate-400" size={20} />
                      <span className="font-medium">{room.name}</span>
                    </div>
                    <span className="text-xs text-slate-400">{room.devices} Devices</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 bg-slate-800/50 border-b border-slate-800 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Family Members</span>
                <button className="text-primary text-xs font-bold hover:underline flex items-center gap-1">
                  <UserPlus size={16} /> Invite
                </button>
              </div>
              <div className="p-4 space-y-4">
                {[
                  { name: 'Sarah Thompson', role: 'Admin', initial: 'ST' },
                  { name: 'Jamie Thompson', role: 'Guest', initial: 'JT' },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">{member.initial}</div>
                      <div>
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">{member.role}</p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Bell className="text-primary" size={20} />
            Notifications
          </h3>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl divide-y divide-slate-800">
            {[
              { title: 'Push Notifications', desc: 'Receive real-time alerts on your mobile device', icon: Smartphone, active: true },
              { title: 'Email Alerts', desc: 'Security and system status reports via email', icon: Mail, active: false },
              { title: 'Device Activity', desc: 'Notify when major appliances are toggled', icon: Zap, active: true },
            ].map((item, i) => (
              <div key={i} className="p-6 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full relative flex items-center px-1 cursor-pointer transition-colors ${
                  item.active ? 'bg-primary justify-end' : 'bg-slate-700 justify-start'
                }`}>
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Update */}
        <section>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="text-primary" size={20} />
            System Updates
          </h3>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg text-primary">
                <CheckCircle2 size={24} fill="currentColor" fillOpacity={0.2} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white">SmartOS 2.4.1 Available</h4>
                    <p className="text-sm text-slate-500 mt-1">Version 2.4.1 includes security patches and improved connectivity for mesh networks.</p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Update Now
                  </button>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span>Size: 124 MB</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span>Released: Oct 12, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
