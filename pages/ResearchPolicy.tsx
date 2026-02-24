import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { FileText, Download, ExternalLink, CheckCircle, Target } from 'lucide-react';

const policyObjectives = [
  'Promote a culture of research and innovation among faculty and students',
  'Encourage interdisciplinary and collaborative research activities',
  'Support publication in high-impact peer-reviewed journals',
  'Facilitate patent filing and intellectual property protection',
  'Provide research incentives and seed grants for innovative projects',
  'Establish research collaborations with industries and academic institutions',
  'Ensure ethical conduct and integrity in all research activities',
  'Develop state-of-the-art research infrastructure and facilities',
];

const ResearchPolicy: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Policy"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Research Policy' },
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
                    Policy Document
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  VCET Research Policy
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET has established a comprehensive research policy that provides a structured
                  framework for promoting and managing research activities across all departments.
                  The policy outlines guidelines for funded research, publications, patent filing,
                  consultancy, and ethical practices.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The research policy is aligned with the institution's vision of becoming a
                  center of excellence in engineering education and research, and is periodically
                  updated to reflect evolving academic and industry standards.
                </p>

                <a
                  href="https://vcet.edu.in/research-policy-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  Download Research Policy PDF
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Decorative Card */}
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-navy text-lg">Research Policy</h3>
                      <p className="text-sm text-slate-500">Official Policy Document</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Target className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>Covers all research activities and guidelines</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Target className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>Updated periodically per AICTE/UGC norms</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Target className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>Applicable to all departments and programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Objectives */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Key Objectives
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                The research policy aims to achieve the following objectives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {policyObjectives.map((objective, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all duration-300"
                  style={{ transitionDelay: `${idx * 0.06}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-medium">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchPolicy;
