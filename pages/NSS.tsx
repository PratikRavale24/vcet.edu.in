import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Heart, TreePine, Droplets, Users, HandHeart, Tent, Leaf, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '300+', label: 'NSS Volunteers' },
  { icon: Heart, value: '50+', label: 'Blood Drives' },
  { icon: TreePine, value: '1000+', label: 'Trees Planted' },
  { icon: Tent, value: 'Annual', label: 'Village Camp' },
];

const activities = [
  {
    icon: Droplets,
    title: 'Blood Donation Drives',
    description: 'Regular blood donation camps organized in association with local hospitals, saving countless lives and promoting the spirit of selfless service.',
  },
  {
    icon: Tent,
    title: 'Village Camps',
    description: 'Annual residential camps in adopted villages where volunteers engage in community development, health awareness, and infrastructure improvement.',
  },
  {
    icon: Leaf,
    title: 'Environment Awareness',
    description: 'Tree plantation drives, cleanliness campaigns, waste management initiatives, and awareness programs to protect and preserve the environment.',
  },
  {
    icon: HandHeart,
    title: 'Community Service',
    description: 'Volunteering at old age homes, orphanages, and community centers to spread joy and provide support to those in need.',
  },
  {
    icon: Shield,
    title: 'Health & Hygiene Campaigns',
    description: 'Organizing health check-up camps, hygiene awareness drives, and first aid training sessions for students and surrounding communities.',
  },
  {
    icon: Users,
    title: 'National Integration',
    description: 'Participating in national-level NSS events, Republic Day and Independence Day celebrations, promoting unity and patriotism.',
  },
];

const milestones = [
  {
    title: 'Best NSS Unit Award',
    description: 'Recognized as one of the best NSS units at the university level for outstanding community service and volunteer engagement.',
  },
  {
    title: 'Mega Blood Donation Camp',
    description: 'Successfully organized a mega blood donation camp with over 200 units collected, making a significant contribution to the blood bank.',
  },
  {
    title: 'Swachh Bharat Initiative',
    description: 'Active participation in the Swachh Bharat Mission with cleanliness drives across the campus and surrounding areas.',
  },
];

const NSS: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="NSS"
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: 'NSS' },
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
                    nss.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Not Me But You
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  National Service Scheme
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The NSS unit at VCET is dedicated to instilling the values of community service,
                  social responsibility, and selfless contribution in students. With the motto
                  "Not Me But You," the unit engages students in meaningful activities that make a
                  positive impact on society.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  From blood donation drives and village camps to tree plantation and environmental
                  awareness campaigns, NSS volunteers at VCET work tirelessly to serve the
                  community and become responsible citizens.
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
              Serving the community through meaningful and impactful initiatives.
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

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Milestones & Recognition
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Achievements that reflect our commitment to service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-brand-gold" />
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

export default NSS;
