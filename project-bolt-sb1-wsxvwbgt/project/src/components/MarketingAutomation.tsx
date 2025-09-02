import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Play, Pause, Settings, Zap, Clock, Users, Mail } from 'lucide-react';

export function MarketingAutomation() {
  const workflows = [
    {
      id: '1',
      name: 'Welcome Email Series',
      status: 'active',
      triggers: 'New lead signup',
      actions: 5,
      contacts: 1247,
      conversionRate: 23.5
    },
    {
      id: '2',
      name: 'Abandoned Cart Recovery',
      status: 'active',
      triggers: 'Cart abandonment',
      actions: 3,
      contacts: 89,
      conversionRate: 45.2
    },
    {
      id: '3',
      name: 'Lead Nurturing Sequence',
      status: 'paused',
      triggers: 'Lead score > 70',
      actions: 8,
      contacts: 345,
      conversionRate: 31.8
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
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Marketing Automation</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Automated workflows and intelligent campaign triggers
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create Workflow</span>
        </motion.button>
      </motion.div>

      {/* Workflow Builder Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Visual Workflow Builder
        </h3>
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-8 min-h-64 border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Drag & Drop Workflow Designer</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Create complex automation workflows with visual triggers and actions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium"
            >
              Open Builder
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Active Workflows */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Active Workflows</h3>
        {workflows.map((workflow, index) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${workflow.status === 'active' ? 'bg-emerald-500' : 'bg-yellow-500'} animate-pulse`}></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{workflow.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Trigger: {workflow.triggers}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Settings className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {workflow.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-slate-100/50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                <Clock className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                <p className="text-lg font-bold text-slate-900 dark:text-white">{workflow.actions}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Actions</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                <Users className="w-5 h-5 mx-auto mb-1 text-purple-500" />
                <p className="text-lg font-bold text-slate-900 dark:text-white">{workflow.contacts}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Contacts</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                <Mail className="w-5 h-5 mx-auto mb-1 text-emerald-500" />
                <p className="text-lg font-bold text-slate-900 dark:text-white">{workflow.conversionRate}%</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Conversion</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                <div className={`w-5 h-5 mx-auto mb-1 rounded-full ${workflow.status === 'active' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                <p className="text-lg font-bold text-slate-900 dark:text-white capitalize">{workflow.status}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Status</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Automation Templates */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Pre-built Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Lead Qualification Workflow',
            'Customer Onboarding Series',
            'Win-back Campaign',
            'Product Demo Follow-up',
            'Birthday & Anniversary',
            'Referral Program'
          ].map((template, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">{template}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                Ready-to-use automation template
              </p>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                Use Template →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}