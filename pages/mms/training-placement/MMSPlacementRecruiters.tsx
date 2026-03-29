import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { PlacementSectionCard } from './MMSPlacementShared';

export default function MMSPlacementRecruiters() {
  const images = [
    '/images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG1.png',
    '/images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG2.png',
    '/images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG3.png',
    '/images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG4.jpeg',
    '/images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG5.png',
    '/images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG6.png',
    '/Images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG7.png',
    '/Images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG8.webp',
    '/Images/Departments/MMS(MBA)/Training And Placement/Placement/Our_Recruiters/Placement_-_Our_Recruiters_IMG9.png',
  ];

  return (
    <MMSLayout title="Our Recruiters">
      <PlacementSectionCard title="Our Recruiters" subtitle="Top companies hiring our management graduates">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {images.map((src, index) => (
            <div key={index} className="flex items-center justify-center rounded-none bg-white p-4 shadow-sm border border-brand-blue/15">
              <img src={src} alt={`Recruiter ${index + 1}`} className="max-h-24 w-auto object-contain" />
            </div>
          ))}
        </div>
      </PlacementSectionCard>
    </MMSLayout>
  );
}
