import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Radio, Wifi, Cpu, Signal, Users, Award, Presentation, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Users, value: '100+', label: 'Student Members' },
  { icon: Award, value: '15+', label: 'Events / Year' },
  { icon: Presentation, value: '8+', label: 'Workshops' },
  { icon: Signal, value: '10+', label: 'Industry Visits' },
];

const activities = [
  {
    icon: Radio,
    title: 'Electronics Workshops',
    description: 'Hands-on workshops on circuit design, PCB fabrication, embedded systems, and modern electronics to build practical engineering skills.',
  },
  {
    icon: Wifi,
    title: 'Telecommunication Seminars',
    description: 'Expert seminars covering 5G technology, wireless communication, optical networks, and emerging trends in telecommunication.',
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded Systems',
    description: 'Projects and workshops on Internet of Things, Arduino, Raspberry Pi, and embedded system design for real-world applications.',
  },
  {
    icon: Presentation,
    title: 'Technical Paper Presentations',
    description: 'Encouraging students to research, write, and present technical papers at IETE conventions and regional conferences.',
  },
  {
    icon: Lightbulb,
    title: 'Project Competitions',
    description: 'Organizing project exhibitions and competitions that challenge students to build innovative electronic systems and prototypes.',
  },
  {
    icon: Signal,
    title: 'Industry Visits',
    description: 'Visits to leading electronics and telecom companies, providing students with exposure to industry practices and cutting-edge technologies.',
  },
];

const highlights = [
  {
    title: 'IETE Best Student Forum',
    description: 'VCET IETE student forum has been recognized for its consistent and impactful technical activities at regional IETE conventions.',
  },
  {
    title: 'National-Level Project Competition',
    description: 'Students represented VCET at national-level IETE project competitions, winning accolades for their innovative electronic designs.',
  },
  {
    title: 'Industry Partnership Programs',
    description: 'Collaborations with leading electronics companies for internships, guest lectures, and collaborative research projects.',
  },
];

const IETE: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="IETE"
        breadcrumbs={[
          { label: 'IETE' },
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
                    iete.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Connect. Innovate. Excel.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  IETE Student Chapter
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Institution of Electronics and Telecommunication Engineers (IETE) Student Chapter
                  at VCET provides a platform for students passionate about electronics, telecommunications,
                  and related fields. It bridges the gap between academic learning and industry practices
                  through a variety of technical activities.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  From electronics workshops and IoT projects to industry visits and technical paper
                  presentations, IETE VCET equips students with practical knowledge and professional
                  exposure essential for a successful career in the electronics and telecom industry.
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
              Exploring the world of electronics and telecommunications.
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
              Achievements that showcase our technical prowess.
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
                  <Radio className="w-5 h-5 text-brand-gold" />
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

export default IETE;
