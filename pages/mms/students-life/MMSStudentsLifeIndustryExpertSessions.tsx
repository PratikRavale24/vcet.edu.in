import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { StudentsLifeImageHolder, StudentsLifeSectionCard } from './MMSStudentsLifeShared';

const industrySessionDescriptions = [
  { text: 'MMS students interacting with industry experts during a knowledge-sharing session.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-industryexpertsession-1.jpeg' },
  { text: 'Group photo with esteemed guest speakers and students after an insightful session.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-industryexpertsession-2.jpeg' },
  { text: 'Student delivering a presentation during the expert-led session to enhance communication and leadership skills.', src: '/images/Departments/MMS(MBA)/Students life/mms-studentlife-industryexpertsession-3.jpeg' },
];

export default function MMSStudentsLifeIndustryExpertSessions() {
  return (
    <MMSLayout title="INDUSTRY EXPERT SESSIONS">
      <StudentsLifeSectionCard
        title="INDUSTRY EXPERT SESSIONS"
        subtitle="Connecting classroom concepts with current business practices and leadership perspectives"
      >
        <p className="text-[17px] leading-8 text-slate-700">
          As part of our commitment to providing practical insights and real-world knowledge, a series of industry
          expert sessions were organized for MMS students, covering key subjects such as Financial Management, Human
          Resources (HR), and Business Research Methods. These sessions aimed to bridge the gap between academic
          learning and industry practices. The industry expert sessions provided MMS students with valuable exposure to
          current industry practices and trends. By learning directly from seasoned professionals, students could relate
          theoretical knowledge to practical applications, thereby enriching their academic experience and preparing them
          for successful careers. These expert-led sessions have significantly contributed to the professional growth of
          our MMS students, offering them a unique opportunity to learn from and interact with industry leaders. The
          insights gained from these sessions will undoubtedly aid them in navigating their future careers with
          confidence and competence.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {industrySessionDescriptions.map(({ text, src }, index) => (
            <article key={text} className="space-y-3">
              <StudentsLifeImageHolder label={`Industry Session ${index + 1}`} src={src} />
              <p className="border-l-2 border-brand-gold pl-3 text-sm leading-6 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </StudentsLifeSectionCard>
    </MMSLayout>
  );
}
