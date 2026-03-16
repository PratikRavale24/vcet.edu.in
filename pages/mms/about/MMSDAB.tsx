import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { mmsDabMembers } from './mmsAboutData';

export default function MMSDAB() {
  const industryCount = mmsDabMembers.filter((m) => m.role.toLowerCase().includes('industry')).length;
  const academicCount = mmsDabMembers.filter((m) => m.role.toLowerCase().includes('academia') || m.role.toLowerCase().includes('department') || m.role.toLowerCase().includes('principal')).length;
  const studentCount = mmsDabMembers.filter((m) => m.role.toLowerCase().includes('student')).length;

  const badgeClass = (role: string) => {
    const normalized = role.toLowerCase();
    if (normalized.includes('industry')) return 'bg-amber-50 text-amber-700';
    if (normalized.includes('student')) return 'bg-emerald-50 text-emerald-700';
    if (normalized.includes('parent')) return 'bg-purple-50 text-purple-700';
    return 'bg-brand-navylight text-brand-navy';
  };

  return (
    <MMSLayout title="Departmental Advisory Board (DAB)">
      <section className="space-y-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">Master of Management Studies</span>
          </div>
          <h2 className="text-3xl font-display font-bold leading-tight text-brand-navy md:text-4xl">
            Departmental Advisory Board
            <span className="text-brand-gold"> (DAB)</span>
          </h2>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <i className="ph-fill ph-check-circle text-base text-brand-gold" />
            Following are the members of the committee from the academic year 2023-24.
          </div>
          <div className="mt-5 h-px bg-gradient-to-r from-brand-gold via-brand-navylight to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { count: String(industryCount), label: 'Industry Experts', icon: 'ph-buildings' },
            { count: String(academicCount), label: 'Academic/Internal', icon: 'ph-graduation-cap' },
            { count: String(studentCount), label: 'Student Reps', icon: 'ph-student' },
            { count: String(mmsDabMembers.length), label: 'Total Members', icon: 'ph-users-three' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-navylight">
                <i className={`ph-fill ${stat.icon} text-xl text-brand-navy`} />
              </div>
              <div>
                <p className="text-2xl font-display font-bold leading-none text-brand-navy">{stat.count}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <article className="rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="space-y-2 px-6 pt-6 text-justify text-[15px] leading-8 text-slate-700 md:px-8">
            <p>
              1. The Departmental Advisory Board (DAB), consisting of industry and academic experts, is instrumental in the success of the Master of Management Studies program.
            </p>
            <p>
              2. Their combined expertise ensures that the curriculum remains relevant and aligned with business needs, equipping graduates for success while enhancing internships and placement opportunities.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto border-t border-slate-100">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="w-14 px-4 py-4 text-left text-[11px] font-bold uppercase tracking-widest">Sr.</th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-widest">Name</th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-widest">Designation</th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-widest">Organization</th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-widest">Role in DAB</th>
                </tr>
              </thead>
              <tbody>
                {mmsDabMembers.map((member, index) => (
                  <tr
                    key={member.srNo}
                    className={`border-t border-slate-100 transition-colors duration-150 hover:bg-brand-navylight/40 ${index % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}`}
                  >
                    <td className="px-4 py-4 text-xs font-bold text-brand-navy/40">{String(member.srNo).padStart(2, '0')}</td>
                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-brand-navy">{member.name}</td>
                    <td className="px-4 py-4 text-slate-600">{member.designation}</td>
                    <td className="px-4 py-4 text-slate-600">{member.organization}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeClass(member.role)}`}>
                        {member.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </MMSLayout>
  );
}
