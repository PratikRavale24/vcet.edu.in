import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Cpu, Lightbulb, Presentation, BookOpen, Code, Users, Award, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '150+', label: 'Student Members' },
  { icon: Award, value: '20+', label: 'Events / Year' },
  { icon: Presentation, value: '10+', label: 'Workshops' },
  { icon: Lightbulb, value: '50+', label: 'Papers Presented' },
];

const activities = [
  {
    icon: Presentation,
    title: 'Technical Workshops',
    description: 'Hands-on workshops on emerging technologies like IoT, AI/ML, blockchain, and cloud computing conducted by industry experts and faculty.',
  },
  {
    icon: BookOpen,
    title: 'Paper Presentations',
    description: 'Regular paper presentation events encouraging students to research, write, and present technical papers at IEEE conferences and symposiums.',
  },
  {
    icon: Code,
    title: 'Coding Competitions',
    description: 'Programming contests and hackathons that challenge students to solve real-world problems using innovative technological solutions.',
  },
  {
    icon: Cpu,
    title: 'Technical Talks',
    description: 'Guest lectures and tech talks by eminent professionals from academia and industry covering cutting-edge research and innovations.',
  },
  {
    icon: Lightbulb,
    title: 'Project Exhibitions',
    description: 'Showcasing innovative student projects and prototypes at college and inter-college exhibitions, promoting entrepreneurial thinking.',
  },
  {
    icon: Zap,
    title: 'IEEE Day Celebrations',
    description: 'Annual IEEE Day celebrations with special events, competitions, and activities highlighting the impact of technology on society.',
  },
];

const highlights = [
  {
    title: 'Best IEEE Student Branch',
    description: 'Recognized as one of the most active IEEE student branches in the Bombay Section for consistent technical activities and student engagement.',
  },
  {
    title: 'National Conference',
    description: 'Successfully organized a national-level IEEE conference with research papers from across the country and distinguished keynote speakers.',
  },
  {
    title: 'Industry Collaborations',
    description: 'Strong ties with industry partners for workshops, internships, and mentorship programs, bridging the gap between academia and industry.',
  },
];

const IEEE: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="IEEE"
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: 'IEEE' },
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
                    ieee.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Advancing Technology
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  IEEE Student Branch
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The IEEE Student Branch at VCET is one of the most active technical bodies on campus.
                  As part of the world's largest technical professional organization, the branch provides
                  students with opportunities to explore emerging technologies, participate in
                  conferences, and publish research papers.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through workshops, tech talks, coding contests, and project exhibitions, IEEE VCET
                  nurtures innovation, technical excellence, and professional development among
                  engineering students.
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
              Empowering students through technology and innovation.
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
              Highlights & Achievements
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Recognition for technical excellence and student engagement.
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
                  <Cpu className="w-5 h-5 text-brand-gold" />
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

export default IEEE;
