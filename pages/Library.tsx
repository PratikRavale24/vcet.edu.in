import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { BookOpen, Library as LibraryIcon, Globe, Newspaper, Archive, Search, Bookmark, MonitorSmartphone } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '25,000+', label: 'Books' },
  { icon: Newspaper, value: '50+', label: 'Journals' },
  { icon: Globe, value: 'DELNET', label: 'Digital Access' },
  { icon: MonitorSmartphone, value: 'NPTEL', label: 'E-Resources' },
];

const features = [
  {
    icon: BookOpen,
    title: 'Extensive Book Collection',
    description:
      'Over 25,000 books covering all engineering disciplines, sciences, humanities, and competitive exam preparation materials.',
  },
  {
    icon: Search,
    title: 'Digital Library',
    description:
      'A well-equipped digital library with access to e-books, e-journals, and online databases for research and academic enrichment.',
  },
  {
    icon: Newspaper,
    title: 'Journals & Periodicals',
    description:
      'Subscription to 50+ national and international journals, magazines, and periodicals across various technical and non-technical domains.',
  },
  {
    icon: Globe,
    title: 'DELNET Membership',
    description:
      'Membership of DELNET (Developing Library Network) provides access to a vast network of libraries and shared resources across India.',
  },
  {
    icon: MonitorSmartphone,
    title: 'NPTEL Video Courses',
    description:
      'Access to NPTEL video lectures and course materials from IITs and IISc for supplementary learning and skill enhancement.',
  },
  {
    icon: Archive,
    title: 'Reading Room',
    description:
      'A spacious and well-lit reading room with comfortable seating, providing a conducive environment for focused study and research.',
  },
  {
    icon: Bookmark,
    title: 'Book Bank Facility',
    description:
      'A dedicated book bank ensures that economically weaker students receive textbooks on a semester basis at no cost.',
  },
  {
    icon: Search,
    title: 'OPAC System',
    description:
      'Online Public Access Catalog (OPAC) allows students to search and locate library resources quickly and efficiently.',
  },
];

const Library: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Library"
        breadcrumbs={[
          { label: 'Facilities', href: '/facilities' },
          { label: 'Library' },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Knowledge Hub
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  College Library
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The VCET Library is the intellectual heart of the institution, offering an
                  extensive collection of books, journals, and digital resources. It provides a
                  quiet, well-organized space for students and faculty to engage in academic study,
                  research, and self-development.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  With memberships to DELNET and access to NPTEL resources, the library bridges
                  the gap between traditional and digital learning, empowering students with
                  knowledge at their fingertips.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    library.jpg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="reveal text-center p-6"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Library Resources & Services
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Explore the wide range of resources and services our library offers to support your
              academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-brand-light rounded-xl p-6 border border-brand-blue/10 text-center">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-brand-navy">Library Hours:</span> The library
                is open Monday to Saturday, 8:00 AM to 6:00 PM. For queries regarding book
                issuance or digital resource access, contact the librarian.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Library;
