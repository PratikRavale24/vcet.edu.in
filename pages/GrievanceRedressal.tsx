import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ShieldCheck, FileText, Users, ClipboardList, ExternalLink, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Submit Grievance',
    description: 'Submit your grievance through the online form or in writing to the committee.',
  },
  {
    step: '02',
    title: 'Acknowledgement',
    description: 'The committee acknowledges receipt of the grievance within 3 working days.',
  },
  {
    step: '03',
    title: 'Investigation',
    description: 'The committee investigates the grievance thoroughly and impartially.',
  },
  {
    step: '04',
    title: 'Resolution',
    description: 'A resolution is communicated to the complainant within a stipulated timeframe.',
  },
];

const members = [
  { name: 'Chairperson', designation: 'Senior Faculty Member', role: 'Chairperson' },
  { name: 'Member 1', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 2', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 3', designation: 'Administrative Staff', role: 'Member' },
  { name: 'Student Representative 1', designation: 'Student', role: 'Member' },
  { name: 'Student Representative 2', designation: 'Student', role: 'Member' },
];

const GrievanceRedressal: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Grievance Redressal Committee"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'Statutory Committees', href: '#' },
          { label: 'Grievance Redressal' },
        ]}
      />

      {/* About */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    grievance-redressal.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Statutory Committee
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Grievance Redressal Committee
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Grievance Redressal Committee at VCET is constituted to address and resolve
                  grievances of students, faculty, and staff in a fair, transparent, and timely manner.
                  The committee ensures that all complaints are heard and dealt with appropriately.
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  The committee functions as per UGC regulations and AICTE guidelines, providing
                  a structured mechanism for redressal of academic and non-academic grievances.
                </p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe5gwVSZDJS4B4a9tCQsoaBgnGBoaH0xzveLpA0bTaoPgIByg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-navy transition-colors duration-300"
                >
                  <FileText className="w-4 h-4" />
                  Submit Grievance Online
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Process</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Grievance Filing Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {processSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 text-center"
                  style={{ transitionDelay: `${Math.min(idx * 0.08, 0.4)}s` }}
                >
                  <div className="text-3xl font-display font-bold text-brand-gold/20 mb-3">{item.step}</div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-2 font-display">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex justify-center mt-4">
                      <ArrowRight className="w-4 h-4 text-brand-gold/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Members</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Committee Members
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className={`reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                    idx === 0 ? 'sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-brand-blue to-brand-navy text-white' : ''
                  }`}
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      idx === 0 ? 'bg-white/10' : 'bg-brand-blue/5'
                    }`}>
                      <Users className={`w-5 h-5 ${idx === 0 ? 'text-brand-gold' : 'text-brand-blue/60'}`} />
                    </div>
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        idx === 0 ? 'text-brand-gold' : 'text-brand-gold/70'
                      }`}>
                        {member.role}
                      </div>
                      <h3 className={`text-sm font-semibold ${idx === 0 ? 'text-white' : 'text-brand-navy'}`}>
                        {member.name}
                      </h3>
                      <p className={`text-xs mt-0.5 ${idx === 0 ? 'text-white/60' : 'text-slate-400'}`}>
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GrievanceRedressal;
