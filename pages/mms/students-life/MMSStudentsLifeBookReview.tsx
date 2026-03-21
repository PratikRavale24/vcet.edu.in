import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLifeBookReview() {
  return (
    <MMSLayout title="Book Review">
      <StudentsLifeSectionCard title="Book Review" subtitle="Critical reading and reflective learning for future business leaders">
        <p className="text-[17px] leading-8 text-slate-700">
          Book review activities are invaluable for developing critical thinking and analytical skills. They encourage
          students to engage deeply with business literature, enhancing their understanding of key concepts and
          theories. By articulating their insights and critiques, students improve their communication skills. This
          activity also fosters a habit of continuous learning, essential for future business leaders. Our students at
          the department have successfully reviewed and presented their learning on selected books.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <StudentsLifeImageHolder label="Book Review Session 01" size="large" />
          <StudentsLifeImageHolder label="Book Review Session 02" size="large" />
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
