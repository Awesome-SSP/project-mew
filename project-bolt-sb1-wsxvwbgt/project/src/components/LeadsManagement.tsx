import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Download, Upload, Search } from 'lucide-react';
import { LeadCard } from './LeadCard';
import { mockLeads } from '../data/mockData';

export function LeadsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || lead.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Lead Management</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manage and nurture your sales prospects
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Lead</span>
        </motion.button>
      </motion.div>

      {/* Filters and Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-slate-100/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-100/50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="qualified">Qualified</option>
              <option value="nurturing">Nurturing</option>
              <option value="hot">Hot</option>
              <option value="cold">Cold</option>
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
            >
              <Upload className="w-4 h-4" />
              <span>Import</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
            >
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Lead Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLeads.map((lead, index) => (
          <LeadCard key={lead.id} lead={lead} index={index} />
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-500">{mockLeads.filter(l => l.status === 'hot').length}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Hot Leads</p>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-500">{mockLeads.filter(l => l.status === 'qualified').length}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Qualified</p>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-500">{mockLeads.filter(l => l.status === 'nurturing').length}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Nurturing</p>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-slate-500">{mockLeads.filter(l => l.status === 'new').length}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">New Leads</p>
        </div>
      </motion.div>
    </div>
  );
}