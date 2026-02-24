import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { BookOpen, Mic2, PenTool, Brain, MessageSquare, Award, Sparkles, Users } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '15+', label: 'Events / Year' },
  { icon: Users, value: '200+', label: 'Active Members' },
  { icon: Award, value: '30+', label: 'Awards Won' },
  { icon: Sparkles, value: '5+', label: 'Years Active' },
];

const activities = [
  {
    icon: MessageSquare,
    title: 'Debates',
    description: 'Regular debating sessions on contemporary topics, nurturing critical thinking, public speaking, and the art of persuasion among students.',
  },
  {
    icon: Mic2,
    title: 'Elocution Competitions',
    description: 'Public speaking and elocution events that help students develop confidence, clarity of expression, and oratory skills.',
  },
  {
    icon: PenTool,
    title: 'Essay Writing',
    description: 'Creative and academic essay writing competitions that sharpen analytical thinking and articulate written expression.',
  },
  {
    icon: Brain,
    title: 'Quiz Competitions',
    description: 'Inter-class and inter-college quiz events covering science, technology, general knowledge, and current affairs.',
  },
  {
    icon: BookOpen,
    title: 'Poetry & Creative Writing',
    description: 'Workshops and contests encouraging students to explore poetry, storytelling, and creative writing in multiple languages.',
  },
  {
    icon: Sparkles,
    title: 'Workshops & Seminars',
    description: 'Expert-led workshops on communication skills, creative writing techniques, and literary appreciation for all-round development.',
  },
];

const highlights = [
  {
    title: 'Annual Literary Fest',
    description: 'A flagship event featuring debates, quizzes, poetry slams, storytelling, and creative writing that draws participation from colleges across the region.',
  },
  {
    title: 'Inter-College Debate Championships',
    description: 'VCET Literati members regularly participate and win laurels at prestigious inter-college and university-level debate contests.',
  },
  {
    title: 'College Magazine',
    description: 'The literary club curates and publishes the annual college magazine, showcasing the best of student writing, art, and photography.',
  },
];

const Literati: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Literati"
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: 'Literati' },
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
                    literati.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Words That Inspire
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Literati – The Literary Club
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Literati is the literary club of VCET, dedicated to fostering a love for language,
                  literature, and creative expression. The club provides a platform for students to
                  hone their skills in public speaking, writing, and critical thinking through a
                  variety of engaging activities throughout the year.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  From fiery debates to thoughtful essays, from enchanting poetry to challenging
                  quizzes, Literati ensures that every student finds their voice and develops the
                  communication skills essential for professional success.
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
              Club Activities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Engaging literary pursuits that sharpen minds and inspire creativity.
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

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Highlights
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Flagship events and achievements of the literary club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-brand-gold" />
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

export default Literati;
