import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Wrench, Cog, Factory, Users, Award, Presentation, Lightbulb, Rocket } from 'lucide-react';

const stats = [
  { icon: Users, value: '100+', label: 'Active Members' },
  { icon: Award, value: '12+', label: 'Events / Year' },
  { icon: Presentation, value: '8+', label: 'Workshops' },
  { icon: Factory, value: '6+', label: 'Industry Visits' },
];

const activities = [
  {
    icon: Wrench,
    title: 'Technical Workshops',
    description: 'Practical workshops on CAD/CAM, 3D printing, CNC machining, welding, and advanced manufacturing techniques for skills development.',
  },
  {
    icon: Cog,
    title: 'Design Competitions',
    description: 'Engineering design challenges that push students to innovate and apply mechanical engineering principles to solve real-world problems.',
  },
  {
    icon: Factory,
    title: 'Industry Visits',
    description: 'Organized visits to manufacturing plants, automobile companies, and engineering firms to understand industry-grade practices firsthand.',
  },
  {
    icon: Presentation,
    title: 'Seminars & Guest Lectures',
    description: 'Expert talks by leading mechanical engineers and industry professionals on emerging trends, career guidance, and research opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Project Exhibitions',
    description: 'Showcasing innovative mechanical engineering projects including prototypes, working models, and research demonstrations.',
  },
  {
    icon: Rocket,
    title: 'National Competitions',
    description: 'Participation in SAE, BAJA, Go-Kart, and other national-level mechanical engineering competitions representing VCET.',
  },
];

const highlights = [
  {
    title: 'SAE BAJA Competition',
    description: 'VCET\u2019s VMEA team designed and fabricated an all-terrain vehicle that competed at the national-level SAE BAJA event.',
  },
  {
    title: 'Best Project Award',
    description: 'Multiple VMEA members received the best project award at university-level project competitions for innovative mechanical designs.',
  },
  {
    title: 'Industry MoU Signings',
    description: 'Facilitated memoranda of understanding with leading manufacturing companies for internships, training, and collaborative research.',
  },
];

const VMEA: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="VMEA"
        breadcrumbs={[
          { label: 'VMEA' },
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
                    vmea.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Design. Build. Innovate.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Vidyavardhini Mechanical Engineering Association
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Vidyavardhini Mechanical Engineering Association (VMEA) is the departmental
                  student body of the Mechanical Engineering department at VCET. It serves as a vibrant
                  platform for mechanical engineering students to explore beyond the syllabus, engage
                  in hands-on activities, and develop industry-relevant skills.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through workshops, design competitions, industry visits, and national-level
                  competitions, VMEA fosters innovation, teamwork, and practical engineering expertise
                  among its members.
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
              Building the engineers of tomorrow through practical engagement.
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
              Milestones that reflect our mechanical engineering excellence.
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
                  <Wrench className="w-5 h-5 text-brand-gold" />
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

export default VMEA;
