import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Calendar, MapPin, Users, Award, Lightbulb } from 'lucide-react';

const conventions = [
  {
    title: 'National Conference on Emerging Trends in Engineering (NCETE)',
    description: 'Annual multi-disciplinary conference bringing together researchers, faculty, and students to present innovative research across engineering domains.',
    type: 'National Conference',
  },
  {
    title: 'International Conference on Advances in Computing and Technology (ICACT)',
    description: 'A platform for international researchers to present cutting-edge work in computing, AI, data science, and information technology.',
    type: 'International Conference',
  },
  {
    title: 'Research Convention & Paper Presentation',
    description: 'Annual in-house research convention encouraging students and faculty to present their ongoing research projects and findings.',
    type: 'In-House Convention',
  },
  {
    title: 'Workshop on Research Methodology & Technical Writing',
    description: 'Hands-on workshops covering research methodologies, academic writing, literature review techniques, and publication strategies.',
    type: 'Workshop',
  },
];

const highlights = [
  { icon: Calendar, label: 'Annual Events', value: '5+' },
  { icon: Users, label: 'Participants', value: '500+' },
  { icon: Award, label: 'Papers Presented', value: '200+' },
  { icon: Lightbulb, label: 'Keynote Speakers', value: '30+' },
];

const ResearchConventions: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Conventions"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Research Conventions' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Events & Conferences
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Research Conventions at VCET
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET organizes and hosts national and international conferences, research
                  conventions, and workshops that serve as platforms for knowledge exchange,
                  collaboration, and dissemination of cutting-edge research findings.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  These events attract eminent researchers, industry experts, and academicians
                  from across the country and abroad, fostering a vibrant research community
                  within the institution.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">research-conventions.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gradient-to-r from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="reveal text-center"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conventions List */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Conferences & Events
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Major research events organized by VCET
              </p>
            </div>

            <div className="space-y-5">
              {conventions.map((convention, idx) => (
                <div
                  key={idx}
                  className="reveal bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <h3 className="font-display font-bold text-brand-navy text-lg">
                          {convention.title}
                        </h3>
                        <span className="flex-shrink-0 px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-wider rounded-full">
                          {convention.type}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {convention.description}
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

export default ResearchConventions;
