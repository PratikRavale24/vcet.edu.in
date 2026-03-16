import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialImageHolder, ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialFinancialLiteracy() {
  return (
    <MMSLayout title="Experiential Learning">
      <div className="space-y-6">
        <ExperientialSectionCard title="Financial Literacy Program">
          <p className="text-[17px] leading-8 text-slate-700">
            As part of the Financial Management subject, MMS students organized a comprehensive Financial Literacy Program aimed at empowering a local self-help group (SHG) with essential financial knowledge and skills. This initiative was designed to foster financial independence and enhance the economic well-being of the SHG members.
          </p>
          <p className="text-[17px] leading-8 text-slate-700">
            This initiative not only enhanced the financial well-being of the participants but also provided MMS students with valuable teaching and leadership experience. The program exemplifies the positive impact of community-oriented educational efforts and the importance of financial literacy in fostering economic empowerment.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ExperientialImageHolder label="Financial Literacy Program 01" />
            <ExperientialImageHolder label="Financial Literacy Program 02" />
          </div>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
