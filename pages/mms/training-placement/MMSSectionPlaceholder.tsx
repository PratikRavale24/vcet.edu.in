import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';

interface MMSSectionPlaceholderProps {
  title: string;
  description: string;
}

export default function MMSSectionPlaceholder({ title, description }: MMSSectionPlaceholderProps) {
  return (
    <MMSLayout title={title}>
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
        <p className="text-base font-semibold text-brand-navy">Subpage schema created.</p>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </MMSLayout>
  );
}
