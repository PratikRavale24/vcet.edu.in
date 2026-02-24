import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { BookOpen, FileText, Newspaper, Award } from 'lucide-react';

const tabs = [
  { id: 'journals', label: 'Journals', icon: BookOpen },
  { id: 'conferences', label: 'Conferences', icon: Newspaper },
  { id: 'books', label: 'Books & Chapters', icon: FileText },
  { id: 'patents', label: 'Patents', icon: Award },
];

const tabContent: Record<string, { title: string; description: string; highlights: string[] }> = {
  journals: {
    title: 'Journal Publications',
    description:
      'VCET faculty and students have published extensively in reputed national and international peer-reviewed journals, including Scopus-indexed, SCI, Web of Science, and UGC-approved journals.',
    highlights: [
      'Scopus-indexed journal publications',
      'SCI and Web of Science indexed papers',
      'UGC-approved journal articles',
      'IEEE, Springer, and Elsevier publications',
      'Interdisciplinary research papers',
    ],
  },
  conferences: {
    title: 'Conference Publications',
    description:
      'Faculty and students actively participate and present research papers at national and international conferences organized by reputed institutions and professional bodies.',
    highlights: [
      'IEEE and ACM conference proceedings',
      'National level conference presentations',
      'International symposium publications',
      'Workshop and seminar contributions',
      'Best paper awards at conferences',
    ],
  },
  books: {
    title: 'Books & Book Chapters',
    description:
      'Several faculty members have authored textbooks, reference books, and contributed chapters in edited volumes published by reputed publishers.',
    highlights: [
      'Textbooks for engineering courses',
      'Edited book chapters (Springer, CRC Press)',
      'Reference books and monographs',
      'Technical manuals and lab handbooks',
      'E-books and open-access publications',
    ],
  },
  patents: {
    title: 'Patents',
    description:
      'VCET encourages filing of patents and intellectual property rights. Faculty and students have filed numerous patents across various technology domains.',
    highlights: [
      'Indian patent filings and grants',
      'Design and utility patents',
      'Software and algorithm patents',
      'Collaborative industry patents',
      'Student innovation patents',
    ],
  },
};

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('journals');
  const content = tabContent[activeTab];

  return (
    <PageLayout>
      <PageBanner
        title="Publications"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Publications' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">publications.jpg</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Research Output
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Academic Publications
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET takes pride in its growing research output. Our faculty and students
                  contribute to the body of knowledge through high-quality publications in
                  peer-reviewed journals, conference proceedings, and books.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The institution provides support through research incentives, access to
                  digital libraries, journal subscriptions, and funding assistance for conference
                  participation and publication charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Publication Categories
              </h2>
            </div>

            {/* Tab Buttons */}
            <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-brand-blue to-brand-navy text-white shadow-lg'
                      : 'bg-white text-slate-600 border border-gray-200 hover:border-brand-gold/40 hover:text-brand-navy'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="reveal bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                {content.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">{content.description}</p>
              <div className="space-y-3">
                {content.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-brand-light/60 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
