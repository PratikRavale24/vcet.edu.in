import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Users, Target, Lightbulb, TrendingUp, Building2, BookOpen } from 'lucide-react';

const cdcObjectives = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Formulating long-term strategic plans for the overall development and growth of the institution.',
  },
  {
    icon: Building2,
    title: 'Infrastructure Development',
    description: 'Overseeing the planning and execution of infrastructure projects to enhance the campus facilities.',
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Ensuring high standards of teaching, learning, and research across all departments.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Oversight',
    description: 'Managing the financial resources of the institution efficiently and transparently.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Growth',
    description: 'Promoting innovation in curriculum development, pedagogy, and research initiatives.',
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    description: 'Facilitating constructive engagement with students, faculty, parents, and industry partners.',
  },
];

const members = [
  { name: 'Chairman', designation: 'President, Vidyavardhini Trust', role: 'Chairman' },
  { name: 'Secretary', designation: 'Secretary, Vidyavardhini Trust', role: 'Member' },
  { name: 'Principal', designation: 'Principal, VCET', role: 'Member Secretary' },
  { name: 'DTE Nominee', designation: 'Director of Technical Education', role: 'Member' },
  { name: 'University Nominee', designation: 'University of Mumbai', role: 'Member' },
  { name: 'AICTE Nominee', designation: 'AICTE, Western Region', role: 'Member' },
  { name: 'Industry Representative', designation: 'Industry Expert', role: 'Member' },
  { name: 'Faculty Representative 1', designation: 'Senior Faculty Member', role: 'Member' },
  { name: 'Faculty Representative 2', designation: 'Senior Faculty Member', role: 'Member' },
];

const CollegeDevelopmentCommittee: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="College Development Committee"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'College Development Committee' },
        ]}
      />

      {/* About CDC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    cdc.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Governance
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  College Development Committee
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The College Development Committee (CDC) is a statutory body constituted as per the
                  Maharashtra Public Universities Act. It serves as the principal governing body of the
                  institution, responsible for overseeing the overall development and administration of
                  the college.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  The CDC plays a vital role in ensuring the institution's growth through strategic
                  planning, resource management, and academic oversight. It bridges the gap between
                  management, faculty, and students, creating a cohesive framework for institutional
                  excellence.
                </p>
              </div>
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
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Role & Functions</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Key Responsibilities
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                The CDC undertakes a wide range of functions to ensure holistic institutional development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cdcObjectives.map((item, idx) => (
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

      {/* Members */}
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
                  className={`reveal group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
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
                    <div className="flex-1 min-w-0">
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

export default CollegeDevelopmentCommittee;
