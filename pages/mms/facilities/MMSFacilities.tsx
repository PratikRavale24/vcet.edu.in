import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilities() {
  return (
    <MMSLayout title="Computer Labs">
      <FacilitiesSectionCard title="Computer Labs" subtitle="Technology-enabled lab ecosystem for practical management learning">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <FacilitiesImageHolder label="LAB 1" />
          <FacilitiesImageHolder label="LAB 2" />
          <FacilitiesImageHolder label="LAB 3" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
