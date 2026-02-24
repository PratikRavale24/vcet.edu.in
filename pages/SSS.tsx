import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ClipboardList, ExternalLink, Users, BarChart3, Star, MessageSquare } from 'lucide-react';

const surveyDetails = [
  {
    icon: ClipboardList,
    title: 'Online Survey',
    description: 'Students can participate in the satisfaction survey through the official NAAC portal online.',
  },
  {
    icon: Users,
    title: 'All Students Eligible',
    description: 'All regular students of the institution are eligible and encouraged to participate in the survey.',
  },
  {
    icon: MessageSquare,
    title: 'Anonymous Feedback',
    description: 'The survey is completely anonymous, ensuring honest and unbiased feedback from students.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Survey results provide actionable insights for improving academic and infrastructure quality.',
  },
];

const surveyAreas = [
  'Teaching-learning process and faculty effectiveness',
  'Curriculum design and relevance to industry needs',
  'Library resources and access to learning materials',
  'Laboratory and practical facilities',
  'Campus infrastructure and amenities',
  'Examination and evaluation process',
  'Student support services and counseling',
  'Co-curricular and extra-curricular activities',
  'Placement and career guidance services',
  'Overall satisfaction with the institution',
];

const SSS: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="SSS"
        breadcrumbs={[
          { label: 'NAAC', href: '#' },
          { label: 'SSS' },
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
                  NAAC Requirement
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Student Satisfaction Survey
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The Student Satisfaction Survey (SSS) is an important component of the NAAC
                accreditation framework. It captures the perception and satisfaction levels of
                students regarding the quality of education, infrastructure, support services,
                and overall experience at the institution.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                VCET encourages all students to actively participate in the SSS to help the
                institution identify areas of strength and improvement, contributing to the
                continuous quality enhancement process.
              </p>

              <a
                href="https://assessmentonline.naac.gov.in/public/index.php/survey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-navy transition-colors duration-300"
              >
                <Star className="w-4 h-4" />
                Participate in SSS
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Details */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Details</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                About the Survey
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {surveyDetails.map((item, idx) => (
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

      {/* Survey Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Coverage</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Areas Covered in the Survey
              </h2>
            </div>

            <div className="space-y-3">
              {surveyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SSS;
