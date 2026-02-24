import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Award, FileText, ExternalLink, BookOpen } from 'lucide-react';

const governmentScholarships = [
  {
    title: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna - EBC',
    link: '#',
  },
  {
    title: 'Post Matric Scholarship to OBC Students - OBC Scholarship',
    link: '#',
  },
  {
    title: 'Tuition Fees and Examination Fees to OBC Students - OBC Freeship',
    link: '#',
  },
  {
    title: 'Scholarship Scheme for State Minority Communities Pursuing Higher Professional Education',
    link: '#',
  },
  {
    title: 'Post Matric Scholarship to SBC Students - SBC Scholarship',
    link: '#',
  },
  {
    title: 'Tuition Fees and Examination Fees to SBC Students - SBC Freeship',
    link: '#',
  },
  {
    title: 'Post Matric Scholarship Scheme - Government of India - ST Scholarship',
    link: '#',
  },
  {
    title: 'Government of India Post-Matric Scholarship for SC Category',
    link: '#',
  },
  {
    title: 'Post-Matric Tuition Fee and Examination Fee SC Category Freeship',
    link: '#',
  },
  {
    title: 'Post Matric Scholarship to VJNT Students VJ-DT-NT Scholarship',
    link: '#',
  },
  {
    title: 'Tuition Fees and Examination Fees to VJNT Students - VJ-DT-NT Freeship',
    link: '#',
  },
  {
    title: 'Vocational Education Fee Reimbursement ST Category Freeship',
    link: '#',
  },
];

const aicteSchemes = [
  { title: 'AICTE Swanath Scheme Document', link: '#' },
  { title: 'Brief Summary Swanath', link: '#' },
  { title: 'AICTE SCHOLARSHIP Schemes 2021-22', link: '#' },
  { title: 'Scholarship/Freeship 2023-24', link: '#' },
];

const Scholarships: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Scholarships"
        breadcrumbs={[
          { label: 'Admission', href: '/admission' },
          { label: 'Scholarships' },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Financial Assistance & Scholarships
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              VCET helps students avail various government and institutional scholarship schemes.
              Explore the available options below and download the relevant documents.
            </p>
          </div>

          {/* Government Scholarships */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="reveal flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy">
                Government Scholarships & Freeships
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {governmentScholarships.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-5 flex items-start gap-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold/30"
                  style={{ transitionDelay: `${0.03 * idx}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <FileText className="w-5 h-5 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-700 group-hover:text-brand-blue transition-colors duration-300 leading-snug">
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* AICTE Schemes */}
          <div className="max-w-5xl mx-auto">
            <div className="reveal flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy">
                AICTE Schemes
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aicteSchemes.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-5 flex items-start gap-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-gold/30"
                  style={{ transitionDelay: `${0.05 * idx}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors duration-300">
                    <FileText className="w-5 h-5 text-brand-gold group-hover:text-brand-blue transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-700 group-hover:text-brand-blue transition-colors duration-300 leading-snug">
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Download PDF
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Help Note */}
          <div className="max-w-3xl mx-auto mt-14 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="bg-brand-light rounded-xl p-6 border border-brand-blue/10 text-center">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-brand-navy">Need help?</span> For scholarship
                guidance and application assistance, please contact the Scholarship Section at the
                college office during working hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Scholarships;
