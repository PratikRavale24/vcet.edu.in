import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Code, Rocket, Trophy, Users, Clock, Lightbulb, Target, Zap } from 'lucide-react';

const stats = [
  { icon: Code, value: '10+', label: 'Hackathons / Year' },
  { icon: Users, value: '500+', label: 'Participants' },
  { icon: Trophy, value: '25+', label: 'Awards Won' },
  { icon: Rocket, value: 'SIH', label: 'Finalists' },
];

const hackathons = [
  {
    icon: Target,
    title: 'Smart India Hackathon (SIH)',
    description: 'VCET students consistently participate and excel at the nation\'s biggest hackathon, developing solutions for government and industry problem statements.',
  },
  {
    icon: Code,
    title: 'Internal Hackathons',
    description: 'College-level hackathons organized to prepare students for national events, building problem-solving skills and rapid prototyping capabilities.',
  },
  {
    icon: Rocket,
    title: 'Industry-Sponsored Hackathons',
    description: 'Partnerships with tech companies to host hackathons with real-world problem statements, mentoring, and industry-relevant prizes.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Challenges',
    description: 'Themed innovation challenges focusing on social impact, sustainability, healthcare, and smart city solutions using cutting-edge technologies.',
  },
  {
    icon: Clock,
    title: '24/36-Hour Coding Sprints',
    description: 'Intense coding marathons where teams work non-stop to build functional prototypes, fostering teamwork, creativity, and resilience.',
  },
  {
    icon: Zap,
    title: 'Inter-College Hackathons',
    description: 'VCET teams participate in hackathons organized by other premier institutions, consistently bringing home awards and recognition.',
  },
];

const achievements = [
  {
    title: 'SIH Grand Finale Winners',
    description: 'Multiple VCET teams have reached the Smart India Hackathon grand finale and won prizes for their innovative solutions to real-world challenges.',
    year: '2025',
  },
  {
    title: 'Best Innovation Award',
    description: 'VCET\'s hackathon team won the Best Innovation Award at a national-level hackathon for their AI-powered healthcare solution.',
    year: '2024',
  },
  {
    title: 'Corporate Hackathon Champions',
    description: 'A team of VCET students won the top prize at a tech company-sponsored hackathon, competing against participants from across India.',
    year: '2024',
  },
];

const Hackathon: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Hackathon"
        breadcrumbs={[
          { label: 'Hackathon' },
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
                    hackathon.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Code. Create. Conquer.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Hackathons at VCET
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Hackathons are at the core of the innovation culture at VCET. From the prestigious
                  Smart India Hackathon (SIH) to internal coding sprints and industry-sponsored
                  challenges, VCET students leverage hackathons to solve real-world problems, build
                  rapid prototypes, and showcase their technical prowess.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  With dedicated mentoring from faculty and industry experts, VCET's hackathon teams
                  have consistently made their mark at national and international competitions,
                  winning accolades and transforming ideas into impactful solutions.
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

      {/* Hackathon Types */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Hackathon Activities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From campus to national stage – building solutions that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hackathons.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Achievements
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our hackathon warriors' proudest moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="text-xs font-bold text-brand-gold/60 uppercase tracking-widest mb-3">
                  {item.year}
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

export default Hackathon;
