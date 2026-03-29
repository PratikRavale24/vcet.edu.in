import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLifeIdeathon() {
  return (
    <MMSLayout title="IDEATHON 1.0">
      <StudentsLifeSectionCard
        title="IDEATHON 1.0"
        subtitle="Innovation challenge designed to strengthen creativity, teamwork, and solution thinking"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          The MMS Department at Vidyavardhini College of Engineering and Technology organized Ideathon 1.0 on 22nd
          October 2024, with participation from 14 colleges across Mumbai and Palghar. The event provided a platform
          for students to present innovative, real-world solutions, fostering creativity, collaboration, and critical
          thinking. Esteemed judges-Mr. Francis Tuscano (Managing Director, Thermovision Technologies Pvt. Ltd.), Mr.
          Vinay Patel (Assistant Professor-Mechanical, VCET), and Dr. Ashish Chaudhari (Research Dean, VCET)-evaluated
          the ideas. Participants enhanced their presentation and networking skills, while the organizing team honed
          leadership and coordination abilities.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { id: 1, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-ideathon1.0-2.jpg' },
            { id: 2, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-ideathon1.0-3.jpg' },
            { id: 3, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-ideathon1.0-4.jpg' },
            { id: 4, src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-ideathon1.0-5.jpg' },
          ].map(({ id, src }) => (
            <StudentsLifeImageHolder key={id} label={`IDEATHON ${id.toString().padStart(2, '0')}`} size="large" src={src} />
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
