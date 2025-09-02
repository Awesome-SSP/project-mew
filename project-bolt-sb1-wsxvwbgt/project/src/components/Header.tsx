import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, User, Moon, Sun, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between px-6"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search leads, deals, campaigns..."
            className="pl-10 pr-4 py-2 w-80 bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 relative"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
        >
          <Settings className="w-5 h-5" />
        </motion.button>

        <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-700">
          <div className="text-right">
            <p className="text-sm font-medium text-slate-900 dark:text-white">John Smith</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Sales Manager</p>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}