import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';

export default function MMSFacilitiesGymkhana() {
  return (
    <MMSLayout title="Gymkhana">
      <FacilitiesSectionCard title="Gymkhana" subtitle="Sports and wellness facilities for student development">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FacilitiesImageHolder label="Gymkhana 01" size="large" src="/images/Departments/MMS(MBA)/faciliteis/gymmkhana-1.png" />
          <FacilitiesImageHolder label="Gymkhana 02" size="large" src="/images/Departments/MMS(MBA)/faciliteis/gym2.png" />
          <FacilitiesImageHolder label="Gymkhana 03" size="large" src="/images/Departments/MMS(MBA)/faciliteis/gym3.png" />
          <FacilitiesImageHolder label="Gymkhana 04" size="large" />
          <FacilitiesImageHolder label="Gymkhana 05" size="large" />
          <FacilitiesImageHolder label="Gymkhana 06" size="large" />
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
