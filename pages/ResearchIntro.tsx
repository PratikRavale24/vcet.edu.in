import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { FlaskConical, BookOpen, FileText, Award, TrendingUp, Lightbulb } from 'lucide-react';

const stats = [
  { icon: BookOpen, label: 'Published Papers', value: '400+' },
  { icon: FlaskConical, label: 'Funded Projects', value: '30+' },
  { icon: FileText, label: 'Patents Filed', value: '50+' },
  { icon: Award, label: 'Ph.D. Guides', value: '25+' },
];

const focusAreas = [
  {
    icon: FlaskConical,
    title: 'Funded Research Projects',
    description:
      'Faculty members actively pursue research grants from agencies such as AICTE, DST, CSIR, and UGC to drive impactful projects.',
  },
  {
    icon: BookOpen,
    title: 'Publications & Journals',
    description:
      'Research publications in reputed national and international journals including Scopus-indexed, SCI, and UGC-approved journals.',
  },
  {
    icon: FileText,
    title: 'Patents & IPR',
    description:
      'A growing portfolio of patents filed and granted across departments, reflecting the innovative spirit of VCET researchers.',
  },
  {
    icon: TrendingUp,
    title: 'Consultancy Services',
    description:
      'Faculty expertise extended to industry through consultancy projects, testing services, and collaborative research initiatives.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Startups',
    description:
      'The Institution\'s Innovation Council (IIC) and entrepreneurship cell nurture innovative ideas and support student-led startups.',
  },
  {
    icon: Award,
    title: 'Research Conventions',
    description:
      'Annual research conventions and conferences provide a platform for knowledge exchange and interdisciplinary collaboration.',
  },
];

const ResearchIntro: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research – Introduction"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Introduction' },
        ]}
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Research at VCET
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Fostering a Culture of Research & Innovation
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET is committed to creating a vibrant research ecosystem that encourages faculty
                  and students to explore, innovate, and contribute to the advancement of knowledge.
                  The institution supports research through infrastructure, funding, mentoring, and
                  collaborative partnerships.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our research activities span multiple disciplines with a focus on funded projects,
                  high-quality publications in indexed journals, patent filings, and consultancy
                  services to industry. Faculty members serve as recognized Ph.D. guides under
                  Mumbai University.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FlaskConical className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">research-intro.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 bg-gradient-to-r from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="reveal text-center"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="reveal text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Research Focus Areas
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Key domains driving research and innovation across VCET
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, idx) => (
                <div
                  key={area.title}
                  className="reveal bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchIntro;
