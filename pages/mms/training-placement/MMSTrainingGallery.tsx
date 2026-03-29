import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { PlacementImageHolder } from './MMSPlacementShared';

export default function MMSTrainingGallery() {
  return (
    <MMSLayout title="Gallery">
      <section className="overflow-hidden rounded-none border border-brand-navy/25 bg-white shadow-[0_18px_34px_-24px_rgba(11,61,145,0.55)]">
        <div className="border-b border-brand-gold/60 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold/95">Training and Placement</p>
          <h3 className="mt-1 text-2xl font-display font-bold text-white sm:text-3xl">Training Gallery</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-7">
          {[
            { id: 1, src: '/images/Departments/MMS(MBA)/Training And Placement/Training/Gallery/Training-Gallery_IMG1.jpg' },
            { id: 2, src: '/images/Departments/MMS(MBA)/Training And Placement/Training/Gallery/Training-Gallery_IMG2.jpg' },
            { id: 3, src: '/images/Departments/MMS(MBA)/Training And Placement/Training/Gallery/Training-Gallery_IMG3.jpg' },
            { id: 4, src: '/images/Departments/MMS(MBA)/Training And Placement/Training/Gallery/Training-Gallery_IMG4.jpg' },
            { id: 5, src: '/images/Departments/MMS(MBA)/Training And Placement/Training/Gallery/Training-Gallery_IMG5.jpg' },
          ].map(({ id, src }) => (
            <PlacementImageHolder key={id} label={`Training Gallery ${id.toString().padStart(2, '0')}`} size="large" src={src} />
          ))}
        </div>
      </section>
    </MMSLayout>
  );
}
