import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { BarChart3, Image, Info } from 'lucide-react';

const CutOff: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Cut Off 24-25"
        breadcrumbs={[
          { label: 'Admission', href: '/admission' },
          { label: 'Cut Off' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-5">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              CAP Cut Off Details — 2024-25
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              View the official cut-off marks for all branches from the Centralized Admission
              Process (CAP) rounds for the academic year 2024-25.
            </p>
          </div>

          {/* Cut Off Image Placeholder */}
          <div
            className="max-w-5xl mx-auto reveal"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Header Bar */}
              <div className="bg-gradient-to-r from-brand-blue to-brand-navy px-6 py-4 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-brand-gold" />
                <h3 className="text-base font-display font-bold text-white">
                  Cut Off Table — CAP Rounds 2024-25
                </h3>
              </div>

              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-brand-light to-gray-50 min-h-[400px] md:min-h-[600px] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Image className="w-10 h-10 text-brand-blue/40" />
                  </div>
                  <p className="text-base font-display font-semibold text-slate-400">
                    Cut Off Table 2024-25
                  </p>
                  <p className="text-xs text-slate-300 mt-1">cutoff-2024-25.jpg</p>
                </div>
              </div>
            </div>
          </div>

          {/* General Note */}
          <div
            className="max-w-4xl mx-auto mt-12 reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-brand-light rounded-2xl p-8 border border-brand-blue/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center mt-0.5">
                  <Info className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-brand-navy mb-2">
                    About CAP Rounds
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-500 leading-relaxed">
                    <li>
                      <span className="font-semibold text-slate-600">CAP (Centralized Admission Process)</span>{' '}
                      is conducted by the Directorate of Technical Education (DTE), Maharashtra for
                      admission to professional degree courses.
                    </li>
                    <li>
                      Cut-off marks may vary each year based on the number of applicants, seat
                      availability, and category-wise reservation policies.
                    </li>
                    <li>
                      The cut-off is determined after multiple rounds — CAP Round I, II, III, and
                      subsequent institutional-level rounds.
                    </li>
                    <li>
                      Students are advised to check the official DTE Maharashtra portal for the most
                      up-to-date cut-off information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CutOff;
