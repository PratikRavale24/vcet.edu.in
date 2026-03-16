import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';

const scholarshipPoints = [
  'Minority: The Scheme\'s goal is to provide financial help to underprivileged and deserving students from minority populations (Belonging to minority communities such as Muslims, Sikhs, Christians, Buddhists, Jain, and Zoroastrians (Parsis)).',
  'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna. (EBC) (As Per the GR Dated 07th Oct 2017, 01st March 2018, 31st March 2018, 11.07.2019)',
  'Post Matric Scholarship to OBC Students. (OBC/Scholarship)',
  'Post Matric Scholarship Scheme (Government of India) (ST/Scholarship)',
  'Government of India Post-Matric Scholarship. (SC/Scholarship)',
];

const scholarshipPortal = 'https://mahadbt.maharashtra.gov.in/login/login';

export default function MMSScholarship() {
  return (
    <MMSLayout title="Scholarship">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-brand-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-gold">Master of Management Studies</span>
        </div>

        <article className="space-y-6 border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold text-[#0d2d56] md:text-3xl">Scholarship</h2>
            <div className="h-px bg-gradient-to-r from-brand-gold via-brand-navylight to-transparent" />
            <ol className="space-y-4">
              {scholarshipPoints.map((point, index) => (
                <li key={point} className="border border-slate-200 bg-slate-50 p-4 text-[17px] leading-8 text-slate-700">
                  <span className="mr-2 font-bold text-[#0d2d56]">{['I', 'II', 'III', 'IV', 'V'][index]}.</span>
                  {point}
                </li>
              ))}
            </ol>

            <a
              href={scholarshipPortal}
              target="_blank"
              rel="noreferrer"
              className="block border border-brand-blue/25 bg-brand-light/35 px-4 py-3 text-[16px] font-semibold text-brand-blue transition hover:bg-brand-light"
            >
              {scholarshipPortal}
            </a>
          </section>
        </article>
      </div>
    </MMSLayout>
  );
}
