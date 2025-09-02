import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building, Tag, Clock } from 'lucide-react';
import { Lead } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface LeadCardProps {
  lead: Lead;
  index: number;
}

export function LeadCard({ lead, index }: LeadCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-500 bg-emerald-500/10';
    if (score >= 60) return 'text-yellow-500 bg-yellow-500/10';
    return 'text-red-500 bg-red-500/10';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      hot: 'bg-red-500/10 text-red-600 border-red-500/20',
      qualified: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      nurturing: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      new: 'bg-green-500/10 text-green-600 border-green-500/20',
      cold: 'bg-slate-500/10 text-slate-600 border-slate-500/20'
    };
    return colors[status as keyof typeof colors] || colors.new;
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
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{lead.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center mt-1">
            <Building className="w-4 h-4 mr-1" />
            {lead.company}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
          {lead.status.toUpperCase()}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Mail className="w-4 h-4 mr-2" />
          {lead.email}
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Phone className="w-4 h-4 mr-2" />
          {lead.phone}
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <Clock className="w-4 h-4 mr-2" />
          Last contact: {formatDistanceToNow(lead.lastContact, { addSuffix: true })}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Lead Score:</span>
          <span className={`px-2 py-1 rounded-lg text-sm font-bold ${getScoreColor(lead.score)}`}>
            {lead.score}
          </span>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Source: {lead.source}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {lead.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="flex items-center bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-lg text-xs font-medium"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200"
        >
          Contact
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}