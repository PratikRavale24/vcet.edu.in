import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Monitor, Wifi, Server, Globe, Shield, Cpu, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Monitor, value: '500+', label: 'Computers' },
  { icon: Wifi, value: 'High-Speed', label: 'Wi-Fi Campus' },
  { icon: Clock, value: '24/7', label: 'Internet Access' },
  { icon: Users, value: '1000+', label: 'Daily Users' },
];

const features = [
  {
    icon: Monitor,
    title: 'Modern Computer Labs',
    description:
      'State-of-the-art computer labs equipped with the latest hardware and high-performance workstations for students and faculty.',
  },
  {
    icon: Globe,
    title: 'High-Speed Internet',
    description:
      'Dedicated high-speed internet connectivity with fiber optic backbone ensuring seamless browsing, research, and online learning.',
  },
  {
    icon: Server,
    title: 'Networking Infrastructure',
    description:
      'Robust LAN/WAN infrastructure with managed switches, routers, and structured cabling connecting all departments and labs.',
  },
  {
    icon: Shield,
    title: 'Licensed Software',
    description:
      'Access to licensed and open-source software including MATLAB, AutoCAD, Microsoft Office, Visual Studio, and more.',
  },
  {
    icon: Cpu,
    title: 'Dedicated Servers',
    description:
      'In-house servers for hosting applications, ERP systems, and providing cloud-based services to students and staff.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Enabled Campus',
    description:
      'Complete Wi-Fi coverage across the campus enabling students to access resources from classrooms, library, and common areas.',
  },
];

const CentralComputing: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Central Computing Facility"
        breadcrumbs={[
          { label: 'Facilities', href: '/facilities' },
          { label: 'Central Computing Facility' },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="reveal">
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    central-computing-facility.jpg
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Computing Excellence
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Central Computing Facility
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Central Computing Facility at VCET is a hub of technological resources,
                  providing students with access to cutting-edge computing infrastructure. Equipped
                  with over 500 modern computers, high-speed internet, and a wide range of licensed
                  software, the facility supports academic coursework, research projects, and
                  skill-development activities.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  The facility features robust networking infrastructure, dedicated servers, and
                  campus-wide Wi-Fi connectivity, ensuring that students and faculty have
                  uninterrupted access to digital resources for teaching, learning, and innovation.
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

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Facility Features
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our computing facility is designed to meet the evolving demands of modern education
              and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                <span className="font-semibold text-brand-navy">Need Access?</span> Students can
                access the Central Computing Facility during college hours. Contact the IT
                Department for additional support or lab bookings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CentralComputing;
