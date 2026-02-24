import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Users, Crown, Briefcase, GraduationCap } from 'lucide-react';

const councilMembers = [
  { name: 'Mr. Vikas Vartak', role: 'Chairman', designation: 'Chairman Vidyavardhini', icon: Crown },
  { name: 'Mr. M.N. alias Bhausaheb Mohol', role: 'Member', designation: 'Industrialist', icon: Briefcase },
  { name: 'Mr. Pandurang alias Babansheth Naik', role: 'Member', designation: 'Educationist', icon: GraduationCap },
  { name: 'Mr. Hasmukh Shah', role: 'Member', designation: 'Industrialist', icon: Briefcase },
  { name: 'Mr. Madhurkar B Parekh', role: 'Member', designation: 'Industrialist, Chairman of Pidilite Industries', icon: Briefcase },
  { name: 'Director of Technical Education (M.S.)', role: 'Member', designation: 'Ex-Officio', icon: Users },
  { name: 'Nominee of the University', role: 'Member', designation: 'Ex-Officio', icon: Users },
  { name: 'Director, WRO AICTE', role: 'Member', designation: 'Ex-Officio', icon: Users },
  { name: 'Educationalist/Industrialist', role: 'Member', designation: 'Nominated by AICTE', icon: Users },
  { name: 'Dr. Rakesh Himte', role: 'Member Secretary', designation: 'Principal', icon: GraduationCap },
  { name: 'Dr. Uday Aswalekar', role: 'Member', designation: 'Staff Representative, Professor, MECH', icon: GraduationCap },
  { name: 'Dr. Archana Ekbote', role: 'Member', designation: 'Staff Representative, Assistant Professor, INFT', icon: GraduationCap },
];

const GoverningCouncil: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Governing Council"
        breadcrumbs={[
          { label: 'About Us', href: '/about-us' },
          { label: 'Governing Council' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Leadership</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Members of the Governing Council
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                The Governing Council oversees the strategic direction and governance of the institution.
              </p>
            </div>

            {/* Council Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {councilMembers.map((member, idx) => (
                <div
                  key={idx}
                  className={`reveal group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                    idx === 0 ? 'sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-brand-blue to-brand-navy text-white' : ''
                  }`}
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      idx === 0
                        ? 'bg-white/10'
                        : member.role === 'Chairman' ? 'bg-brand-gold/10' : 'bg-brand-blue/5'
                    }`}>
                      <member.icon className={`w-5 h-5 ${
                        idx === 0 ? 'text-brand-gold' : 'text-brand-blue/60'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        idx === 0 ? 'text-brand-gold' : 'text-brand-gold/70'
                      }`}>
                        {idx + 1}. {member.role}
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

export default GoverningCouncil;
