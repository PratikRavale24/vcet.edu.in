import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Stethoscope, HeartPulse, Pill, Ambulance, ClipboardCheck, Clock, ShieldPlus, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Medical Room',
    description:
      'A fully equipped on-campus medical room with essential diagnostic instruments and basic treatment capabilities for students and staff.',
  },
  {
    icon: Pill,
    title: 'First Aid Facility',
    description:
      'Comprehensive first aid kits available across departments and labs, along with trained staff to provide immediate medical assistance.',
  },
  {
    icon: UserCheck,
    title: 'Doctor Visits',
    description:
      'A qualified medical doctor visits the campus on a regular schedule to provide consultations, checkups, and medical advice.',
  },
  {
    icon: ClipboardCheck,
    title: 'Annual Health Checkups',
    description:
      'Yearly health screening programs for all students including blood tests, eye exams, BMI assessment, and general wellness evaluation.',
  },
  {
    icon: Ambulance,
    title: 'Ambulance Service',
    description:
      'An emergency ambulance service is available on call to transport students or staff to nearby hospitals in case of medical emergencies.',
  },
  {
    icon: HeartPulse,
    title: 'Health Awareness Drives',
    description:
      'Regular health awareness campaigns, blood donation drives, and wellness sessions organized in collaboration with medical institutions.',
  },
  {
    icon: ShieldPlus,
    title: 'Insurance Coverage',
    description:
      'Group medical insurance coverage for students, providing financial protection and access to healthcare services throughout the academic year.',
  },
  {
    icon: Clock,
    title: 'Round-the-Clock Support',
    description:
      'Emergency medical support is available during all college hours with provisions for after-hours emergencies through nearby hospital tie-ups.',
  },
];

const HealthFacilities: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Health Facilities"
        breadcrumbs={[
          { label: 'Facilities', href: '/facilities' },
          { label: 'Health Facilities' },
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
                    Student Health
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Health Facilities
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  VCET places the highest priority on the health and safety of its students and
                  staff. The college maintains a well-equipped medical room on campus, staffed with
                  qualified medical personnel and first aid provisions to handle day-to-day health
                  concerns and emergencies.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  From regular doctor visits and annual health checkups to emergency ambulance
                  services and health awareness drives, VCET ensures a comprehensive healthcare
                  support system for the entire campus community.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="bg-brand-light rounded-2xl aspect-[4/3] flex items-center justify-center border border-brand-blue/10">
                  <span className="text-sm font-semibold text-brand-blue/40 tracking-wide">
                    health-facilities.jpg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Healthcare Services
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              A comprehensive range of healthcare services to keep our campus community healthy and
              safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

      {/* Emergency Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-8 text-center">
              <Ambulance className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Emergency? We're Here to Help
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto">
                In case of a medical emergency, immediately contact the college medical room or
                administrative office. Our ambulance service and nearby hospital tie-ups ensure
                rapid response and professional medical care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HealthFacilities;
