import React from 'react';
import { motion } from 'framer-motion';
import { KPICard } from './KPICard';
import { ChartCard } from './ChartCard';
import { mockKPIs } from '../data/mockData';

export function Dashboard() {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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
        label: 'Target',
        data: [200000, 200000, 200000, 200000, 200000, 200000],
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false
      }
    ]
  };

  const pipelineData = {
    labels: ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won'],
    datasets: [
      {
        data: [450000, 320000, 180000, 120000, 850000],
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

  const leadsData = {
    labels: ['Website', 'Email', 'Social', 'Referral', 'Events', 'Cold Outreach'],
    datasets: [
      {
        label: 'Leads Generated',
        data: [120, 89, 156, 78, 92, 145],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(99, 102, 241, 0.8)'
        ],
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Command Center</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Real-time insights and performance metrics
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
        >
          AI Forecast: +18% Growth
        </motion.div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockKPIs.map((kpi, index) => (
          <KPICard key={index} kpi={kpi} index={index} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue vs Target"
          type="line"
          data={salesData}
          className="lg:col-span-1"
        />
        <ChartCard
          title="Pipeline Distribution"
          type="doughnut"
          data={pipelineData}
          className="lg:col-span-1"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ChartCard
          title="Lead Sources Performance"
          type="bar"
          data={leadsData}
        />
      </div>

      {/* AI Insights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
          AI Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">High-Priority Action</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Follow up with 12 hot leads within 24 hours to maintain momentum
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Opportunity Alert</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              TechCorp deal has 95% close probability - prioritize this week
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Campaign Optimization</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Email campaigns perform 23% better on Tuesdays - schedule accordingly
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}