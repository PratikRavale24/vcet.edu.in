import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';

interface MMSStudentsLifeSectionPlaceholderProps {
  title: string;
}

export default function MMSStudentsLifeSectionPlaceholder({ title }: MMSStudentsLifeSectionPlaceholderProps) {
  return (
    <MMSLayout title={title}>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-2xl font-display font-bold text-brand-navy">{title}</h3>
      </section>
    </MMSLayout>
  );
}
