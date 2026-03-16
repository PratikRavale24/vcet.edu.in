import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialImageHolder, ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialRolePlay() {
  return (
    <MMSLayout title="Experiential Learning">
      <div className="space-y-6">
        <ExperientialSectionCard title="Role Play">
          <p className="text-[17px] leading-8 text-slate-700">
            Role play in an MBA course is crucial for fostering practical learning and enhancing essential managerial competencies, such as leadership, communication, and problem-solving skills. By simulating real-world business scenarios, students can apply theoretical concepts, explore various strategies, and receive immediate feedback. This experiential learning methodology not only builds confidence but also equips students to navigate complex business challenges effectively in their professional careers. Students of MMS have explored the role plays under multiple courses throughout the journey at the Department of MMS.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ExperientialImageHolder label="Role Play Session 01" />
            <ExperientialImageHolder label="Role Play Session 02" />
          </div>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
