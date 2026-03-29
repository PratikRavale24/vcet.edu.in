import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

const excelObjectives = [
  'To familiarize participants with Excel interface and basic and advanced functionalities.',
  'To teach participants how to efficiently manage and manipulate data using Excel.',
  'To introduce participants to advanced Excel features for data analysis and visualization.',
  'To provide hands-on practice and real-world examples to reinforce learning.',
];

const excelDescriptions = [
  { text: 'Faculty addressing students during a hands-on training session.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursesexcel-1.jpeg' },
  { text: 'Students actively participating in a classroom-based practical session.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursesexcel-2.jpeg' },
  { text: 'Focused learning environment with students engaged in technical exercises.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursesexcel-3.jpeg' },
];

export default function MMSStudentsLifeAdavanceExcel() {
  return (
    <MMSLayout title="ADD ON COURSES ON ADVANCE EXCEL">
      <StudentsLifeSectionCard
        title="ADD ON COURSES ON ADVANCE EXCEL"
        subtitle="Professional spreadsheet training for analytical and operational excellence"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          Vidyavardhini&apos;s College of Engineering and Technology students of the Master of Management Studies (MMS)
          Department have organised the Excel training program designed to enhance participants&apos; proficiency in using
          Microsoft Excel for various tasks, including data analysis, reporting, and visualization. The program aimed to
          equip participants with essential Excel skills that are applicable in professional settings.
        </p>

        <div className="space-y-3">
          <h4 className="text-xl font-bold text-brand-navy">Objectives:</h4>
          <ul className="space-y-3">
            {excelObjectives.map((point, index) => (
              <li key={point} className="flex items-start gap-3 border border-brand-blue/18 bg-gradient-to-r from-white to-brand-light/25 px-4 py-3 text-[16px] leading-7 text-slate-700">
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center bg-brand-navy text-xs font-bold text-brand-gold">{index + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {excelDescriptions.map(({ text, src }, index) => (
            <article key={text} className="space-y-3">
              <StudentsLifeImageHolder label={`Advance Excel ${index + 1}`} src={src} />
              <p className="border-l-2 border-brand-gold pl-3 text-sm leading-6 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
