import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

const addOnCourseTopics = [
  'Communication Skills',
  'Excel proficiency',
  'Campus Recruitment Training',
];

export default function MMSStudentsLifeAboutAddOnCourses() {
  return (
    <MMSLayout title="Add-on Courses">
      <StudentsLifeSectionCard
        title="Add-on Courses"
        subtitle="30-hour skill enhancement modules aligned with employability outcomes"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          30-Hours Add-On Course for MMS Students on each of the following topics: Excel, Communication Skills, and
          Campus Recruitment Training. To enhance the employability and professional skills of our MMS students, a
          comprehensive 30-hour add-on course was conducted, focusing on Excel proficiency, communication skills, and
          campus recruitment training. This add-on course significantly improved students data handling, communication,
          and recruitment skills, bridging the gap between academic knowledge and industry requirements. The practical
          approach ensured students could apply what they learned in realistic scenarios. By focusing on Excel,
          communication skills, and campus recruitment preparation, this course has equipped MMS students with essential
          tools for their professional careers, ensuring they are well-prepared for the demands of the job market.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {addOnCourseTopics.map((topic) => (
            <article key={topic} className="space-y-3">
              <StudentsLifeImageHolder label={topic} />
              <p className="border-l-2 border-brand-gold pl-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-navy">{topic}</p>
            </article>
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
