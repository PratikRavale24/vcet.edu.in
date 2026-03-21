import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeSectionCard } from './MMSStudentsLifeShared';

export default function MMSStudentsLife() {
  return (
    <MMSLayout title="Student's Life">
      <StudentsLifeSectionCard
        title="Student's Life"
        subtitle="A vibrant blend of academics, growth, and meaningful campus engagement"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          Life at V-CET is a vibrant blend of academic rigor, personal growth, and community engagement. Our campus is
          a dynamic environment where students are encouraged to explore their potential, forge meaningful connections,
          and prepare for successful careers.
        </p>
        <p className="text-[17px] leading-8 text-slate-700">
          Life V-CET is more than just an educational experience; it&apos;s a transformative journey that prepares students
          for future challenges and opportunities. By balancing academic excellence with extracurricular engagement and
          community involvement. The College ensures that students graduate as well-rounded individuals ready to make a
          positive impact in the world.
        </p>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
