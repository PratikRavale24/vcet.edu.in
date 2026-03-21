import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Monitor, Code, Trophy, Users, Presentation, Lightbulb, BookOpen, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '120+', label: 'Student Members' },
  { icon: Trophy, value: '15+', label: 'Competitions' },
  { icon: Presentation, value: '10+', label: 'Workshops / Year' },
  { icon: Code, value: '5+', label: 'Hackathons' },
];

const activities = [
  {
    icon: Code,
    title: 'Coding Competitions',
    description: 'Regular coding contests and competitive programming challenges to sharpen problem-solving skills and algorithmic thinking.',
  },
  {
    icon: Presentation,
    title: 'Technical Workshops',
    description: 'Workshops on web development, mobile app development, data science, cybersecurity, and other trending technologies.',
  },
  {
    icon: Monitor,
    title: 'Software Exhibitions',
    description: 'Showcasing innovative software projects developed by students, promoting practical application of theoretical knowledge.',
  },
  {
    icon: Lightbulb,
    title: 'Tech Talks & Seminars',
    description: 'Industry experts and academicians share insights on latest trends, career guidance, and emerging computing technologies.',
  },
  {
    icon: BookOpen,
    title: 'CSI Conventions',
    description: 'Participation in regional and national CSI conventions, providing exposure to latest computing research and industry practices.',
  },
  {
    icon: Zap,
    title: 'Mini Projects & Mentoring',
    description: 'Peer-to-peer mentoring programs where senior members guide juniors in building real-world mini projects and learning new tools.',
  },
];

const highlights = [
  {
    title: 'Best CSI Student Chapter',
    description: 'Recognized among the top CSI student chapters in the Mumbai region for exceptional technical activities and membership growth.',
  },
  {
    title: 'National Coding Championship',
    description: 'CSI VCET members secured top positions in national-level coding championships, showcasing exceptional programming talent.',
  },
  {
    title: 'Industry-Sponsored Hackathon',
    description: 'Successfully organized an industry-sponsored 24-hour hackathon with participation from multiple colleges and mentorship from tech leaders.',
  },
];

const CSI: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="CSI"
        breadcrumbs={[
          { label: 'CSI' },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    csi.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Computing for Society
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Computer Society of India
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Computer Society of India (CSI) Student Chapter at VCET is a vibrant community
                  of tech enthusiasts dedicated to promoting computing education and professional
                  development. As part of India's premier IT professional body, CSI VCET provides
                  students with a gateway to the world of computing innovation.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through coding competitions, workshops, tech talks, and hackathons, the chapter
                  empowers students to stay ahead of the technology curve and build strong foundations
                  for successful careers in the IT industry.
                </p>
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

      {/* Activities */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Activities & Events
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Building a community of tech-driven problem solvers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <activity.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Highlights
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Achievements that reflect our passion for computing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CSI;
