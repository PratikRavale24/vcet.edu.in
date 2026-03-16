import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialLearning() {
  return (
    <MMSLayout title="Experiential Learning">
      <div className="space-y-6">
        <ExperientialSectionCard title="Information">
          <p className="text-[17px] leading-8 text-slate-700">
            Our MBA program is not just about theories; it is about transforming them into real-world impact. Through experiential learning, you will dive into the heart of business. Case studies, internships, simulations, and live projects will equip you with the skills to analyze, strategize, and lead. Gain hands-on experience, collaborate with industry experts, and develop a problem-solving mindset. Be ready to shape the future of business.
          </p>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
