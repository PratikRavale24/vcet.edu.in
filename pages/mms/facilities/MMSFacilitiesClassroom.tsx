import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesClassroom() {
  return (
    <MMSLayout title="Classroom">
      <FacilitiesSectionCard title="Classroom" subtitle="Modern classroom infrastructure for interactive learning">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FacilitiesImageHolder label="Classroom 01" />
          <FacilitiesImageHolder label="Classroom 02" />
          <FacilitiesImageHolder label="Classroom 03" />
          <FacilitiesImageHolder label="Classroom 04" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
