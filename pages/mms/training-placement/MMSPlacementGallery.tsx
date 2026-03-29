import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { PlacementImageHolder, PlacementSectionCard } from './MMSPlacementShared';

export default function MMSPlacementGallery() {
  return (
    <MMSLayout title="Gallery">
      <PlacementSectionCard title="Placement Gallery" subtitle="Highlights from placement activities, sessions, and engagement events">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { id: 1, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG1.jpg' },
            { id: 2, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG2.jpg' },
            { id: 3, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG3.jpg' },
            { id: 4, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG4.jpg' },
            { id: 5, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG5.jpg' },
            { id: 6, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG6.png' },
            { id: 7, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG7.jpg' },
            { id: 8, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG8.png' },
            { id: 9, src: '/images/Departments/MMS(MBA)/Training And Placement/Placement/Gallery_MMS/Placement_-_Gallery_IMG9.jpg' },
          ].map(({ id, src }) => (
            <PlacementImageHolder key={id} label={`Placement Gallery ${id.toString().padStart(2, '0')}`} size="large" src={src} />
          ))}
        </div>
      </PlacementSectionCard>
    </MMSLayout>
  );
}
