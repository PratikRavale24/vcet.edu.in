import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Quote, BookOpen, Award, Users, Target } from 'lucide-react';

const highlights = [
  { icon: BookOpen, label: 'Academic Programs', value: '10+' },
  { icon: Award, label: 'University Ranks', value: '50+' },
  { icon: Users, label: 'Faculty Members', value: '150+' },
  { icon: Target, label: 'Research Projects', value: '80+' },
];

const DeanAcademics: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Dean Academic's Desk"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: "Dean Academic's Desk" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 items-start">

              {/* Profile Card */}
              <div className="reveal">
                <div className="sticky top-32">
                  <div className="bg-brand-light rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    {/* Photo Placeholder */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-3xl font-display font-bold text-brand-blue/30">DA</span>
                        </div>
                        <p className="text-xs text-slate-400">dean-academics.jpg</p>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-display font-bold text-brand-navy">Dean Academics</h3>
                      <p className="text-sm text-brand-gold font-semibold mt-1">Dean Academics</p>
                      <p className="text-xs text-slate-400 mt-0.5">VCET, Vasai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2 space-y-6">
                {/* Decorative Quote */}
                <div className="reveal flex items-start gap-4">
                  <Quote className="w-10 h-10 text-brand-gold/30 flex-shrink-0 rotate-180" />
                  <p className="text-xl md:text-2xl font-display font-semibold text-brand-navy leading-snug italic">
                    Academic excellence is the cornerstone of holistic development and the catalyst for innovation.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-brand-gold/30 to-transparent my-6" />

                <div className="space-y-5 reveal" style={{ transitionDelay: '0.1s' }}>
                  <p className="text-slate-600 leading-relaxed">
                    At Vidyavardhini's College of Engineering and Technology, we are deeply committed
                    to fostering academic excellence and nurturing a culture of continuous learning.
                    Our academic framework is designed to equip students with not just theoretical
                    knowledge, but also the practical skills and critical thinking abilities needed
                    to excel in today's dynamic world.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    We have established a robust teaching-learning ecosystem supported by
                    ICT-enabled classrooms, well-equipped laboratories, and a dedicated faculty
                    team. Our curriculum is regularly updated in consultation with industry experts
                    to ensure relevance and alignment with emerging trends in technology and
                    engineering.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    The institution places great emphasis on outcome-based education (OBE) and
                    follows a structured approach to achieve program outcomes and course outcomes.
                    We encourage project-based learning, research activities, and participation in
                    national and international conferences to broaden our students' academic horizons.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    Our mentoring programs ensure personalized attention to every student, helping
                    them overcome academic challenges and reach their full potential. We also
                    promote interdisciplinary learning through Honours and Minor degree programs,
                    NPTEL courses, and various skill development initiatives.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    I invite all students, faculty, and stakeholders to join hands in our mission
                    of academic excellence. Together, we can create a vibrant learning community
                    that inspires innovation and shapes future leaders.
                  </p>
                </div>

                {/* Signature area */}
                <div className="reveal pt-6 border-t border-gray-100" style={{ transitionDelay: '0.2s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-0.5 bg-brand-gold" />
                    <div>
                      <p className="font-display font-bold text-brand-navy">Dean Academics</p>
                      <p className="text-sm text-brand-gold">VCET, Vasai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={item.label}
                  className="reveal text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-display font-bold text-brand-navy">{item.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DeanAcademics;
