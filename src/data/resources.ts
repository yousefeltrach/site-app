import {
    ChartPieIcon,
    PencilSquareIcon,
    ArrowPathIcon,
  } from '@heroicons/react/24/outline';
  import { Solution } from './types';
import { HeartPulseIcon } from 'lucide-react';
  
  export const resources: Solution[] = [
    {
      name: 'Case studies',
      description: 'Learn how others achieved success using xBundle.',
      href: '/case-studies',
      icon: ChartPieIcon,
    },
    {
      name: 'Blog',
      description: 'Explore tips, insights, and updates from our experts.',
      href: '/blog',
      icon: PencilSquareIcon,
    },
    {
      name: 'Changelog',
      description: 'Stay updated with the latest features and improvements.',
      href: '/changelog',
      icon: ArrowPathIcon,
    },
    {
      name: 'Status',
      description: 'Check real-time availability of our services.',
      href: '/status',
      icon: HeartPulseIcon,
    },
  ];
  