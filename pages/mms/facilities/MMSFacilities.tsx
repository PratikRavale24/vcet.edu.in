import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilities() {
  return (
    <MMSLayout title="Computer Labs">
      <FacilitiesSectionCard title="Computer Labs" subtitle="Technology-enabled lab ecosystem for practical management learning">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <FacilitiesImageHolder label="Computer Lab 1" src="/images/Departments/MMS(MBA)/faciliteis/computerlabs-1.png" />
          <FacilitiesImageHolder label="Computer Lab 2" src="/images/Departments/MMS(MBA)/faciliteis/computerlabs-2.png" />
          <FacilitiesImageHolder label="Computer Lab 3" src="/images/Departments/MMS(MBA)/faciliteis/computerlabs-3.jpeg" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
