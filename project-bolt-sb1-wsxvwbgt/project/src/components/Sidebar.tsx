import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Users,
  Target,
  Megaphone,
  MessageCircle,
  Zap,
  TrendingUp,
  Settings,
  Calendar,
  FileText,
  Brain
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'pipeline', label: 'Pipeline', icon: Target },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
  { id: 'interactions', label: 'Interactions', icon: MessageCircle },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'ai-assistant', label: 'AI Assistant', icon: Brain },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-r border-slate-700/50 backdrop-blur-xl"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">SalesFlow</h1>
            <p className="text-xs text-slate-400">Enterprise ERP</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}