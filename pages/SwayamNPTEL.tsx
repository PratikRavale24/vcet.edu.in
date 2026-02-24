import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { BookOpen, Award, Globe, Users, ExternalLink, CheckCircle } from 'lucide-react';

const benefits = [
  'Access to high-quality courses from IITs and IISc',
  'Industry-relevant certifications at no or minimal cost',
  'Flexible learning schedule alongside regular academics',
  'Earn additional credits towards your degree',
  'Proctored exams conducted at VCET as Local Chapter',
  'Faculty coordinators to guide students through courses',
];

const stats = [
  { icon: Users, label: 'Students Enrolled', value: '500+' },
  { icon: Award, label: 'Certifications Earned', value: '300+' },
  { icon: BookOpen, label: 'Courses Offered', value: '100+' },
  { icon: Globe, label: 'Disciplines Covered', value: '15+' },
];

const SwayamNPTEL: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Swayam – NPTEL"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Swayam – NPTEL' },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Online Learning
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  SWAYAM NPTEL Local Chapter at VCET
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  VCET is a recognized SWAYAM-NPTEL Local Chapter, enabling students and faculty
                  to access world-class online courses offered by IITs, IISc, and other premier
                  institutions through the National Programme on Technology Enhanced Learning (NPTEL).
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  SWAYAM (Study Webs of Active-learning for Young Aspiring Minds) is an initiative
                  by the Government of India to provide free online education. Through NPTEL,
                  students can earn certificates in engineering, science, management, and humanities
                  disciplines, complementing their regular curriculum.
                </p>
                <a
                  href="https://swayam.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-blue to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Visit SWAYAM Portal
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">swayam-nptel.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-gradient-to-r from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="reveal text-center"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Benefits of NPTEL Courses
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Enhance your academic profile with globally recognized online certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="reveal flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-sm transition-all duration-300"
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

export default SwayamNPTEL;
