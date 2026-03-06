import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './views/DashboardView';
import { LivingRoomView } from './views/LivingRoomView';
import { KitchenView } from './views/KitchenView';
import { BedroomView } from './views/BedroomView';
import { SettingsView } from './views/SettingsView';
import { ViewType } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'living-room':
        return <LivingRoomView />;
      case 'kitchen':
        return <KitchenView />;
      case 'bedroom':
        return <BedroomView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background-dark overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 overflow-y-auto p-8 lg:p-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
