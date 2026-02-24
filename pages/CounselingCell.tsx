import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Heart, Brain, MessageCircle, Shield, Users, Target, Smile, Phone } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Mental Health Support',
    description:
      'Professional counseling sessions to address stress, anxiety, and emotional well-being of students during their academic journey.',
  },
  {
    icon: Target,
    title: 'Career Guidance',
    description:
      'One-on-one career counseling to help students explore career paths, prepare for placements, and make informed decisions.',
  },
  {
    icon: MessageCircle,
    title: 'Confidential Sessions',
    description:
      'All counseling sessions are strictly confidential, creating a safe space where students can openly discuss their concerns.',
  },
  {
    icon: Users,
    title: 'Group Workshops',
    description:
      'Regular workshops on stress management, time management, communication skills, and personal development.',
  },
  {
    icon: Shield,
    title: 'Anti-Ragging Support',
    description:
      'Dedicated support for students facing ragging or bullying with a zero-tolerance policy and immediate redressal mechanism.',
  },
  {
    icon: Smile,
    title: 'Peer Counseling',
    description:
      'Trained student volunteers who provide peer-to-peer support, making it easier for students to seek help in a friendly environment.',
  },
];

const CounselingCell: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Counseling Cell"
        breadcrumbs={[
          { label: 'Facilities', href: '/facilities' },
          { label: 'Counseling Cell' },
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
                    counseling-cell.jpg
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Student Wellness
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Counseling Cell
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  The Counseling Cell at VCET is committed to nurturing the mental and emotional
                  well-being of every student. We believe that a healthy mind is the foundation of
                  academic success of personal growth.
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Our team of professional counselors provides confidential, one-on-one sessions,
                  career guidance, and group workshops to help students navigate the challenges of
                  college life with confidence and resilience.
                </p>

                <div className="flex items-center gap-4 p-4 bg-brand-light rounded-xl border border-brand-blue/10">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-0.5">
                      Helpline
                    </p>
                    <p className="text-sm font-semibold text-brand-navy">
                      Available during college hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Our Services
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We offer a range of counseling and support services tailored to the needs of our
              student community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-8 text-center">
              <Heart className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-3">
                You Are Not Alone
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto">
                If you or someone you know is struggling, don't hesitate to reach out. Our
                counselors are here to listen, guide, and support you through every step. All
                interactions are completely confidential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CounselingCell;
