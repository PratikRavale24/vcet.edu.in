import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLifeNSIMTraining() {
  return (
    <MMSLayout title="NSIM Kona Kona Shiksha Training">
      <StudentsLifeSectionCard
        title="NSIM Kona Kona Shiksha Training"
        subtitle="Financial education initiative in collaboration with NISM and SEBI"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          On January 3, 2025, the Department of Management Studies, in collaboration with NISM and SEBI, organized a
          Financial Education Program for MMS students at Vidyavardhini&apos;s College. Led by expert speaker Mr. Deepak
          Vakharia, the session focused on key topics like saving, budgeting, investing, and financial discipline.
          Through real-life examples and an engaging intra-day trading simulation, students learned about the risks and
          opportunities in capital markets. The session also highlighted career prospects in the financial sector and
          emphasized the importance of financial planning for long-term goals. Participants who completed the session
          received NISM and SEBI certifications, boosting their academic and professional credentials.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { id: 1, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-nsimtraining-1.jpeg' },
            { id: 2, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-nsimtraining-2.jpeg' },
            { id: 3, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-nsimtraining-3.jpeg' },
            { id: 4, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-nsimtraining-4.jpeg' },
            { id: 5, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-nsimtraining-5.jpeg' },
            { id: 6, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-nsimtraining-6.jpeg' },
          ].map(({ id, src }) => (
            <StudentsLifeImageHolder key={id} label={`NSIM Training ${id.toString().padStart(2, '0')}`} size="large" src={src} />
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
