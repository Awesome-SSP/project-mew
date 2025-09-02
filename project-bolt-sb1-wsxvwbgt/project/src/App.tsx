import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LeadsManagement } from './components/LeadsManagement';
import { SalesPipeline } from './components/SalesPipeline';
import { CampaignManagement } from './components/CampaignManagement';
import { MarketingAutomation } from './components/MarketingAutomation';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'leads':
        return <LeadsManagement />;
      case 'pipeline':
        return <SalesPipeline />;
      case 'campaigns':
        return <CampaignManagement />;
      case 'automation':
        return <MarketingAutomation />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      case 'interactions':
        return (
          <div className="p-6 flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Customer Interactions</h2>
              <p className="text-slate-600 dark:text-slate-400">Omni-channel communication center coming soon...</p>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="p-6 flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Calendar & Scheduling</h2>
              <p className="text-slate-600 dark:text-slate-400">Advanced scheduling features coming soon...</p>
            </div>
          </div>
        );
      case 'documents':
        return (
          <div className="p-6 flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Document Management</h2>
              <p className="text-slate-600 dark:text-slate-400">Collaborative document workspace coming soon...</p>
            </div>
          </div>
        );
      case 'ai-assistant':
        return (
          <div className="p-6 flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AI Assistant</h2>
              <p className="text-slate-600 dark:text-slate-400">Intelligent sales and marketing assistant coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;