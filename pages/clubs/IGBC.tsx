import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Leaf, Building2, Sun, Recycle, Users, Award, Presentation, Droplets } from 'lucide-react';

const stats = [
  { icon: Users, value: '80+', label: 'Student Members' },
  { icon: Leaf, value: '10+', label: 'Green Events' },
  { icon: Award, value: 'IGBC', label: 'Certified Chapter' },
  { icon: Sun, value: '5+', label: 'Sustainability Drives' },
];

const activities = [
  {
    icon: Building2,
    title: 'Green Building Awareness',
    description: 'Workshops and seminars educating students about green building concepts, LEED ratings, energy-efficient design, and sustainable construction practices.',
  },
  {
    icon: Leaf,
    title: 'Environmental Campaigns',
    description: 'Campus-wide campaigns promoting waste reduction, water conservation, energy saving, and eco-friendly practices among students and staff.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy Initiatives',
    description: 'Activities highlighting solar energy, wind power, and other renewable energy sources, including visits to renewable energy installations.',
  },
  {
    icon: Recycle,
    title: 'Waste Management Programs',
    description: 'Programs on waste segregation, recycling, composting, and reducing single-use plastics on campus and in surrounding communities.',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Rainwater harvesting awareness, water audit workshops, and campaigns to promote responsible water usage across the campus.',
  },
  {
    icon: Presentation,
    title: 'Green Building Competitions',
    description: 'Participation in IGBC-organized competitions on sustainable building design, net-zero energy concepts, and green campus planning.',
  },
];

const objectives = [
  {
    title: 'Sustainable Campus',
    description: 'Working towards making the VCET campus a model of sustainability with green practices, energy-efficient systems, and eco-conscious infrastructure.',
  },
  {
    title: 'Student Awareness',
    description: 'Educating the next generation of engineers about their responsibility towards the environment and sustainable development in their future careers.',
  },
  {
    title: 'Industry Connect',
    description: 'Connecting students with green building professionals, IGBC-certified practitioners, and organizations working towards a sustainable built environment.',
  },
];

const IGBC: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="IGBC"
        breadcrumbs={[
          { label: 'IGBC' },
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
                    igbc.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Build Green. Live Green.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Indian Green Building Council
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Indian Green Building Council (IGBC) Student Chapter at VCET is dedicated to
                  promoting sustainable and environment-friendly building practices among engineering
                  students. The chapter creates awareness about green building concepts, energy
                  efficiency, and the environmental responsibility of future engineers.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Through awareness campaigns, workshops, competitions, and sustainability drives,
                  IGBC VCET inspires students to integrate green practices into their engineering
                  careers and contribute to a sustainable future for the built environment.
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
              Our Activities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Championing sustainability through education and action.
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

      {/* Objectives */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Our Objectives
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Driving sustainability in engineering education and practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-5 h-5 text-brand-gold" />
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

export default IGBC;
