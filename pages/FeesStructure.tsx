import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { FileText, Download, ExternalLink } from 'lucide-react';

const feesData = [
  {
    title: 'FE Fee Structure',
    description: 'First Year Engineering fee details for 2025-26.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/Marthi-English-F.E-2025-26-1.pdf',
  },
  {
    title: 'FE Admission Fee Structure & Documents Required',
    description: 'CAP documents and fee structure for First Year Engineering admission.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/09/FIRST-YEAR-ENGINEERING-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
  },
  {
    title: 'Direct SE Fee Structure',
    description: 'Direct Second Year Engineering fee structure and CAP documents.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/DIRECT-SECOND-YEAR-ENGINEERING-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
  },
  {
    title: 'DSE Admission Fee Structure & Documents Required',
    description: 'Direct Second Year Engineering admission fee structure and required documents.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/09/DIRECT-SECOND-YEAR-ENGINEERING-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE-1.pdf',
  },
  {
    title: 'M.E. Fee Structure',
    description: 'Masters of Engineering program fee details.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/FIRST-YEAR-M.-E.-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
  },
  {
    title: 'MMS Fee Structure',
    description: 'Master of Management Studies program fee details.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/FIRST-YEAR-M.M.S-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
  },
];

const FeesStructure: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Fees Structure 25-26"
        breadcrumbs={[
          { label: 'Admission', href: '/admission' },
          { label: 'Fees Structure' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Fee Details for 2025-26
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Download the fee structure documents for various programs offered at VCET.
              Click on any card below to access the respective PDF.
            </p>
          </div>

          {/* Download Cards Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {feesData.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl p-6 flex items-start gap-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center group-hover:from-brand-gold group-hover:to-yellow-600 transition-all duration-500">
                  <FileText className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors duration-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold group-hover:text-brand-blue transition-colors duration-300">
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Note */}
          <div className="max-w-3xl mx-auto mt-12 reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="bg-brand-light rounded-xl p-6 border border-brand-blue/10 text-center">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-brand-navy">Note:</span> Fee structures are
                subject to revision as per directives from the Fee Regulating Authority and
                University of Mumbai. Please contact the admission office for the latest details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FeesStructure;
