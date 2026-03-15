import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Trophy, Dumbbell, Medal, Flag, Target, Heart, Timer, Users } from 'lucide-react';

const stats = [
  { icon: Target, value: '5+', label: 'Sports Courts' },
  { icon: Trophy, value: 'Annual', label: 'Sports Fest' },
  { icon: Users, value: '500+', label: 'Participants' },
  { icon: Medal, value: '50+', label: 'Awards Won' },
];

const facilities = [
  {
    icon: Flag,
    title: 'Cricket Ground',
    description:
      'A well-maintained cricket ground with practice nets for students to train and participate in inter-college tournaments.',
  },
  {
    icon: Target,
    title: 'Basketball Court',
    description:
      'A full-size outdoor basketball court with professional markings and lighting for evening practice sessions.',
  },
  {
    icon: Trophy,
    title: 'Volleyball Court',
    description:
      'A standard volleyball court with quality nets and well-maintained playing surface for regular practice and matches.',
  },
  {
    icon: Dumbbell,
    title: 'Gymnasium',
    description:
      'A fully equipped gymnasium with modern fitness equipment including treadmills, weights, and cardio machines for students and staff.',
  },
  {
    icon: Medal,
    title: 'Indoor Games',
    description:
      'Indoor facilities for table tennis, chess, carrom, and badminton, encouraging recreational activities and team building.',
  },
  {
    icon: Timer,
    title: 'Athletics Track',
    description:
      'A track facility for running, sprinting, and relay events, supporting preparation for university and inter-college athletics meets.',
  },
];

const events = [
  {
    title: 'Annual Sports Fest',
    description:
      'A grand annual event featuring track and field, team sports, and individual competitions, fostering sportsmanship and camaraderie.',
  },
  {
    title: 'Inter-College Tournaments',
    description:
      'Regular participation in university-level and inter-college tournaments in cricket, football, volleyball, basketball, and more.',
  },
  {
    title: 'Yoga & Fitness Drives',
    description:
      'Special sessions on yoga, fitness awareness, and wellness drives organized to promote a healthy lifestyle among students.',
  },
];

const SportsGymkhana: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Sports & Gymkhana"
        breadcrumbs={[
          { label: 'Sports & Gymkhana' },
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
                    sports-gymkhana.jpg
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Play. Compete. Excel.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Sports & Gymkhana
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  VCET believes in the holistic development of its students. Our sports and
                  gymkhana facilities encourage physical fitness, team spirit, and healthy
                  competition alongside academic excellence.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  From a sprawling cricket ground and basketball courts to a fully equipped
                  gymnasium and indoor games room, VCET provides ample opportunities for students
                  to pursue their sporting passions and represent the college at various levels.
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

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Our Sports Facilities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Top-notch infrastructure to train, compete, and grow as athletes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <facility.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Events & Competitions
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Annual events that bring out the champion in every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SportsGymkhana;
