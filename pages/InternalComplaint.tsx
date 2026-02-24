import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Shield, Users, FileText, Scale, AlertCircle, CheckCircle2, ClipboardList, Lock } from 'lucide-react';

const iccDetails = [
  {
    icon: Shield,
    title: 'POSH Compliance',
    description: 'Constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.',
  },
  {
    icon: Lock,
    title: 'Confidentiality',
    description: 'All complaints are treated with strict confidentiality and handled with sensitivity.',
  },
  {
    icon: Scale,
    title: 'Fair & Impartial',
    description: 'The committee ensures fair, unbiased, and impartial inquiry into all complaints.',
  },
  {
    icon: AlertCircle,
    title: 'Awareness & Prevention',
    description: 'Regular awareness sessions, workshops, and training programs on prevention of sexual harassment.',
  },
];

const complaintProcess = [
  {
    step: '01',
    title: 'Written Complaint',
    description: 'The aggrieved person submits a written complaint to the ICC within 3 months of the incident.',
  },
  {
    step: '02',
    title: 'Acknowledgement',
    description: 'ICC acknowledges the complaint and initiates conciliation or inquiry as appropriate.',
  },
  {
    step: '03',
    title: 'Inquiry',
    description: 'The committee conducts a thorough and confidential inquiry, hearing both parties.',
  },
  {
    step: '04',
    title: 'Recommendations',
    description: 'Based on the inquiry, ICC submits its findings and recommendations to the management.',
  },
  {
    step: '05',
    title: 'Action',
    description: 'The management takes appropriate action based on ICC recommendations within 60 days.',
  },
];

const members = [
  { name: 'Presiding Officer', designation: 'Senior Woman Faculty', role: 'Presiding Officer' },
  { name: 'Member 1', designation: 'Faculty Representative (Female)', role: 'Member' },
  { name: 'Member 2', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 3', designation: 'Non-Teaching Staff', role: 'Member' },
  { name: 'External Member', designation: 'NGO / Legal Expert', role: 'External Member' },
  { name: 'Student Representative', designation: 'Student', role: 'Student Member' },
];

const InternalComplaint: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Internal Complaint Committee"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'Internal Complaint Committee' },
        ]}
      />

      {/* About ICC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  POSH Act 2013
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Internal Complaint Committee (ICC)
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The Internal Complaint Committee (ICC) at VCET has been constituted in compliance
                with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and
                Redressal) Act, 2013. The committee ensures a safe and harassment-free environment
                for all students, faculty, and staff.
              </p>
              <p className="text-slate-500 leading-relaxed">
                The ICC is committed to creating awareness about gender sensitization, prevention of
                sexual harassment, and providing a fair mechanism for complaint redressal. The committee
                operates with the highest standards of confidentiality and impartiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Key Features</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                ICC Framework
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {iccDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${Math.min(idx * 0.08, 0.4)}s` }}
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

      {/* Complaint Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Process</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Complaint Filing Process
              </h2>
            </div>

            <div className="space-y-4">
              {complaintProcess.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-5 bg-brand-light rounded-xl p-5 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.06, 0.4)}s` }}
                >
                  <div className="text-2xl font-display font-bold text-brand-gold/30 flex-shrink-0 w-10">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy mb-1 font-display">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 md:py-24 bg-brand-light">
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

export default InternalComplaint;
