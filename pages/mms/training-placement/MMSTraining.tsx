import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';

const trainingPoints = [
  'Scheduling of pre-placement training programs in conjunction with academic schedule.',
  'Conducting Aptitude Development training sessions right from SEMESTER-1 to provide high-quality training by seasoned trainers experienced in corporate education.',
  'Conducting technical and domain specific training sessions.',
  'Orientation of students on core companies opportunities and preparations required for placements.',
  "Identification of students' soft skills and Aptitude development/training needs and provide additional sessions either through external/internal resources.",
];

export default function MMSTraining() {
  return (
    <MMSLayout title="Training">
      <section className="space-y-6">
        <article className="overflow-hidden rounded-none border border-brand-navy/25 bg-white shadow-[0_18px_34px_-24px_rgba(11,61,145,0.55)]">
          <div className="border-b border-brand-gold/60 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy px-5 py-5 sm:px-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold/95">Training and Placement</p>
            <h3 className="mt-1 text-2xl font-display font-bold text-white sm:text-3xl">Pre-Placement Training Framework</h3>
          </div>

          <div className="space-y-6 px-5 py-6 sm:px-7">
            <p className="text-[18px] leading-9 text-slate-700">
              To gear-up the students for facing the recruitment process successfully, an extensive pre-placement training on aptitude, group discussions, interviews and presentation is offered to the students. The various measures taken in line with this are:
            </p>

            <div className="space-y-4">
              {trainingPoints.map((point, index) => (
                <article
                  key={point}
                  className="rounded-none border border-brand-blue/18 bg-gradient-to-r from-white to-brand-light/28 px-4 py-4 shadow-[0_10px_22px_-20px_rgba(11,61,145,0.8)] sm:px-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-none bg-brand-navy text-sm font-bold text-brand-gold">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[17px] leading-8 text-slate-700">{point}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>
    </MMSLayout>
  );
}
