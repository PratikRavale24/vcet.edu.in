import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesLibrary() {
  return (
    <MMSLayout title="Library">
      <FacilitiesSectionCard title="Library" subtitle="Learning spaces, reading zones, and resources overview">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FacilitiesImageHolder label="Library 01" size="large" />
          <FacilitiesImageHolder label="Library 02" size="large" />
          <FacilitiesImageHolder label="Library 03" size="large" />
          <FacilitiesImageHolder label="Library 04" size="large" />
          <FacilitiesImageHolder label="Library 05" size="large" />
          <FacilitiesImageHolder label="Library 06" size="large" />
          <FacilitiesImageHolder label="Library 07" size="large" />
          <FacilitiesImageHolder label="Library 08" size="large" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
