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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <StudentsLifeImageHolder label="NSIM Training 01" size="large" />
          <StudentsLifeImageHolder label="NSIM Training 02" size="large" />
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
