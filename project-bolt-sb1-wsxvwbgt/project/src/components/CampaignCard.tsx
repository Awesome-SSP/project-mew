import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, BarChart3, Target, DollarSign, Eye } from 'lucide-react';
import { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
  index: number;
}

export function CampaignCard({ campaign, index }: CampaignCardProps) {
  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      paused: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      completed: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      draft: 'bg-slate-500/10 text-slate-600 border-slate-500/20'
    };
    return colors[status as keyof typeof colors] || colors.draft;
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      email: '✉️',
      sms: '📱',
      social: '📱',
      whatsapp: '💬'
    };
    return icons[type as keyof typeof icons] || '📧';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getTypeIcon(campaign.type)}</span>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{campaign.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 capitalize">{campaign.type} Campaign</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(campaign.status)}`}>
          {campaign.status.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-100/50 dark:bg-slate-700/50 rounded-xl p-3">
          <div className="flex items-center space-x-2 mb-1">
            <DollarSign className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Budget</span>
          </div>
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            ${campaign.budget.toLocaleString()}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Spent: ${campaign.spent.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-100/50 dark:bg-slate-700/50 rounded-xl p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">ROI</span>
          </div>
          <p className="text-lg font-bold text-slate-900 dark:text-white">{campaign.roi}x</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {campaign.conversions} conversions
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">Impressions</span>
          <span className="font-medium text-slate-900 dark:text-white">
            {campaign.impressions.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">Clicks</span>
          <span className="font-medium text-slate-900 dark:text-white">
            {campaign.clicks.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(campaign.clicks / campaign.impressions) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {campaign.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{campaign.status === 'active' ? 'Pause' : 'Resume'}</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
        >
          <BarChart3 className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}