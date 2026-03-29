import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ExperientialImageHolder, ExperientialSectionCard } from './ExperientialLearningShared';

export default function MMSExperientialEntrepreneurialDrive() {
  return (
    <MMSLayout title="Entrepreneurial Drive">
      <div className="space-y-6">
        <ExperientialSectionCard title="Entrepreneurial Drive">
          <p className="text-[17px] leading-8 text-slate-700">
            An entrepreneurial drive in an MBA program fosters innovation, risk-taking, and strategic thinking. It equips students with the skills to identify and seize business opportunities. Promoting products of Self-Help Groups (SHGs) as part of this drive not only supports social causes but also empowers local communities. This approach helps students understand the impact of socially responsible entrepreneurship, blending profit with purpose.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ExperientialImageHolder 
              label="Entrepreneurial Activity 01" 
              imageSrc="/images/Departments/MMS(MBA)/Experential Learning/ENTERPRENEURIAL DRIVE/Experential_Learning_-_Entrepreneurial_Drive_IMG_1.jpg"
            />
            <ExperientialImageHolder 
              label="Entrepreneurial Activity 02" 
              imageSrc="/images/Departments/MMS(MBA)/Experential Learning/ENTERPRENEURIAL DRIVE/Experential_Learning_-_Entrepreneurial_Drive_IMG_2.jpg"
            />
          </div>
        </ExperientialSectionCard>
      </div>
    </MMSLayout>
  );
}
