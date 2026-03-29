import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesLibrary() {
  return (
    <MMSLayout title="Library">
      <FacilitiesSectionCard title="Library" subtitle="Learning spaces, reading zones, and resources overview">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FacilitiesImageHolder label="Library 01" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-1.jpeg" />
          <FacilitiesImageHolder label="Library 02" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-2.jpeg" />
          <FacilitiesImageHolder label="Library 03" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-3.jpeg" />
          <FacilitiesImageHolder label="Library 04" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-4.jpeg" />
          <FacilitiesImageHolder label="Library 05" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-5.jpeg" />
          <FacilitiesImageHolder label="Library 06" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-6.jpeg" />
          <FacilitiesImageHolder label="Library 07" size="large" src="/images/Departments/MMS(MBA)/faciliteis/library-7.jpeg" />
          <FacilitiesImageHolder label="Library 08" size="large" src="/Images/Departments/MMS(MBA)/faciliteis/library-8.jpeg" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
