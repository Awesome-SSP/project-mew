import React from 'react';
import { motion } from 'framer-motion';
import { Download, Filter, RefreshCw } from 'lucide-react';
import { ChartCard } from './ChartCard';

export function Analytics() {
  const conversionFunnelData = {
    labels: ['Visitors', 'Leads', 'Qualified', 'Proposals', 'Closed'],
    datasets: [
      {
        label: 'Conversion Funnel',
        data: [10000, 1500, 450, 180, 85],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)'
        ],
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  };

  const revenueByChannelData = {
    labels: ['Direct Sales', 'Email Marketing', 'Social Media', 'Referrals', 'Events'],
    datasets: [
      {
        data: [450000, 320000, 180000, 250000, 190000],
        backgroundColor: [
          '#3b82f6',
          '#8b5cf6',
          '#f59e0b',
          '#ef4444',
          '#10b981'
        ],
        borderWidth: 0
      }
    ]
  };

  const monthlyPerformanceData = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Revenue',
        data: [180000, 220000, 190000, 270000, 240000, 320000],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Leads',
        data: [145, 189, 156, 234, 198, 267],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const monthlyOptions = {
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics & Reports</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Comprehensive insights and data visualization
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-medium shadow-lg flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Conversion Funnel"
          type="bar"
          data={conversionFunnelData}
        />
        <ChartCard
          title="Revenue by Channel"
          type="doughnut"
          data={revenueByChannelData}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ChartCard
          title="Monthly Performance Trends"
          type="line"
          data={monthlyPerformanceData}
          options={monthlyOptions}
        />
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Best Performing Channel</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Direct sales generating 35% of total revenue with highest conversion rate at 8.5%
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Growth Opportunity</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Social media campaigns show 45% increase in engagement - consider budget reallocation
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Optimization Alert</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Email open rates peak at 10 AM on Tuesdays - schedule campaigns accordingly
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}