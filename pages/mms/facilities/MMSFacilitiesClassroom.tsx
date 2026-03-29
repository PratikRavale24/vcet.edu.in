import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesClassroom() {
  return (
    <MMSLayout title="Classroom">
      <FacilitiesSectionCard title="Classroom" subtitle="Modern classroom infrastructure for interactive learning">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FacilitiesImageHolder label="Classroom 01" src="/images/Departments/MMS(MBA)/faciliteis/classroom-1.jpeg" />
          <FacilitiesImageHolder label="Classroom 02" src="/images/Departments/MMS(MBA)/faciliteis/classroom_img_2.jpeg" />
          <FacilitiesImageHolder label="Classroom 03" src="/images/Departments/MMS(MBA)/faciliteis/classroom-1.jpeg" />
          <FacilitiesImageHolder label="Classroom 04" src="/images/Departments/MMS(MBA)/faciliteis/classroom_img_2.jpeg" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
