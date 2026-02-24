import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ShieldCheck, Target, Users, ClipboardList, MessageSquare, CheckCircle2 } from 'lucide-react';

const objectives = [
  {
    icon: ShieldCheck,
    title: 'Fair Resolution',
    description: 'Ensuring fair and impartial resolution of student complaints and grievances.',
  },
  {
    icon: MessageSquare,
    title: 'Open Communication',
    description: 'Promoting a culture of open communication between students and administration.',
  },
  {
    icon: Target,
    title: 'Timely Action',
    description: 'Taking prompt action on reported grievances within the stipulated timeframe.',
  },
  {
    icon: ClipboardList,
    title: 'Transparent Process',
    description: 'Maintaining a transparent and documented process for all grievance proceedings.',
  },
  {
    icon: Users,
    title: 'Student Welfare',
    description: 'Safeguarding the rights and interests of students in all academic and non-academic matters.',
  },
  {
    icon: CheckCircle2,
    title: 'Follow-up',
    description: 'Conducting regular follow-ups to ensure effective implementation of resolutions.',
  },
];

const processSteps = [
  'Student submits a written complaint or fills the online grievance form.',
  'The SRGC cell acknowledges the receipt of the complaint.',
  'The matter is reviewed by the committee members.',
  'If necessary, the student is called for a hearing.',
  'The committee deliberates and arrives at a fair resolution.',
  'The resolution is communicated to the student in writing.',
  'Follow-up is conducted to ensure the resolution is implemented.',
];

const SRGCCommittee: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="SRGC Committee"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'Statutory Committees', href: '#' },
          { label: 'SRGC Committee' },
        ]}
      />

      {/* About */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  Statutory Committee
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Student Redressal & Grievance Cell
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The Student Redressal and Grievance Cell (SRGC) at VCET is constituted to provide
                a structured mechanism for students to voice their concerns and seek redressal of
                grievances related to academics, examinations, hostel, library, and other institutional services.
              </p>
              <p className="text-slate-500 leading-relaxed">
                The cell ensures that every student's concern is heard, addressed, and resolved in a
                fair and timely manner, thereby maintaining a conducive learning environment. The SRGC
                operates with complete transparency and impartiality to uphold the rights and welfare
                of students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Objectives</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Our Objectives
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {objectives.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-brand-blue/60 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-2 font-display">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Process</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Grievance Redressal Process
              </h2>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SRGCCommittee;
