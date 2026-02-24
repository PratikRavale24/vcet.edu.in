import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { FileText, BarChart3, Download, TrendingUp, Users, Star } from 'lucide-react';

const reportHighlights = [
  { icon: Users, value: '1000+', label: 'Student Responses' },
  { icon: Star, value: '4.0+', label: 'Average Rating' },
  { icon: BarChart3, value: '85%', label: 'Satisfaction Rate' },
  { icon: TrendingUp, value: 'Year on Year', label: 'Improvement' },
];

const reportSections = [
  {
    title: 'Teaching Quality',
    description: 'Feedback on faculty knowledge, teaching methods, and student engagement in classrooms.',
  },
  {
    title: 'Curriculum Relevance',
    description: 'Assessment of curriculum design, industry relevance, and alignment with current trends.',
  },
  {
    title: 'Infrastructure',
    description: 'Evaluation of campus facilities, laboratories, library, and digital infrastructure.',
  },
  {
    title: 'Support Services',
    description: 'Rating of counseling, mentoring, placement support, and administrative services.',
  },
  {
    title: 'Co-curricular Activities',
    description: 'Feedback on clubs, events, sports, cultural activities, and student organizations.',
  },
  {
    title: 'Overall Experience',
    description: 'Holistic assessment of the student\'s overall experience at the institution.',
  },
];

const SSSReport: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="SSS Report"
        breadcrumbs={[
          { label: 'NAAC', href: '#' },
          { label: 'SSS Report' },
        ]}
      />

      {/* Header with Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    sss-report.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Survey Results
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Student Satisfaction Survey Report
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The SSS Report presents a comprehensive analysis of the Student Satisfaction Survey
                  conducted as part of the NAAC accreditation process. The report captures student
                  perceptions across multiple dimensions of institutional quality.
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  The findings are used to identify areas of excellence and opportunities for
                  improvement, driving continuous quality enhancement at VCET.
                </p>

                <button className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-navy transition-colors duration-300">
                  <Download className="w-4 h-4" />
                  Download SSS Report
                </button>
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
              {reportHighlights.map((stat, idx) => (
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

      {/* Report Sections */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Report Sections</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Survey Dimensions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reportSections.map((section, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <FileText className="w-5 h-5 text-brand-blue/60 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-2 font-display">{section.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SSSReport;
