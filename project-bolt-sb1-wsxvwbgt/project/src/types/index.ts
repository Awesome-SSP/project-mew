export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  score: number;
  status: 'new' | 'qualified' | 'nurturing' | 'hot' | 'cold';
  source: 'website' | 'email' | 'social' | 'referral' | 'event';
  assignedTo: string;
  lastContact: Date;
  notes: string;
  tags: string[];
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  probability: number;
  stage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  leadId: string;
  expectedCloseDate: Date;
  lastActivity: Date;
  notes: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'social' | 'whatsapp';
  status: 'draft' | 'active' | 'paused' | 'completed';
  startDate: Date;
  endDate: Date;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roi: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'todo' | 'in-progress' | 'completed';
  assignedTo: string;
  dueDate: Date;
  createdAt: Date;
}

export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
}