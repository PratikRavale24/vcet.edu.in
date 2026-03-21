import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import HorizontalTableShell from '../../../components/mms/HorizontalTableShell';

const guidancePoints = [
  'Seminars on Higher Studies',
  'Talks on Career Guidance',
  'Motivational lectures by Alumni, Entrepreneurs, Industry guests and Faculty.',
  'Subscription of newspapers related to career opportunities such as Rojgar Samachar.',
];

export default function MMSTrainingCareerGuidance() {
  return (
    <MMSLayout title="Career Guidance">
      <section className="space-y-6">
        <article className="overflow-hidden rounded-none border border-brand-navy/25 bg-white shadow-[0_18px_34px_-24px_rgba(11,61,145,0.55)]">
          <div className="border-b border-brand-gold/60 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy px-5 py-5 sm:px-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold/95">Training and Placement</p>
            <h3 className="mt-1 text-2xl font-display font-bold text-white sm:text-3xl">Career Guidance</h3>
          </div>

          <div className="space-y-5 px-5 py-6 sm:px-7">
            <p className="text-[18px] leading-9 text-slate-700">
              In line with objective of helping in placing students in competitively good companies, apropos initiatives are taken to counsel the students with respect to career guidance and higher education. Some of them are:
            </p>

            <ul className="space-y-3">
              {guidancePoints.map((point, index) => (
                <li key={point} className="flex items-start gap-3 rounded-none border border-brand-blue/18 bg-gradient-to-r from-white to-brand-light/28 px-4 py-3 text-[17px] leading-8 text-slate-700">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-none bg-brand-navy text-sm font-bold text-brand-gold">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <section className="overflow-hidden rounded-none border border-brand-navy/25 bg-white shadow-[0_18px_36px_-26px_rgba(11,61,145,0.6)]">
          <div className="px-3 py-3 sm:px-4 sm:py-4 md:px-5">
            <HorizontalTableShell storageKey="mms-table-hint-career-guidance" scrollerClassName="border border-brand-navy/20 bg-white">
              <table className="w-full min-w-[980px] snap-start border-collapse">
              <thead>
                <tr className="text-white">
                  <th className="sticky top-0 z-20 w-[70px] border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold uppercase">Sr.</th>
                  <th className="sticky top-0 z-20 w-[300px] border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold">Event</th>
                  <th className="sticky top-0 z-20 border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold">Resource Person</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">1</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on Business Processes</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Mr. Swapnil Kondle</p>
                      <p className="text-sm leading-6 text-slate-700">CEO, SS Dies Works. Experience of 10 Years in Product Management and Service Delivery across Banking, Telecom and Manufacturing. Experience - 15 Years</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">2</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on Financial Management</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Ms. Aishwarya Mohol</p>
                      <p className="text-sm leading-6 text-slate-700">Treasury Deputy Manager in Forex at Axis Bank Mumbai. Experience - 10 Years</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">3</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on AI &amp; Machine Learning</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Mr. Hemant Tendulkar</p>
                      <p className="text-sm leading-6 text-slate-700">Oracle ERP and CRM Specialist. Tech Lead and AI in CRM-CX domain. Experience - 16 Years.</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">4</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on Higher Education</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Dr. Ron Boley</p>
                      <p className="text-sm leading-6 text-slate-700">Treasury Deputy Manager in Forex at Axis Bank Mumbai. Experience - 22 Years</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">5</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on Learning and Development</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Mr. Gejo Sreenivasan</p>
                      <p className="text-sm leading-6 text-slate-700">Director, Career Launcher Mumbai. Experience - 20 Years in Education Space.</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">6</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on Marketing</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Mr. Bripeesh Dadaria</p>
                      <p className="text-sm leading-6 text-slate-700">EdTech Futurist and Educator at Agies School of Data Sciences. Experience - 24 Years.</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">7</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Shaping Young Minds</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Trupson Management Association</p>
                    </div>
                  </td>
                </tr>

                <tr className="align-top">
                  <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">8</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.5] text-slate-900">Seminar on Career Guidance</td>
                  <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                    <div className="space-y-2">
                      <div className="flex h-20 w-20 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue/70">Image Holder</p>
                      </div>
                      <p className="text-base leading-7">Campus Credential</p>
                      <p className="text-sm leading-6 text-slate-700">Campus Credential is a training institute and has established itself as forerunner in competitive exam training.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
              </table>
            </HorizontalTableShell>
          </div>
        </section>
      </section>
    </MMSLayout>
  );
}
