import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, Database, Zap, Key } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Settings() {
  const { theme, toggleTheme } = useTheme();

  const settingsSections = [
    {
      icon: User,
      title: 'Profile Settings',
      description: 'Manage your personal information and preferences',
      items: ['Personal Information', 'Profile Picture', 'Contact Details', 'Time Zone']
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure alerts and notification preferences',
      items: ['Email Notifications', 'Push Notifications', 'SMS Alerts', 'Slack Integration']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Manage your account security and privacy settings',
      items: ['Two-Factor Authentication', 'Password Settings', 'Login History', 'Data Privacy']
    },
    {
      icon: Database,
      title: 'Integrations',
      description: 'Connect with external tools and services',
      items: ['CRM Integration', 'Email Platforms', 'Social Media', 'Payment Gateways']
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Configure your account and system preferences
          </p>
        </div>
      </motion.div>

      {/* Theme Toggle Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Palette className="w-6 h-6 text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Appearance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Choose your preferred theme</p>
            </div>
          </div>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <motion.span
              animate={{ x: theme === 'dark' ? 32 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform"
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{section.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 bg-slate-100/50 dark:bg-slate-700/50 rounded-xl cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-600/50 transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                    <span className="text-blue-500 text-sm">→</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* API Keys & Integrations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Key className="w-6 h-6 text-yellow-500" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">API Configuration</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Connected Integrations</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Gmail API</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-600 px-2 py-1 rounded">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Slack Webhook</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-600 px-2 py-1 rounded">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Stripe API</span>
                <span className="text-xs bg-yellow-500/20 text-yellow-600 px-2 py-1 rounded">Pending</span>
              </div>
            </div>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">System Health</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Database</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-600 px-2 py-1 rounded">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Email Service</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-600 px-2 py-1 rounded">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">API Response</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-600 px-2 py-1 rounded">145ms</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}