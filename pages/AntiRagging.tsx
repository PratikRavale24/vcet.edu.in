import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ShieldAlert, Phone, Users, AlertTriangle, Scale, FileWarning, Ban, BookOpen } from 'lucide-react';

const helplines = [
  { label: 'UGC Anti-Ragging Helpline', number: '1800-180-5522', note: 'Toll Free' },
  { label: 'National Anti-Ragging Helpline', number: '1800-180-5522', note: '24x7' },
  { label: 'Email', number: 'helpline@antiragging.in', note: 'UGC' },
];

const consequences = [
  'Suspension from attending classes and academic privileges',
  'Withholding/withdrawing scholarship/fellowship and other benefits',
  'Debarring from appearing in any test/examination',
  'Withholding results',
  'Debarring from representing the institution in any national or international meet',
  'Suspension/expulsion from the hostel',
  'Rustication from the institution for a period ranging from 1 to 4 semesters',
  'Expulsion from the institution and consequent debarring from admission to any other institution',
  'FIR with the local police',
];

const members = [
  { name: 'Chairperson', designation: 'Senior Faculty Member', role: 'Chairperson' },
  { name: 'Member 1', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 2', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 3', designation: 'Non-Teaching Staff', role: 'Member' },
  { name: 'Police Representative', designation: 'Local Police Station', role: 'Member' },
  { name: 'Student Representative', designation: 'Student', role: 'Member' },
  { name: 'Parent Representative', designation: 'Parent', role: 'Member' },
  { name: 'NGO Representative', designation: 'NGO Member', role: 'Member' },
];

const policyHighlights = [
  {
    icon: Ban,
    title: 'Zero Tolerance Policy',
    description: 'VCET strictly prohibits ragging in any form on campus, hostels, or during any institutional activity.',
  },
  {
    icon: Scale,
    title: 'UGC Compliance',
    description: 'Fully compliant with UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009.',
  },
  {
    icon: ShieldAlert,
    title: 'Supreme Court Guidelines',
    description: 'Adherence to the directions of the Hon\'ble Supreme Court of India on anti-ragging measures.',
  },
  {
    icon: BookOpen,
    title: 'AICTE Guidelines',
    description: 'Implementation of all AICTE directives for prevention and prohibition of ragging.',
  },
];

const AntiRagging: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Anti Ragging Committee"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'Statutory Committees', href: '#' },
          { label: 'Anti Ragging Committee' },
        ]}
      />

      {/* Helpline Banner */}
      <section className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80">Anti-Ragging Helpline</p>
                  <p className="text-3xl font-display font-bold">1800-180-5522</p>
                  <p className="text-xs text-white/60">Toll Free | 24x7</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {helplines.map((h, idx) => (
                  <div key={idx} className="bg-white/10 rounded-xl px-4 py-2 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-white/60">{h.label}</p>
                    <p className="text-sm font-semibold">{h.number}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    anti-ragging.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Zero Tolerance
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Anti-Ragging Policy
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  VCET is committed to providing a safe and secure environment for all students.
                  Ragging in any form is strictly prohibited on campus, hostels, and during
                  institutional activities. The Anti-Ragging Committee ensures that all measures
                  prescribed by UGC, AICTE, and the Hon'ble Supreme Court are diligently followed.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Every student and parent/guardian is required to submit an anti-ragging affidavit
                  at the time of admission. The institution takes proactive steps including awareness
                  campaigns, orientation sessions, and vigilance squads to prevent any form of ragging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Highlights */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Compliance</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                UGC Guidelines Compliance
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {policyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${Math.min(idx * 0.08, 0.4)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-2 font-display">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Warning</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Consequences of Ragging
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                As per UGC regulations, the following punishments may be imposed on students found guilty of ragging.
              </p>
            </div>

            <div className="space-y-3">
              {consequences.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-red-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className={`reveal group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                    idx === 0 ? 'sm:col-span-2 lg:col-span-4 bg-gradient-to-r from-brand-blue to-brand-navy text-white' : ''
                  }`}
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      idx === 0 ? 'bg-white/10' : 'bg-brand-blue/5'
                    }`}>
                      <Users className={`w-4 h-4 ${idx === 0 ? 'text-brand-gold' : 'text-brand-blue/60'}`} />
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

export default AntiRagging;
