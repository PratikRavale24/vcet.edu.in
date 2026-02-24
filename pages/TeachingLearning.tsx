import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Monitor, Lightbulb, Briefcase, Users, BookOpen, GraduationCap } from 'lucide-react';

const processes = [
  {
    icon: Monitor,
    title: 'ICT-Enabled Classrooms',
    description:
      'State-of-the-art smart classrooms equipped with projectors, interactive boards, and high-speed internet facilitate an engaging and technology-driven learning experience.',
  },
  {
    icon: Lightbulb,
    title: 'Project-Based Learning',
    description:
      'Students undertake real-world projects from their early semesters, fostering creativity, problem-solving skills, and the ability to apply theoretical concepts to practical challenges.',
  },
  {
    icon: Briefcase,
    title: 'Industry Collaboration',
    description:
      'Partnerships with leading industry players ensure curriculum relevance, guest lectures by domain experts, industrial visits, and internship opportunities for students.',
  },
  {
    icon: Users,
    title: 'Mentoring Programs',
    description:
      'A robust mentoring framework pairs every student with a dedicated faculty mentor who guides them through academic, career, and personal development goals.',
  },
  {
    icon: BookOpen,
    title: 'Outcome-Based Education',
    description:
      'VCET follows OBE framework aligned with NBA and NAAC standards, ensuring measurable learning outcomes and continuous improvement in teaching quality.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Assessment',
    description:
      'Regular assessments, quizzes, assignments, and evaluations ensure students stay on track and receive timely feedback on their academic progress.',
  },
];

const TeachingLearning: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Teaching Learning Process"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Teaching Learning Process' },
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="reveal">
                <div className="aspect-[4/3] bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Monitor className="w-8 h-8 text-brand-blue/40" />
                    </div>
                    <p className="text-xs text-slate-400">teaching-learning-process.jpg</p>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Our Approach
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
                  Innovative Teaching & Learning at VCET
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  At VCET, we believe in creating a holistic learning environment that goes
                  beyond traditional classroom teaching. Our teaching-learning process integrates
                  modern pedagogical methods with cutting-edge technology to deliver an immersive
                  educational experience.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The institution follows an outcome-based education framework, ensuring that
                  every aspect of our curriculum is designed to achieve specific learning outcomes
                  aligned with global standards of engineering education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Cards */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="reveal text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                Key Pillars of Our Teaching-Learning Process
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A multi-faceted approach to engineering education that ensures students are
                industry-ready and future-prepared.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((item, idx) => (
                <div
                  key={item.title}
                  className="reveal bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-navy rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeachingLearning;
