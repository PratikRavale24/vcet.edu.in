import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

const powerBiObjectives = [
  'To familiarize participants with the Power BI environment, dashboards, and essential tools.',
  'To teach participants different techniques for data import, cleaning, and transformation using Power Query.',
  'To explore DAX (Data Analysis Expressions), custom visuals, and interactive dashboards.',
  'To provide practical case studies and projects to apply learning in professional scenarios.',
];

const powerBiHighlights = [
  { text: 'Instructor guiding students through a practical Power BI session in the computer lab.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursespowerbi-1.jpg' },
  { text: 'Student presenters showcasing their Power BI dashboards and insights to the class.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursespowerbi-2.jpg' },
  { text: 'Trainer being felicitated as a token of appreciation for an impactful workshop.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursespowerbi-3.jpg' },
  { text: 'Hands-on training session with students working on live Power BI projects.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursespowerbi-4.jpeg' },
  { text: 'Instructor revisiting key concepts during a recap session to strengthen student understanding.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-addoncoursespowerbi-5.jpeg' },
];

export default function MMSStudentsLifePowerBi() {
  return (
    <MMSLayout title="Add-on Courses on Powerbi">
      <StudentsLifeSectionCard
        title="Add-on Courses on Powerbi"
        subtitle="Applied business intelligence training for data-driven decision making"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          Vidyavardhini&apos;s College of Engineering and Technology (VCET) students from the Master of Management Studies
          (MMS) Department have organized a Power BI Training Program aimed at enhancing participants&apos; skills in data
          visualization, business intelligence, and interactive reporting. The program equips participants with
          essential Power BI capabilities that are widely used in professional and corporate environments.
        </p>

        <div className="space-y-3">
          <h4 className="text-xl font-bold text-brand-navy">Objectives:</h4>
          <ul className="space-y-3">
            {powerBiObjectives.map((point, index) => (
              <li key={point} className="flex items-start gap-3 border border-brand-blue/18 bg-gradient-to-r from-white to-brand-light/25 px-4 py-3 text-[16px] leading-7 text-slate-700">
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center bg-brand-navy text-xs font-bold text-brand-gold">{index + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base font-semibold uppercase tracking-[0.08em] text-brand-blue">Timing: Total 30hrs</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {powerBiHighlights.map(({ text, src }, index) => (
            <article key={text} className="space-y-3">
              <StudentsLifeImageHolder label={`PowerBI Session ${index + 1}`} size="large" src={src} />
              <p className="border-l-2 border-brand-gold pl-3 text-sm leading-6 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
