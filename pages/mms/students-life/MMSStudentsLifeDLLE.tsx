import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLifeDLLE() {
  return (
    <MMSLayout title="Department of Lifelong Learning Extension (DLLE)">
      <StudentsLifeSectionCard
        title="Department of Lifelong Learning Extension (DLLE)"
        subtitle="University-linked extension initiatives for social responsibility and practical learning"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          Extension activities conducted in association with the University of Mumbai under the Department of Lifelong
          Learning and Extension (DLLE) are crucial for holistic student development. These activities bridge academic
          learning with community engagement, fostering social responsibility and practical skills. Students gain
          real-world experience, enhance their problem-solving abilities, and contribute positively to society. Students
          opted for the three projects in a group, namely Environment Education Program, Career Program and Skill
          Development Program.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <StudentsLifeImageHolder key={index} label={`DLLE Activity ${index.toString().padStart(2, '0')}`} size="large" />
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
