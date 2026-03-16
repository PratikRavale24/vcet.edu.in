import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialImageHolder, ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialGroupDiscussion() {
  return (
    <MMSLayout title="Experiential Learning">
      <div className="space-y-6">
        <ExperientialSectionCard title="Group Discussion">
          <p className="text-[17px] leading-8 text-slate-700">
            Group discussions in MBA programs are a powerful experiential learning tool. They enable students to engage in collaborative learning, share diverse perspectives, and enhance critical skills like communication and teamwork. By applying theoretical knowledge to practical scenarios, students improve their problem-solving and decision-making abilities. This interactive approach builds confidence and prepares them to tackle real-world business challenges effectively.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ExperientialImageHolder label="Group Discussion 01" />
            <ExperientialImageHolder label="Group Discussion 02" />
          </div>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
