import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Music, Palette, Drama, Sparkles, PartyPopper, Mic2, Camera, Star } from 'lucide-react';

const stats = [
  { icon: PartyPopper, value: 'Annual', label: 'Cultural Fest' },
  { icon: Star, value: '20+', label: 'Events / Year' },
  { icon: Music, value: '500+', label: 'Participants' },
  { icon: Camera, value: '10+', label: 'Competitions' },
];

const activities = [
  {
    icon: Music,
    title: 'Music & Band',
    description: 'From classical ragas to contemporary beats, the music wing nurtures budding musicians through regular practice sessions and performances.',
  },
  {
    icon: Drama,
    title: 'Drama & Theatre',
    description: 'Street plays, skits, and theatrical performances that address social issues and showcase the creative talents of students.',
  },
  {
    icon: Palette,
    title: 'Art & Craft',
    description: 'Painting competitions, rangoli making, poster design, and various craft activities that bring out the artistic side of students.',
  },
  {
    icon: Mic2,
    title: 'Dance Performances',
    description: 'Classical, folk, and contemporary dance performances during college festivals, inter-college competitions, and cultural events.',
  },
  {
    icon: Sparkles,
    title: 'Annual Fest',
    description: 'The grand annual cultural festival showcasing a vibrant mix of performances, competitions, workshops, and celebrity appearances.',
  },
  {
    icon: Camera,
    title: 'Photography & Film',
    description: 'Short film making, photography contests, and video production activities that capture and celebrate campus life.',
  },
];

const events = [
  {
    title: 'Annual Cultural Festival',
    description: 'A multi-day extravaganza featuring performances, competitions, workshops, and celebrity appearances that unite the entire college.',
  },
  {
    title: 'Inter-College Competitions',
    description: 'VCET students regularly participate and win accolades in cultural events organized by other colleges and universities.',
  },
  {
    title: 'Traditional Day Celebrations',
    description: 'Celebrating the rich cultural diversity of India through traditional attire, food, and performances on special occasions.',
  },
];

const CulturalCommittee: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Cultural Committee"
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: 'Cultural Committee' },
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
                    cultural-committee.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Celebrate. Create. Inspire.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Cultural Committee
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Cultural Committee at VCET is the vibrant heart of the campus, dedicated to
                  nurturing the artistic and creative talents of students. From mesmerizing dance
                  performances to soul-stirring music, from thought-provoking theatre to stunning
                  visual art, the committee provides a platform for every form of creative expression.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Throughout the year, the committee organizes a wide range of cultural events,
                  competitions, and workshops that bring the entire college community together and
                  foster a spirit of unity in diversity.
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
              A kaleidoscope of artistic and creative pursuits.
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

      {/* Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Flagship Events
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Events that bring the campus alive with creativity and enthusiasm.
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
                  <Sparkles className="w-5 h-5 text-brand-gold" />
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

export default CulturalCommittee;
