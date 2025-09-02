import { Lead, Deal, Campaign, Task, KPI } from '../types';

export const mockKPIs: KPI[] = [
  {
    label: 'Total Revenue',
    value: '$2.4M',
    change: 12.5,
    trend: 'up',
    color: 'text-emerald-500'
  },
  {
    label: 'Active Leads',
    value: '1,247',
    change: 8.2,
    trend: 'up',
    color: 'text-blue-500'
  },
  {
    label: 'Conversion Rate',
    value: '24.8%',
    change: -2.1,
    trend: 'down',
    color: 'text-orange-500'
  },
  {
    label: 'Pipeline Value',
    value: '$5.8M',
    change: 15.3,
    trend: 'up',
    color: 'text-purple-500'
  }
];

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Industries',
    score: 85,
    status: 'hot',
    source: 'website',
    assignedTo: 'John Smith',
    lastContact: new Date('2024-01-15'),
    notes: 'Interested in enterprise package. Schedule demo next week.',
    tags: ['enterprise', 'high-value', 'decision-maker']
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@startupco.io',
    phone: '+1 (555) 987-6543',
    company: 'StartupCo',
    score: 72,
    status: 'qualified',
    source: 'referral',
    assignedTo: 'Emily Davis',
    lastContact: new Date('2024-01-12'),
    notes: 'Referred by existing client. Looking for small business solution.',
    tags: ['referral', 'small-business']
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    email: 'lisa@globalinc.com',
    phone: '+1 (555) 456-7890',
    company: 'Global Inc.',
    score: 91,
    status: 'hot',
    source: 'event',
    assignedTo: 'John Smith',
    lastContact: new Date('2024-01-14'),
    notes: 'Met at trade show. Very interested in our AI features.',
    tags: ['enterprise', 'ai-interested', 'urgent']
  }
];

export const mockDeals: Deal[] = [
  {
    id: '1',
    title: 'TechCorp Enterprise License',
    value: 125000,
    probability: 85,
    stage: 'negotiation',
    leadId: '1',
    expectedCloseDate: new Date('2024-02-15'),
    lastActivity: new Date('2024-01-15'),
    notes: 'Final contract review in progress'
  },
  {
    id: '2',
    title: 'StartupCo Basic Package',
    value: 15000,
    probability: 60,
    stage: 'proposal',
    leadId: '2',
    expectedCloseDate: new Date('2024-01-30'),
    lastActivity: new Date('2024-01-12'),
    notes: 'Waiting for budget approval'
  },
  {
    id: '3',
    title: 'Global Inc. AI Solutions',
    value: 250000,
    probability: 75,
    stage: 'qualification',
    leadId: '3',
    expectedCloseDate: new Date('2024-03-01'),
    lastActivity: new Date('2024-01-14'),
    notes: 'Technical demo scheduled'
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Q1 Enterprise Outreach',
    type: 'email',
    status: 'active',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-03-31'),
    budget: 50000,
    spent: 32500,
    impressions: 125000,
    clicks: 8500,
    conversions: 245,
    roi: 3.2
  },
  {
    id: '2',
    name: 'AI Feature Launch',
    type: 'social',
    status: 'active',
    startDate: new Date('2024-01-10'),
    endDate: new Date('2024-02-10'),
    budget: 25000,
    spent: 18750,
    impressions: 450000,
    clicks: 12300,
    conversions: 156,
    roi: 2.8
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Follow up with Sarah Johnson',
    description: 'Schedule enterprise demo and send pricing proposal',
    priority: 'high',
    status: 'todo',
    assignedTo: 'John Smith',
    dueDate: new Date('2024-01-16'),
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Prepare Q1 sales report',
    description: 'Compile performance metrics and forecasts',
    priority: 'medium',
    status: 'in-progress',
    assignedTo: 'Emily Davis',
    dueDate: new Date('2024-01-20'),
    createdAt: new Date('2024-01-10')
  }
];