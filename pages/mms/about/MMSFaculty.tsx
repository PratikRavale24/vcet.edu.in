import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { mmsFacultyList } from './mmsAboutData';

export default function MMSFaculty() {
  const totalFaculty = mmsFacultyList.length;
  const withEmail = mmsFacultyList.filter((member) => Boolean(member.email)).length;

  return (
    <MMSLayout title="MMS Faculty">
      <section className="space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-brand-gold/30 pb-5">
          <div>
            <span className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-navy/60">
              <i className="ph-fill ph-chalkboard-teacher text-sm text-brand-navy/50" />
              Master of Management Studies
            </span>
            <h2 className="text-2xl font-display font-bold text-brand-navy">Our Faculty</h2>
          </div>

          <div className="flex items-center divide-x divide-slate-200 rounded-xl border border-slate-100 bg-white shadow-sm">
            {[
              { icon: 'ph-users-three', value: String(totalFaculty), label: 'Members' },
              { icon: 'ph-envelope-simple', value: String(withEmail), label: 'Emails Listed' },
              { icon: 'ph-graduation-cap', value: 'MMS', label: 'Department' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2.5 px-4 py-3">
                <i className={`ph-fill ${stat.icon} text-lg text-brand-navy`} />
                <div>
                  <span className="block text-base font-bold leading-none text-brand-navy">{stat.value}</span>
                  <span className="mt-0.5 block text-[11px] text-slate-500">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2 md:grid-cols-3">
          {mmsFacultyList.map((faculty, index) => {
            const initials = faculty.name
              .split(' ')
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase())
              .join('');

            return (
              <article
                key={faculty.name}
                className="group flex flex-col items-center rounded-lg border border-gray-100 border-b-[3px] border-t-[3px] border-b-[#fdb813] border-t-[#1a4b7c] bg-white px-6 pb-5 pt-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative mb-4 flex h-32 w-32 items-center justify-center bg-brand-navylight text-2xl font-bold text-brand-navy">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-navy to-brand-blue text-white">
                    {initials}
                  </div>
                  <div className="absolute bottom-0 right-0 h-4 w-4 bg-[#fdb813]" />
                </div>

                <h3 className="text-center text-base font-bold leading-snug text-[#1a4b7c]">{faculty.name}</h3>
                <span className="mt-2 rounded bg-gray-100 px-3 py-0.5 text-center text-xs font-medium text-gray-500">
                  {faculty.designation}
                </span>
                <div className="my-3 h-0.5 w-10 bg-gray-300" />
                <p className="w-full break-all text-xs text-gray-500">{faculty.email || 'Email to be updated'}</p>
                <span className="mt-2 text-[11px] font-semibold text-slate-400">#{String(index + 1).padStart(2, '0')}</span>
              </article>
            );
          })}
        </div>
      </section>
    </MMSLayout>
  );
}
