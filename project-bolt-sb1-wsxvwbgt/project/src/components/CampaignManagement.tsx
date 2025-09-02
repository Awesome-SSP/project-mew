import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Play, Pause } from 'lucide-react';
import { CampaignCard } from './CampaignCard';
import { mockCampaigns } from '../data/mockData';

export function CampaignManagement() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Campaign Management</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Multi-channel marketing campaigns and performance tracking
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>New Campaign</span>
        </motion.button>
      </motion.div>

      {/* Campaign Performance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4">
          <h3 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Active Campaigns</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {mockCampaigns.filter(c => c.status === 'active').length}
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-xl p-4">
          <h3 className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">Total Impressions</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {mockCampaigns.reduce((sum, c) => sum + c.impressions, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-4">
          <h3 className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">Avg. ROI</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {(mockCampaigns.reduce((sum, c) => sum + c.roi, 0) / mockCampaigns.length).toFixed(1)}x
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-4">
          <h3 className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">Total Budget</h3>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            ${mockCampaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
          </p>
        </div>
      </motion.div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockCampaigns.map((campaign, index) => (
          <CampaignCard key={campaign.id} campaign={campaign} index={index} />
        ))}
      </div>

      {/* A/B Testing Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">A/B Testing Hub</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Email Subject Lines</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Variant A (Original)</span>
                <span className="font-medium text-emerald-600">24.5% CTR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Variant B (Personalized)</span>
                <span className="font-medium text-blue-600">31.2% CTR</span>
              </div>
            </div>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Landing Page CTA</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">"Learn More"</span>
                <span className="font-medium text-orange-600">12.3% CVR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">"Get Started Free"</span>
                <span className="font-medium text-emerald-600">18.7% CVR</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}