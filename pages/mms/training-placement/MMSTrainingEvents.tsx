import React from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import HorizontalTableShell from '../../../components/mms/HorizontalTableShell';

export default function MMSTrainingEvents() {
  return (
    <MMSLayout title="Events">
      <section className="overflow-hidden rounded-none border border-brand-navy/25 bg-white shadow-[0_18px_36px_-26px_rgba(11,61,145,0.6)]">
        <div className="px-3 py-3 sm:px-4 sm:py-4 md:px-5">
          <HorizontalTableShell storageKey="mms-table-hint-events" scrollerClassName="border border-brand-navy/20 bg-white">
            <table className="w-full min-w-[980px] snap-start border-collapse">
            <thead>
              <tr className="text-white">
                <th className="sticky top-0 z-20 w-[70px] border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold uppercase">SR.</th>
                <th className="sticky top-0 z-20 w-[260px] border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold">Name of the Event</th>
                <th className="sticky top-0 z-20 border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold">Company Name / Resource Person</th>
                <th className="sticky top-0 z-20 w-[190px] border border-[#0a325f] bg-[#0d4888] px-3 py-3 text-left text-xl font-bold">Date of conduction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">1</td>
                <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                  <div className="space-y-3">
                    <div className="flex h-32 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50 overflow-hidden">
                      <img src="/images/Departments/MMS(MBA)/Training And Placement/Training/Events/Training_Events_-_AMCAT_Test.webp" alt="AMCAT Test" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-2xl leading-tight">AMCAT Test</p>
                  </div>
                </td>
                <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.6] text-slate-900">
                  AMCAT (Aspiring Minds Computer Adaptive Assessment) is India's largest Employability Assessment and is recognized by over many companies. AMCAT gives candidates detailed feedback of their employability (even stroke feedback) and helps connect them to over 4000 entry level jobs every year. Duration of test - 03 hours
                </td>
                <td className="border border-slate-700/80 px-3 py-3 text-xl leading-[1.45] text-slate-900">Since 2019</td>
              </tr>

              <tr className="align-top">
                <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">2</td>
                <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                  <div className="space-y-3">
                    <div className="flex h-32 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50 overflow-hidden">
                      <img src="/images/Departments/MMS(MBA)/Training And Placement/Training/Events/Training_Events_-_Refresher_Course_on_Technical_Interview_Preparation.webp" alt="Refresher Course" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-2xl leading-tight">Refresher Course on Technical interview Preparation.</p>
                  </div>
                </td>
                <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.6] text-slate-900">
                  <p>❖ Refresher courses for enhancing basic programming skills and skills pertaining to the program are organized by the “Training & Placement Cell.” These courses focus on reviewing and updating knowledge and skills required for clearing the aptitude</p>
                  <p>❖ VCET Faculties conducts refreshers course for students of all the branches</p>
                </td>
                <td className="border border-slate-700/80 px-3 py-3 text-xl leading-[1.45] text-slate-900">Every Year</td>
              </tr>

              <tr className="align-top">
                <td className="border border-slate-700/80 px-3 py-3 text-base text-slate-900">3</td>
                <td className="border border-slate-700/80 px-3 py-3 text-slate-900">
                  <div className="space-y-3">
                    <div className="flex h-32 items-center justify-center rounded-none border border-brand-blue/25 bg-slate-50 overflow-hidden">
                      <img src="/images/Departments/MMS(MBA)/Training And Placement/Training/Events/Training_Events_-_Mock_Interview.webp" alt="Mock Interview" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-2xl leading-tight">Mock Interview</p>
                  </div>
                </td>
                <td className="border border-slate-700/80 px-3 py-3 text-lg leading-[1.6] text-slate-900">
                  <p>❖ Mock Interview sessions were organized at VCET for helping student getting hands on experience for facing the interviewers face to face and tackle difficult questions.</p>
                  <p>❖ Every year mock interviews are arranged in odd semesters to train students for interview process.</p>
                </td>
                <td className="border border-slate-700/80 px-3 py-3 text-xl leading-[1.45] text-slate-900">Every Year</td>
              </tr>
            </tbody>
            </table>
          </HorizontalTableShell>
        </div>
      </section>
    </MMSLayout>
  );
}
