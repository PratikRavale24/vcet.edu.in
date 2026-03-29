import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesSeminarHall() {
  return (
    <MMSLayout title="Seminar Hall">
      <FacilitiesSectionCard title="Seminar Hall" subtitle="Event-ready discussion and presentation spaces">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FacilitiesImageHolder label="Seminar Hall - Ground Floor" src="/images/Departments/MMS(MBA)/faciliteis/seminarhall-1.jpeg" />
          <FacilitiesImageHolder label="Seminar Hall - 3rd Floor" src="/images/Departments/MMS(MBA)/faciliteis/seminarhall-2.jpg" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
