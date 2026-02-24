import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ShieldCheck, Sofa, Baby, UtensilsCrossed, Lock, Sparkles, HeartPulse, Wifi } from 'lucide-react';

const amenities = [
  {
    icon: Sofa,
    title: 'Comfortable Lounge Area',
    description:
      'A well-furnished lounge with comfortable seating where female students can relax, socialize, and unwind between classes.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description:
      'The room is equipped with secure entry access, ensuring a safe and private environment exclusively for female students.',
  },
  {
    icon: HeartPulse,
    title: 'First Aid & Hygiene',
    description:
      'Basic first aid supplies and personal hygiene products are available for emergencies and daily use.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Pantry & Refreshments',
    description:
      'A small pantry area with drinking water, microwave, and space for students to have their meals comfortably.',
  },
  {
    icon: Baby,
    title: 'Rest Area',
    description:
      'A dedicated rest area with a daybed for students who may feel unwell during college hours.',
  },
  {
    icon: Sparkles,
    title: 'Clean & Well-Maintained',
    description:
      'The room is regularly cleaned and maintained to ensure a hygienic and pleasant atmosphere at all times.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Connectivity',
    description:
      'High-speed Wi-Fi is available in the room, enabling students to study or browse the internet during free time.',
  },
  {
    icon: ShieldCheck,
    title: 'CCTV Monitored Entrance',
    description:
      'The entrance area is monitored with CCTV cameras for additional security and safety of students.',
  },
];

const LadiesCommonRoom: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Ladies Common Room"
        breadcrumbs={[
          { label: 'Facilities', href: '/facilities' },
          { label: 'Ladies Common Room' },
        ]}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Safe & Supportive
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Ladies Common Room
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  VCET is committed to providing a comfortable, safe, and inclusive environment for
                  all students. The Ladies Common Room is a dedicated space exclusively for female
                  students to relax, study, and recharge during college hours.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  The room is thoughtfully designed with essential amenities including comfortable
                  seating, a rest area, pantry facilities, and secure access — ensuring the
                  well-being and convenience of our female students.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    ladies-common-room.jpg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Amenities & Features
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Every detail is designed with the comfort and safety of our female students in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <amenity.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-brand-light rounded-xl p-6 border border-brand-blue/10 text-center">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-brand-navy">Accessible During College Hours:</span>{' '}
                The Ladies Common Room is available to all enrolled female students. For any
                concerns or suggestions, please contact the Women's Grievance Cell.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LadiesCommonRoom;
