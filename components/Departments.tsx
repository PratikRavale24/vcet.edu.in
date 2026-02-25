import React from 'react';
import SectionHeader from './SectionHeader';
import { FocusCards } from '../ui/focus-cards';
import type { Card } from '../ui/focus-cards';

const departments: Card[] = [
  {
    title: 'Computer Science',
    description: 'AI, ML & Data Science',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
    href: '/computer-engineering',
  },
  {
    title: 'Mechanical Eng.',
    description: 'Robotics & Automation',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
    href: '/mechanical-engineering',
  },
  {
    title: 'Electronics & Comm.',
    description: 'IoT & Embedded Systems',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    href: '/electronics-telecomm',
  },
  {
    title: 'Civil Engineering',
    description: 'Sustainable Infrastructure',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    href: '/civil-engineering',
  },
  {
    title: 'Information Tech',
    description: 'Cloud & Cyber Security',
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    href: '/information-technology',
  },
  {
    title: 'AI & Data Science',
    description: 'Machine Learning & AI',
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop',
    href: '/ai-data-science',
  },
];

const Departments: React.FC = () => {
  return (
    <section id="departments" className="py-20 md:py-28 bg-brand-light text-brand-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/8 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          title="Academic Departments"
          theme="light"
          subtitle="World-class programs designed for the industry leaders of tomorrow. Hover to explore."
        />

        <FocusCards cards={departments} />
      </div>
    </section>
  );
};

export default Departments;
