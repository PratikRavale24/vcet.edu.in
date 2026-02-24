import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Globe, Handshake, MapPin, Languages, Flag, Landmark, Users, Sparkles } from 'lucide-react';

const stats = [
  { icon: Globe, value: '5+', label: 'States Partnered' },
  { icon: Users, value: '200+', label: 'Participants' },
  { icon: Handshake, value: '10+', label: 'Cultural Exchanges' },
  { icon: Flag, value: 'Annual', label: 'EBSB Week' },
];

const activities = [
  {
    icon: Languages,
    title: 'Language Exchange',
    description: 'Students learn phrases and conversational basics of partner state languages, promoting linguistic diversity and cross-cultural communication.',
  },
  {
    icon: Landmark,
    title: 'Cultural Showcases',
    description: 'Showcasing art, cuisine, traditional attire, and folk performances of different Indian states to appreciate the rich diversity of India.',
  },
  {
    icon: Handshake,
    title: 'State Pairing Activities',
    description: 'Collaborative activities with the paired state including virtual meetings, cultural presentations, and student exchange programs.',
  },
  {
    icon: MapPin,
    title: 'Heritage Awareness',
    description: 'Events highlighting the historical landmarks, monuments, and cultural heritage of different states across India.',
  },
  {
    icon: Globe,
    title: 'National Integration Meets',
    description: 'Participation in national-level EBSB events, quiz competitions, and essay writing contests focused on national unity.',
  },
  {
    icon: Sparkles,
    title: 'Festival Celebrations',
    description: 'Celebrating festivals of the partner state within the campus to build understanding and respect for diverse traditions.',
  },
];

const objectives = [
  {
    title: 'Promote National Unity',
    description: 'Fostering a sense of national integration by creating cultural connections between students from different states and regions.',
  },
  {
    title: 'Celebrate Diversity',
    description: 'Appreciating the unique traditions, languages, arts, and cuisines of all Indian states through interactive events and exchanges.',
  },
  {
    title: 'Build Lasting Bonds',
    description: 'Creating enduring relationships between institutions, students, and communities across state boundaries for a united India.',
  },
];

const EBSB: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="EBSB"
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: 'EBSB' },
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
                    ebsb.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Unity in Diversity
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Ek Bharat Shreshtha Bharat
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Ek Bharat Shreshtha Bharat (EBSB) programme at VCET aims to promote the spirit
                  of national integration by celebrating the rich cultural diversity of India. Through
                  cultural exchanges, language learning, and inter-state collaborations, VCET fosters
                  mutual understanding and respect among students from different parts of the country.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Under this initiative, VCET is paired with institutions from other states, enabling
                  students to learn about different cultures, traditions, and languages, thus
                  strengthening the fabric of national unity.
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
              Key Activities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Bridging cultures, building connections across India.
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
              Building a stronger, united India through education and culture.
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
                  <Globe className="w-5 h-5 text-brand-gold" />
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

export default EBSB;
