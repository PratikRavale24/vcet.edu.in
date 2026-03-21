import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Users, Rocket, Code, Palette, Gamepad2, Camera, Music, Lightbulb, Globe, Wrench } from 'lucide-react';

const stats = [
  { icon: Users, value: '10+', label: 'Active Clubs' },
  { icon: Rocket, value: '100+', label: 'Events / Year' },
  { icon: Lightbulb, value: '1000+', label: 'Students Engaged' },
  { icon: Globe, value: 'Campus-Wide', label: 'Participation' },
];

const clubs = [
  {
    icon: Code,
    title: 'Coding Club',
    description: 'A vibrant community of coders practicing competitive programming, open-source contributions, and software development projects.',
  },
  {
    icon: Rocket,
    title: 'Robotics Club',
    description: 'Building and programming robots for competitions and exhibitions, exploring the intersection of mechanical and electronic engineering.',
  },
  {
    icon: Palette,
    title: 'Art & Design Club',
    description: 'Fostering creativity through digital art, graphic design, UI/UX workshops, and collaborative design projects.',
  },
  {
    icon: Gamepad2,
    title: 'Gaming & E-Sports Club',
    description: 'Organizing gaming tournaments, e-sports competitions, and game development workshops for enthusiasts.',
  },
  {
    icon: Camera,
    title: 'Photography Club',
    description: 'Capturing campus life, organizing photo walks, editing workshops, and photography exhibitions to showcase student talent.',
  },
  {
    icon: Music,
    title: 'Music Club',
    description: 'Bringing together musicians, singers, and performers for jam sessions, band performances, and talent showcases.',
  },
  {
    icon: Globe,
    title: 'Entrepreneurship Club',
    description: 'Nurturing the entrepreneurial spirit through startup workshops, pitch competitions, and mentorship from successful entrepreneurs.',
  },
  {
    icon: Wrench,
    title: "Maker's Club",
    description: 'A hands-on club for tinkerers and innovators to build prototypes, experiment with 3D printing, and create IoT projects.',
  },
];

const benefits = [
  {
    title: 'Skill Development',
    description: 'Clubs provide practical, hands-on experiences that complement classroom learning and build industry-relevant skills.',
  },
  {
    title: 'Networking & Community',
    description: 'Connect with like-minded peers, seniors, and alumni who share your interests and can guide your career journey.',
  },
  {
    title: 'Leadership Opportunities',
    description: 'Take on leadership roles, organize events, and develop management and communication skills beyond the curriculum.',
  },
];

const StudentsClub: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Students Club"
        breadcrumbs={[
          { label: 'Students Club' },
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
                    students-club.jpg
                  </span>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-0.5 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
                    Explore. Learn. Grow.
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                  Student Clubs at VCET
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  VCET boasts a vibrant ecosystem of student clubs catering to diverse interests – from
                  technology and coding to arts, music, and entrepreneurship. These clubs provide an
                  excellent platform for students to explore their passions, develop new skills, and
                  build lasting friendships.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Each club is student-run with faculty guidance, organizing regular events, workshops,
                  competitions, and collaborative projects that make campus life enriching and memorable.
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

      {/* Clubs Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Our Clubs
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Something for everyone – find your tribe and unleash your potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clubs.map((club, idx) => (
              <div
                key={idx}
                className="reveal group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30"
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <club.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {club.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Why Join a Club?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Beyond academics – build skills, connections, and memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="reveal group bg-gradient-to-br from-brand-dark via-brand-blue to-brand-navy rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-5 h-5 text-brand-gold" />
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

export default StudentsClub;
