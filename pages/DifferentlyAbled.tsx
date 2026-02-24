import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Accessibility, ArrowUpFromLine, DoorOpen, MonitorSmartphone, BookOpen, HandHelping, GraduationCap, Building } from 'lucide-react';

const provisions = [
  {
    icon: ArrowUpFromLine,
    title: 'Ramps & Slopes',
    description:
      'Wheelchair-accessible ramps are installed at all building entrances and key transition points, ensuring barrier-free movement across the campus.',
  },
  {
    icon: Building,
    title: 'Elevators',
    description:
      'Elevators are available in multi-storey buildings with accessible controls, ensuring students with mobility challenges can reach all floors comfortably.',
  },
  {
    icon: DoorOpen,
    title: 'Accessible Restrooms',
    description:
      'Specially designed restrooms with grab bars, wider doors, and appropriate fixtures are provided on every floor for differently-abled students.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Assistive Technology',
    description:
      'Screen readers, magnification software, and assistive devices are available in labs and the library to support students with visual or hearing impairments.',
  },
  {
    icon: BookOpen,
    title: 'Accessible Learning Materials',
    description:
      'Course materials are provided in accessible formats including large print, audio, and digital formats compatible with assistive technologies.',
  },
  {
    icon: HandHelping,
    title: 'Dedicated Support Staff',
    description:
      'Trained support staff and student volunteers assist differently-abled students with navigation, note-taking, and other academic needs.',
  },
  {
    icon: GraduationCap,
    title: 'Exam Accommodations',
    description:
      'Special provisions during examinations including extra time, scribes, separate seating, and accessible question papers as per university guidelines.',
  },
  {
    icon: Accessibility,
    title: 'Reserved Seating',
    description:
      'Priority seating in classrooms, auditoriums, and common areas, along with reserved parking spaces near building entrances.',
  },
];

const DifferentlyAbled: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Differently-Abled Facilities"
        breadcrumbs={[
          { label: 'Facilities', href: '/facilities' },
          { label: 'Differently-Abled Facilities' },
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
                    differently-abled-facilities.jpg
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Inclusive Campus
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Differently-Abled Facilities
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  VCET is committed to creating an inclusive and accessible campus for all
                  students, including those with disabilities. The institution has implemented a
                  comprehensive set of infrastructure and support services to ensure that
                  differently-abled students can fully participate in academic and campus life.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  From wheelchair ramps and elevators to assistive technology and dedicated
                  support staff, VCET strives to remove barriers and empower every student to
                  achieve their full potential in a supportive and accommodating environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provisions Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Accessibility Provisions
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Infrastructure and services designed to ensure equal access and opportunity for
              every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {provisions.map((provision, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <provision.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {provision.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{provision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-8 text-center">
              <Accessibility className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Our Commitment to Inclusivity
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto">
                VCET continuously works to improve accessibility across the campus. If you have
                specific needs or suggestions for improving our facilities, please reach out to
                the administration office. We are here to ensure every student feels welcome and
                supported.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DifferentlyAbled;
