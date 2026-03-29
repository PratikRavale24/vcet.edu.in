import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialImageHolder, ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialGroupDiscussion() {
  return (
    <MMSLayout title="Group Discussion">
      <div className="space-y-6">
        <ExperientialSectionCard title="Group Discussion">
          <p className="text-[17px] leading-8 text-slate-700">
            Group discussions in MBA programs are a powerful experiential learning tool. They enable students to engage in collaborative learning, share diverse perspectives, and enhance critical skills like communication and teamwork. By applying theoretical knowledge to practical scenarios, students improve their problem-solving and decision-making abilities. This interactive approach builds confidence and prepares them to tackle real-world business challenges effectively.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ExperientialImageHolder 
              label="Group Discussion 01" 
              imageSrc="/images/Departments/MMS(MBA)/Experential Learning/Group Discussion/Experential_Learning_-_Group_Discussion_IMG1.jpeg"
            />
            <ExperientialImageHolder 
              label="Group Discussion 02" 
              imageSrc="/images/Departments/MMS(MBA)/Experential Learning/Group Discussion/Experential_Learning_-_Group_Discussion_IMG2.jpeg"
            />
          </div>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
