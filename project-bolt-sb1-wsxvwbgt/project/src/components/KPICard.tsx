import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPI } from '../types';

interface KPICardProps {
  kpi: KPI;
  index: number;
}

export function KPICard({ kpi, index }: KPICardProps) {
  const TrendIcon = kpi.trend === 'up' ? TrendingUp : kpi.trend === 'down' ? TrendingDown : Minus;
  const trendColor = kpi.trend === 'up' ? 'text-emerald-500' : kpi.trend === 'down' ? 'text-red-500' : 'text-slate-500';

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
          {kpi.label}
        </h3>
        <TrendIcon className={`w-4 h-4 ${trendColor}`} />
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className={`text-3xl font-bold ${kpi.color} mb-1`}>{kpi.value}</p>
          <div className="flex items-center space-x-1">
            <span className={`text-sm font-medium ${trendColor}`}>
              {kpi.change > 0 ? '+' : ''}{kpi.change}%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">vs last month</span>
          </div>
        </div>
        
        <div className="w-16 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{ width: `${Math.abs(kpi.change) * 2}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}