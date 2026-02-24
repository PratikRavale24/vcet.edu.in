import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Award, BarChart3, TrendingUp, ExternalLink, FileText } from 'lucide-react';

const nirfDetails = [
  {
    label: 'Framework',
    value: 'National Institutional Ranking Framework',
    description: 'Approved by the Ministry of Education, Government of India',
  },
  {
    label: 'Parameters',
    value: '5 Key Parameters',
    description: 'Teaching, Learning & Resources; Research & Professional Practice; Graduation Outcomes; Outreach & Inclusivity; Perception',
  },
  {
    label: 'Category',
    value: 'Engineering',
    description: 'VCET participates in the Engineering category of NIRF rankings',
  },
];

const NIRF: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="NIRF"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'NIRF' },
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
                    Rankings
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  National Institutional Ranking Framework (NIRF)
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET actively participates in the National Institutional Ranking Framework (NIRF)
                  established by the Ministry of Education, Government of India. NIRF provides a
                  methodology for ranking institutions across the country based on objective criteria
                  and data-driven parameters.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The framework evaluates institutions on five broad parameters covering teaching,
                  learning, research, graduation outcomes, outreach, inclusivity, and overall
                  perception. VCET's participation reflects its commitment to transparency and
                  continuous improvement.
                </p>
                <a
                  href="https://www.nirfindia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-blue to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Visit NIRF Portal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* NIRF Certificate Placeholder */}
              <div className="reveal">
                <div className="aspect-[3/4] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">nirf-certificate.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NIRF Details */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                About NIRF
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Understanding the national ranking framework and its parameters
              </p>
            </div>

            <div className="space-y-5">
              {nirfDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="reveal bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">
                        {detail.label}
                      </p>
                      <h3 className="font-display font-bold text-brand-navy text-lg mb-1">
                        {detail.value}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{detail.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Parameters */}
      <section className="py-14 bg-gradient-to-r from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="reveal text-center mb-10">
              <h2 className="text-2xl font-display font-bold text-white mb-2">NIRF Ranking Parameters</h2>
              <p className="text-white/60 text-sm">The five pillars of institutional evaluation</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: FileText, label: 'Teaching, Learning & Resources' },
                { icon: TrendingUp, label: 'Research & Professional Practice' },
                { icon: Award, label: 'Graduation Outcomes' },
                { icon: BarChart3, label: 'Outreach & Inclusivity' },
                { icon: TrendingUp, label: 'Perception' },
              ].map((param, idx) => (
                <div
                  key={idx}
                  className="reveal text-center p-4 bg-white/5 rounded-xl border border-white/10"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <param.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <p className="text-xs text-white/80 font-medium leading-tight">{param.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NIRF;
