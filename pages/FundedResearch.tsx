import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { FlaskConical, IndianRupee, Calendar, Users, ExternalLink } from 'lucide-react';

const fundingAgencies = [
  'AICTE – All India Council for Technical Education',
  'DST – Department of Science and Technology',
  'CSIR – Council of Scientific & Industrial Research',
  'UGC – University Grants Commission',
  'BRNS – Board of Research in Nuclear Sciences',
  'Industry Sponsored Research Projects',
];

const FundedResearch: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Funded Research"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Funded Research' },
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
                    Sponsored Research
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Externally Funded Research Projects
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET faculty members actively pursue and receive research grants from
                  prestigious national and international funding agencies. These funded projects
                  address real-world challenges and contribute to the advancement of science and
                  technology.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The institution provides a supportive ecosystem for sponsored research through
                  modern laboratory infrastructure, research assistantship, and administrative
                  facilitation for grant applications and project execution.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IndianRupee className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">funded-research.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Agencies */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Funding Agencies
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                VCET faculty have secured research grants from leading government and industry bodies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fundingAgencies.map((agency, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.06}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{agency}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="reveal p-8 bg-gradient-to-br from-brand-blue/5 to-brand-gold/5 rounded-2xl border border-brand-gold/20 text-center">
              <FlaskConical className="w-10 h-10 text-brand-gold mx-auto mb-4" />
              <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                Funded Projects List
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                For a detailed list of funded research projects including project titles,
                principal investigators, funding amounts, and duration, please visit the
                VCET research portal.
              </p>
              <a
                href="https://vcet.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-blue to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                View Project Details
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FundedResearch;
