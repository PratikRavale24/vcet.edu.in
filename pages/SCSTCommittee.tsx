import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Shield, Users, Heart, BookOpen, HandHeart, Target, Award } from 'lucide-react';

const objectives = [
  {
    icon: Shield,
    title: 'Protection of Rights',
    description: 'Ensuring that the rights and dignity of SC/ST students are protected within the campus.',
  },
  {
    icon: Heart,
    title: 'Welfare Measures',
    description: 'Implementing welfare policies and schemes for the benefit of SC/ST students.',
  },
  {
    icon: BookOpen,
    title: 'Academic Support',
    description: 'Providing academic support through remedial coaching, mentoring, and counseling.',
  },
  {
    icon: HandHeart,
    title: 'Scholarship Assistance',
    description: 'Facilitating government scholarships, fellowships, and financial aid for eligible students.',
  },
  {
    icon: Target,
    title: 'Awareness Programs',
    description: 'Conducting awareness programs about government policies, schemes, and constitutional rights.',
  },
  {
    icon: Award,
    title: 'Grievance Handling',
    description: 'Addressing complaints of discrimination or harassment faced by SC/ST students promptly.',
  },
];

const activities = [
  'Orientation sessions for newly admitted SC/ST students',
  'Information dissemination about government scholarship schemes',
  'Organizing skill development workshops and training programs',
  'Providing guidance for competitive exams and career opportunities',
  'Facilitating access to book banks and study materials',
  'Counseling services for academic and personal issues',
  'Coordination with government agencies for welfare schemes',
  'Celebration of important national days like Ambedkar Jayanti, Constitution Day',
];

const members = [
  { name: 'Chairperson', designation: 'Faculty (SC/ST Category)', role: 'Chairperson' },
  { name: 'Member 1', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 2', designation: 'Faculty Representative', role: 'Member' },
  { name: 'Member 3', designation: 'Non-Teaching Staff (SC/ST)', role: 'Member' },
  { name: 'Student Representative 1', designation: 'Student (SC/ST Category)', role: 'Student Member' },
  { name: 'Student Representative 2', designation: 'Student (SC/ST Category)', role: 'Student Member' },
];

const SCSTCommittee: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="SC-ST Committee"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'Statutory Committees', href: '#' },
          { label: 'SC-ST Committee' },
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
                SC-ST Committee for Student Welfare
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The SC/ST Committee at VCET has been constituted as per UGC guidelines and
                the provisions of the SC/ST Prevention of Atrocities Act. The committee is
                dedicated to ensuring the welfare, protection, and overall development of
                students belonging to Scheduled Castes and Scheduled Tribes.
              </p>
              <p className="text-slate-500 leading-relaxed">
                The committee works towards creating an inclusive environment where SC/ST students
                can pursue their education without any discrimination or hindrance. It acts as a
                bridge between students and the administration, ensuring that their concerns are
                heard and addressed effectively.
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
                Committee Objectives
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

      {/* Activities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Activities</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Key Activities
              </h2>
            </div>

            <div className="space-y-3">
              {activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{activity}</p>
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

export default SCSTCommittee;
