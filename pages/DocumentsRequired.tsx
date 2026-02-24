import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { FileText, Download, ExternalLink, ClipboardList } from 'lucide-react';

const documents = [
  {
    title: 'FE Admission Documents Required',
    description: 'List of documents and fee structure for First Year Engineering admission under CAP.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/FIRST-YEAR-ENGINEERING-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
    tag: 'UG - First Year',
  },
  {
    title: 'DSE Admission Documents Required',
    description: 'Required documents and fee structure for Direct Second Year Engineering admission.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/DIRECT-SECOND-YEAR-ENGINEERING-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
    tag: 'UG - Direct SE',
  },
  {
    title: 'M.E. Admission Documents Required',
    description: 'Documents and fee structure for First Year M.E. admission under CAP.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/FIRST-YEAR-M.-E.-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
    tag: 'PG - M.E.',
  },
  {
    title: 'MMS Admission Documents Required',
    description: 'Documents and fee structure for First Year M.M.S admission under CAP.',
    link: 'https://vcet.edu.in/wp-content/uploads/2025/08/FIRST-YEAR-M.M.S-ADMISSION-2025-2026-CAP-DOCUMENTS-FEE-STRUCTURE.pdf',
    tag: 'Management - MMS',
  },
];

const DocumentsRequired: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Documents Required"
        breadcrumbs={[
          { label: 'Admission', href: '/admission' },
          { label: 'Documents Required' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-5">
              <ClipboardList className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Documents Required for Admission
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Download the complete list of documents required for admission to various programs.
              Please ensure all documents are ready before reporting for the admission process.
            </p>
          </div>

          {/* Document Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                {/* Tag bar */}
                <div className="bg-gradient-to-r from-brand-blue to-brand-navy px-6 py-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/90">
                    {doc.tag}
                  </span>
                </div>

                <div className="p-6 flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <FileText className="w-7 h-7 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors duration-300 mb-1.5">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-3">
                      {doc.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold group-hover:text-brand-blue transition-colors duration-300">
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Info Note */}
          <div className="max-w-3xl mx-auto mt-14 reveal" style={{ transitionDelay: '0.5s' }}>
            <div className="bg-brand-light rounded-xl p-6 border border-brand-blue/10 text-center">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-brand-navy">Important:</span> Original
                documents along with two sets of photocopies must be submitted at the time of
                admission. Incomplete documentation may result in delay of the admission process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DocumentsRequired;
