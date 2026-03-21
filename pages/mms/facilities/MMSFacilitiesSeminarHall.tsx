import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesSeminarHall() {
  return (
    <MMSLayout title="Seminar Hall">
      <FacilitiesSectionCard title="Seminar Hall" subtitle="Event-ready discussion and presentation spaces">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FacilitiesImageHolder label="Seminar Hall - Ground Floor" />
          <FacilitiesImageHolder label="Seminar Hall - 3rd Floor" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
