import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { ImageIcon } from 'lucide-react';

export default function MMSTrainingGallery() {
  return (
    <MMSLayout title="Gallery">
      <section className="overflow-hidden rounded-none border border-brand-navy/25 bg-white shadow-[0_18px_34px_-24px_rgba(11,61,145,0.55)]">
        <div className="border-b border-brand-gold/60 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy px-5 py-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold/95">Training and Placement</p>
          <h3 className="mt-1 text-2xl font-display font-bold text-white sm:text-3xl">Training Gallery</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-7">
          {[1, 2, 3, 4].map((index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-none border border-brand-blue/20 bg-gradient-to-br from-slate-50 to-brand-light/35 p-[3px] shadow-[0_16px_28px_-20px_rgba(11,61,145,0.6)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-20px_rgba(11,61,145,0.65)]"
            >
              <div className="rounded-none border border-brand-blue/15 bg-white p-4">
                <div className="flex min-h-[260px] items-center justify-center rounded-none border-2 border-dashed border-brand-blue/30 bg-gradient-to-br from-brand-light/30 to-slate-100 text-center">
                  <div className="space-y-2 px-4">
                    <ImageIcon className="mx-auto h-9 w-9 text-brand-blue/65" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Image Holder</p>
                    <p className="text-sm font-semibold text-brand-navy">Training Gallery {index.toString().padStart(2, '0')}</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold/75" />
              <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-[3px] border-t-[3px] border-brand-gold/90" />
            </article>
          ))}
        </div>
      </section>
    </MMSLayout>
  );
}
