import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ChartCardProps {
  title: string;
  type: 'line' | 'doughnut' | 'bar';
  data: any;
  options?: any;
  className?: string;
}

export function ChartCard({ title, type, data, options = {}, className = '' }: ChartCardProps) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    },
    scales: type !== 'doughnut' ? {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)'
        }
      }
    } : undefined
  };

  const chartOptions = { ...defaultOptions, ...options };

  const ChartComponent = type === 'line' ? Line : type === 'doughnut' ? Doughnut : Bar;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
      <div className="h-64">
        <ChartComponent data={data} options={chartOptions} />
      </div>
    </motion.div>
  );
}