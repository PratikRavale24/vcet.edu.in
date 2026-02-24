import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Rocket, Lightbulb, Users, Award, Target, TrendingUp, Briefcase, Star } from 'lucide-react';

const activities = [
  {
    icon: Rocket,
    title: 'Startup Incubation',
    description: 'Supporting student startups from ideation to execution with mentorship, resources, and networking opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Business Plan Competitions',
    description: 'Organizing inter-college and intra-college business plan competitions to foster entrepreneurial thinking.',
  },
  {
    icon: Users,
    title: 'Mentorship Programs',
    description: 'Connecting aspiring entrepreneurs with experienced mentors from industry and successful startup founders.',
  },
  {
    icon: TrendingUp,
    title: 'Entrepreneurship Workshops',
    description: 'Conducting workshops on business model canvas, financial planning, marketing strategies, and product development.',
  },
  {
    icon: Briefcase,
    title: 'Industry Connect',
    description: 'Facilitating meetings with investors, venture capitalists, and industry leaders for potential collaboration and funding.',
  },
  {
    icon: Star,
    title: 'Innovation Challenges',
    description: 'Hosting innovation challenges and hackathons focused on solving real-world problems through entrepreneurial solutions.',
  },
];

const stats = [
  { icon: Rocket, value: '15+', label: 'Student Startups' },
  { icon: Users, value: '200+', label: 'E-Cell Members' },
  { icon: Award, value: '10+', label: 'B-Plan Competitions' },
  { icon: Target, value: '30+', label: 'Workshops Conducted' },
];

const initiatives = [
  'Annual Entrepreneurship Summit with keynote speakers from the startup ecosystem',
  'Startup Saturday sessions with pitch practice and peer feedback',
  'Collaboration with IIC (Institution Innovation Council) for innovation activities',
  'Support for patent filing and intellectual property rights awareness',
  'Tie-ups with incubation centers and startup accelerators',
  'E-Cell newsletter and social media presence for knowledge sharing',
  'Alumni entrepreneur network for mentoring and angel investment',
  'Participation in national-level entrepreneurship events and competitions',
];

const ECell: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="E-Cell"
        breadcrumbs={[
          { label: 'Training & Placement', href: '#' },
          { label: 'E-Cell' },
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
                    e-cell.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Entrepreneurship
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Entrepreneurship Cell
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Entrepreneurship Cell (E-Cell) at VCET is a student-driven initiative that
                  fosters the spirit of entrepreneurship and innovation among students. E-Cell
                  provides a platform for aspiring entrepreneurs to explore, experiment, and
                  launch their business ideas.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through mentorship programs, business plan competitions, startup incubation
                  support, and networking events, E-Cell empowers students to think beyond
                  traditional career paths and create value through entrepreneurial ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="reveal text-center"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Activities</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                E-Cell Activities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activities.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${Math.min(idx * 0.05, 0.4)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-brand-blue/60 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-navy mb-2 font-display">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14 reveal">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">Initiatives</span>
                <div className="w-8 h-0.5 bg-brand-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
                Key Initiatives
              </h2>
            </div>

            <div className="space-y-3">
              {initiatives.map((initiative, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-4 bg-brand-light rounded-xl p-4 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{initiative}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ECell;
