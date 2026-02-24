import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Award, ClipboardCheck, BarChart3, FileText, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';

const initiatives = [
  {
    icon: ClipboardCheck,
    title: 'Academic Audits',
    description: 'Conducting regular academic audits to ensure quality in teaching-learning processes across all departments.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analysis',
    description: 'Systematic analysis of academic performance, research output, and student progression data.',
  },
  {
    icon: Lightbulb,
    title: 'Best Practices',
    description: 'Identifying, documenting, and promoting best practices in pedagogy, research, and governance.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Implementing quality improvement strategies based on feedback, data analysis, and benchmarking.',
  },
  {
    icon: FileText,
    title: 'AQAR Submission',
    description: 'Timely preparation and submission of Annual Quality Assurance Reports to NAAC.',
  },
  {
    icon: Users,
    title: 'Stakeholder Feedback',
    description: 'Collecting and analyzing feedback from students, faculty, alumni, employers, and parents.',
  },
];

const qualityMeasures = [
  'Curriculum enrichment through value-added courses and skill development programs',
  'Faculty development programs, workshops, and FDPs for pedagogical improvement',
  'Encouraging research publications, patents, and funded projects',
  'Promoting use of ICT tools and e-learning resources in teaching',
  'Student mentoring and counseling for holistic development',
  'Industry-institute collaboration through MoUs and guest lectures',
  'Green campus initiatives and environmental sustainability',
  'Alumni engagement and contribution to institutional growth',
];

const IQAC: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="IQAC"
        breadcrumbs={[
          { label: 'Committees', href: '#' },
          { label: 'IQAC' },
        ]}
      />

      {/* About IQAC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    iqac.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Quality Assurance
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Internal Quality Assurance Cell
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Internal Quality Assurance Cell (IQAC) at VCET was established as per the guidelines
                  of NAAC to develop a system for conscious, consistent, and catalytic improvement in the
                  overall performance of the institution.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  IQAC channelizes all efforts and measures of the institution towards promoting its holistic
                  academic excellence. It serves as the nodal agency for quality assurance, fostering a
                  culture of quality consciousness across the institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Initiatives</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Quality Assurance Initiatives
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {initiatives.map((item, idx) => (
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

      {/* Quality Improvement Measures */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Measures</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Quality Improvement Measures
              </h2>
            </div>

            <div className="space-y-3">
              {qualityMeasures.map((measure, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{measure}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AQAR Reports */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Reports</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                AQAR Reports
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
                Annual Quality Assurance Reports submitted to NAAC reflecting the institution's quality initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['2022-23', '2021-22', '2020-21', '2019-20'].map((year, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex items-center gap-4"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <FileText className="w-5 h-5 text-brand-blue/60 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy font-display">AQAR {year}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Annual Quality Assurance Report</p>
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

export default IQAC;
