import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialImageHolder, ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialModelMaking() {
  return (
    <MMSLayout title="Experiential Learning">
      <div className="space-y-6">
        <ExperientialSectionCard title="3D Model Making Presentation">
          <p className="text-[17px] leading-8 text-slate-700">
            Creating 3D models and presentations based on industrial visits in an operations management course is a powerful experiential learning tool. It allows students to visualize and understand complex processes, enhancing their practical knowledge. This hands-on approach fosters creativity, critical thinking, and problem-solving skills. By presenting their models, students also improve their communication and teamwork abilities, preparing them for real-world operational challenges.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ExperientialImageHolder label="3D Model Presentation 01" />
            <ExperientialImageHolder label="3D Model Presentation 02" />
            <ExperientialImageHolder label="3D Model Presentation 03" />
            <ExperientialImageHolder label="3D Model Presentation 04" />
          </div>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
