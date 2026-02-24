import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Building2, Handshake, Users, GraduationCap, Briefcase, BookOpen, MapPin, Award } from 'lucide-react';

const activities = [
  {
    icon: Handshake,
    title: 'MoUs with Industries',
    description: 'Signing memoranda of understanding with leading companies for collaborative research, internships, and placement opportunities.',
  },
  {
    icon: Users,
    title: 'Guest Lectures',
    description: 'Inviting industry experts and practitioners to deliver guest lectures on current trends and technologies.',
  },
  {
    icon: MapPin,
    title: 'Industrial Visits',
    description: 'Organizing visits to manufacturing plants, IT companies, and research labs to provide students real-world exposure.',
  },
  {
    icon: Briefcase,
    title: 'Internship Facilitation',
    description: 'Connecting students with industry partners for summer and full-time internships aligned with their specializations.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Advisory',
    description: 'Industry advisory boards provide inputs on curriculum design to ensure relevance and employability of graduates.',
  },
  {
    icon: Building2,
    title: 'Collaborative Projects',
    description: 'Facilitating joint projects between faculty-student teams and industry partners on real-world challenges.',
  },
];

const stats = [
  { icon: Handshake, value: '30+', label: 'Active MoUs' },
  { icon: Users, value: '100+', label: 'Guest Lectures/Year' },
  { icon: MapPin, value: '50+', label: 'Industrial Visits' },
  { icon: Briefcase, value: '500+', label: 'Internships Facilitated' },
];

const highlights = [
  'Regular industry interaction meets with HR heads and technical leaders',
  'Industry-sponsored labs and equipment for hands-on learning',
  'Faculty internships and sabbaticals in industry for knowledge updation',
  'Joint workshops and hackathons with corporate partners',
  'Industry mentorship programs for final year project guidance',
  'Collaborative research projects addressing real-world problems',
  'Corporate social responsibility initiatives in partnership with companies',
  'Alumni in industry acting as ambassadors for IIIC activities',
];

const IIIC: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="IIIC"
        breadcrumbs={[
          { label: 'Training & Placement', href: '#' },
          { label: 'IIIC' },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    iiic.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Industry Connect
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Industry-Institute Interaction Cell
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Industry-Institute Interaction Cell (IIIC) at VCET serves as a bridge between
                  academia and industry. The cell facilitates mutually beneficial partnerships that
                  enhance the quality of education and prepare students for successful careers.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through MoUs, guest lectures, industrial visits, internships, and collaborative
                  projects, IIIC ensures that students gain practical exposure and industry-relevant
                  skills alongside their academic learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="reveal text-center"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Activities</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                IIIC Activities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activities.map((item, idx) => (
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

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Highlights</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Key Highlights
              </h2>
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IIIC;
