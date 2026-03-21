import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLifeOscillations() {
  return (
    <MMSLayout title="Oscillations Prize Distribution">
      <StudentsLifeSectionCard
        title="Oscillations Prize Distribution"
        subtitle="National platform celebrating innovation, research quality, and student excellence"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          Vidyavardhini&apos;s College of Engineering and Technology organized VNPS &amp; Oscillations 2025 on April 4-5,
          providing a national platform for students to present innovative research across engineering and management
          disciplines. The MMS department&apos;s Management Track saw 11 students showcase projects on topics ranging from
          digital marketing and AI in education to investment trends and microfinance. Presentations were judged by
          academic experts and evaluated for originality, relevance, and practical application. The event fostered
          analytical thinking, professional communication, and leadership among participants. Overall, it encouraged
          academic excellence and highlighted emerging trends in business and management.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((index) => (
            <StudentsLifeImageHolder key={index} label={`Oscillations ${index.toString().padStart(2, '0')}`} size="large" />
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
