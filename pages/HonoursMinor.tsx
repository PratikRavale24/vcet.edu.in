import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Download, FileText, BookOpen, Award, ExternalLink, GraduationCap, CheckCircle } from 'lucide-react';

const booklets = [
  {
    title: 'Honours / Minor Degree Program – Booklet Part 1',
    description: 'Overview, eligibility criteria, program structure, and registration details.',
    url: 'https://vcet.edu.in/honours-minor-degree-program/',
  },
  {
    title: 'Honours / Minor Degree Program – Booklet Part 2',
    description: 'Course offerings, credit requirements, and examination guidelines.',
    url: 'https://vcet.edu.in/honours-minor-degree-program/',
  },
];

const highlights = [
  'Additional specialization alongside regular B.E. degree',
  'Interdisciplinary learning across engineering domains',
  'Enhanced employability and career prospects',
  'Flexible credit-based structure as per NEP 2020',
  'Industry-relevant elective courses',
  'Mentored by experienced faculty members',
];

const HonoursMinor: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Honours / Minor Degree Program"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Honours / Minor Degree Program' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Academic Program
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Earn an Honours or Minor Degree at VCET
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  In alignment with the National Education Policy (NEP) 2020 and Mumbai University
                  guidelines, VCET offers Honours and Minor Degree Programs that allow students
                  to pursue additional specializations alongside their regular engineering degree.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The Honours Degree enables students to gain deeper expertise in their own
                  branch, while the Minor Degree allows exploration of a different discipline,
                  fostering interdisciplinary learning and broadening career opportunities.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">honours-minor-booklet.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Program Highlights
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Key benefits of pursuing Honours or Minor Degree at VCET
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all duration-300"
                  style={{ transitionDelay: `${idx * 0.06}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Booklets */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="reveal text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                  Downloads
                </span>
                <div className="w-10 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Program Booklets
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                Download the detailed booklets to learn more about the program structure and offerings
              </p>
            </div>

            <div className="space-y-5">
              {booklets.map((booklet, idx) => (
                <a
                  key={idx}
                  href={booklet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group block"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-5 p-6 bg-brand-light rounded-2xl border border-gray-100 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-500">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                        {booklet.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{booklet.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-brand-blue/50 group-hover:text-brand-gold transition-colors duration-300 flex-shrink-0">
                      <Download className="w-5 h-5" />
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HonoursMinor;
