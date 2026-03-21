import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLifeVEcstatic() {
  return (
    <MMSLayout title="V-ECSTATIC">
      <StudentsLifeSectionCard title="V-ECSTATIC" subtitle="Annual college fest celebrating talent, unity, and student expression">
        <p className="text-[17px] leading-8 text-slate-700">
          The annual College Fest "V-Ecstatic" is a highly anticipated event, bringing together students, faculty, and
          the community for a celebration of talent, creativity, and camaraderie. This vibrant festival serves as a
          platform for MMS students to showcase their diverse skills and foster a spirit of unity and enthusiasm. The
          Fest provided a holistic experience, blending fun, learning, and social responsibility. It fostered a sense
          of community, allowing students to bond, collaborate, and celebrate their collective achievements. The event
          also offered a break from academic routines, giving students a chance to unwind and rejuvenate.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((index) => (
            <StudentsLifeImageHolder key={index} label={`V-ECSTATIC ${index.toString().padStart(2, '0')}`} size="large" />
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
