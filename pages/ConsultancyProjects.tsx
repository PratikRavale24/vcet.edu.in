import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Briefcase, Users, Settings, CheckCircle, ExternalLink } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Technical Consulting',
    description: 'Expert technical advice and problem-solving for industry challenges in engineering and technology domains.',
  },
  {
    icon: Briefcase,
    title: 'Testing & Analysis',
    description: 'Access to advanced laboratory equipment for material testing, structural analysis, and quality assessment.',
  },
  {
    icon: Users,
    title: 'Training Programs',
    description: 'Customized training and skill development programs designed for industry professionals and corporates.',
  },
];

const benefits = [
  'Access to specialized faculty expertise across departments',
  'State-of-the-art laboratory facilities and equipment',
  'Cost-effective solutions for industry partners',
  'Confidentiality and IP protection assured',
  'Collaborative research leading to publications and patents',
  'Industry-academia knowledge exchange',
];

const ConsultancyProjects: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Consultancy Projects"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Consultancy Projects' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">consultancy-projects.jpg</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Industry Collaboration
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Faculty Consultancy Services
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET faculty members offer their domain expertise to industry through consultancy
                  projects spanning multiple engineering and technology disciplines. These
                  collaborations bridge the gap between academia and industry, providing
                  practical solutions to real-world challenges.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The institution has a dedicated consultancy cell that facilitates industry
                  partnerships, manages project agreements, and ensures timely delivery of
                  consultancy services while maintaining the highest quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Our Consultancy Services
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Leveraging academic expertise for industry solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="reveal bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Why Partner with VCET?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-3 p-4 bg-brand-light rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all duration-300"
                  style={{ transitionDelay: `${idx * 0.06}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConsultancyProjects;
